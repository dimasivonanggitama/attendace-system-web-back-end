const db = require("../models");
const role = db.Role;

const RoleController = {
    addRole: async (req, res) => {
        try {
            return res.status(200).json({
                message: "You reached Role Controller"
            })
        } catch (error) {

        }
    }
}

module.exports = RoleController;