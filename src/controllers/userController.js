const db = require("../models");
const user = db.User;

const UserController = {
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