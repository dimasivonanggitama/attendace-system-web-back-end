const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const transporter = require('../helpers/transporter');
const path = require('path');
const fs = require('fs').promises;
const handlebars = require('handlebars');
const db = require("../models");
const user = db.User;

const UserController = {
    create: async (req, res) => {
        try {
            const { email, fullname, role } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash((email+fullname+role), salt);
            
            await db.sequelize.transaction(async (t) => {
                const result = await user.create({
                    email,
                    fullname,
                    role_id: role,
                    verified: false
                }, { transaction: t });

                let payload = { id: result.id, email: result.email };

                const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1h' });

                const redirect = `http://localhost:3000/verification/${token}`;

                const data = await fs.readFile(
                    path.resolve(__dirname, "../email/verificationEmail.html"), 'utf-8'
                );

                const tempCompile = handlebars.compile(data);
                const tempResult = tempCompile({ fullname, redirect });

                await transporter.sendMail({
                    to: result.email,
                    subject: "Verify Account",
                    html: tempResult
                });

                return res.status(200).json({
                    message: 'Registrasi akun telah berhasil dilakukan. Silahkan periksa email yang didaftarkan untuk verifikasi akun.',
                    data: result,
                    token
                });
            });
        } catch (err) {
            return res.status(503).json({
                message: 'Mohon maaf, sedang ada pemeliharaan layanan saat ini. Silakan coba lagi nanti.',
                error: err.message
            });
        }
    },
    fetch: async (req, res) => {
        try {
            const result = await user.findAll();
            return res.status(200).send(result);
        } catch (err) {
            return res.status(503).json({
                message: 'Mohon maaf, sedang dilakukan pemeliharaan layanan saat ini. Silakan coba lagi nanti.',
                error: err.message
            });
        }
    },
}
// user.sync({alter: true})
module.exports = UserController;