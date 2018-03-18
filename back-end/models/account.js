module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Account', {
        accountId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        linkedInId: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    });
    return model
}
