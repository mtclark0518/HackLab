module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // reference to account
        accountId: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        headline: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
    return model
}
