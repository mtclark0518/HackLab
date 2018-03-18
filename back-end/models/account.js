module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Account', {
        id: {
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
