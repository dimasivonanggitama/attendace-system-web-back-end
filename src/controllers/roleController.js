const db = require("../models");
const role = db.Role;

const RoleController = {
    create: async (req, res) => {
        try {
            const { roleName } = req.body;
            await db.sequelize.transaction(async (t) => {
                const result = await role.create({
                    role_name: roleName
                })
            }, { transaction: t });

            return res.status(200).json({
                message: `Peran ${roleName} berhasil ditambahkan.`
            })
        } catch (err) {
            return res.status(503).json({
                message: 'Mohon maaf, layanan tidak tersedia saat ini. Silakan coba lagi nanti.',
                error: err.message
            });
        }
    },
    fetch: async (req, res) => {
        try {
            const result = await role.findAll();

            return res.status(200).json({
                data: result,
                message: `Seluruh data peran berhasil diambil.`
            })
        } catch (err) {
            return res.status(503).json({
                message: 'Mohon maaf, layanan tidak tersedia saat ini. Silakan coba lagi nanti.',
                error: err.message
            });
        }
    }
}

module.exports = RoleController;