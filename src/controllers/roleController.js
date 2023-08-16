const db = require("../models");
const role = db.Role;

const RoleController = {
    create: async (req, res) => {
        const { roleName } = req.body;
        try {
            await db.sequelize.transaction(async (t) => {
                await role.create({
                    role_name: roleName
                }, { transaction: t });
            });

            return res.status(200).json({
                message: `Peran ${roleName} berhasil ditambahkan.`
            });
        } catch (err) {
            return res.status(503).json({
                message: 'Mohon maaf, sedang dilakukan pemeliharaan layanan saat ini. Silakan coba lagi nanti.',
                error: err.message
            });
        }
    },
    delete: async (req, res) => {
        const { roleIDDelete } = req.body;
        console.log(roleIDDelete);
        try {
            await role.destroy({
                where: {
                    role_id: roleIDDelete
                }
            });
                
            return res.status(200).json({
                message: `Peran ${roleIDDelete} berhasil dihapus.`
            });
        } catch (err) {
            return res.status(503).json({
                message: 'Mohon maaf, sedang dilakukan pemeliharaan layanan saat ini. Silakan coba lagi nanti.',
                error: err.message
            });
        }
    },
    fetch: async (req, res) => {
        try {
            const result = await role.findAll();
            return res.status(200).send(result);
        } catch (err) {
            return res.status(503).json({
                message: 'Mohon maaf, sedang dilakukan pemeliharaan layanan saat ini. Silakan coba lagi nanti.',
                error: err.message
            });
        }
    },
    update: async (req, res) => {
        const { roleIDEdit, roleNameEdit } = req.body;
        try {
            await role.update({ role_name: roleNameEdit }, {
                where: {
                    role_id: roleIDEdit
                }
            });
                
            return res.status(200).json({
                message: `Peran ${roleNameEdit} berhasil diubah.`
            });
        } catch (err) {
            return res.status(503).json({
                message: 'Mohon maaf, sedang dilakukan pemeliharaan layanan saat ini. Silakan coba lagi nanti.',
                error: err.message
            });
        }
    }
}

module.exports = RoleController;