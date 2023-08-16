const Role = require('./roleModel');

  module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        user_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        fullname: {
          allowNull: false,
          type: Sequelize.STRING
        },
        birthday: {
          type: Sequelize.DATE
        },
        verified: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        role_id: {
          allowNull: false,
          type: Sequelize.INTEGER
        }
    }, {
        createdAt: true,
        timestamps: false,
        updatedAt: false
    });

    // User.associate = models => {
    //     Role.hasOne(User);
    //     User.belongsTo(Role, {foreignKey: "role_id"});
    // }

    return User;
}