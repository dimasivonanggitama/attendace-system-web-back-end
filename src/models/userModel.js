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
          allowNull: false,
          type: Sequelize.STRING
        },
        fullname: {
          allowNull: false,
          type: Sequelize.STRING
        },
        birthday: {
          allowNull: false,
          type: Sequelize.DATE
        },
        verified: {
          type: Sequelize.BOOLEAN
        },
        role_id: {
          type: Sequelize.INTEGER
        }
    }, {
        createdAt: true,
        timestamps: false,
        updatedAt: false
    });

    User.associate = models => {
        User.hasOne(models.Role, {foreignKey: "role_id"});
    }

    return User;
}