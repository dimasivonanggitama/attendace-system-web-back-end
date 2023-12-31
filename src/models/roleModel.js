  module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("Role", {
        role_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        role_name: {
          allowNull: false,
          type: Sequelize.STRING
        }
    }, {
        createdAt: false,
        timestamps: false,
        updatedAt: false
    });

    // Role.associate = models => {
    //   Role.belongsTo(models.Blog, {foreignKey: "user_id"});
    // }

    return Role;
}