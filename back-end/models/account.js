module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Account', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        linkedInId: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
    });

    return model
}
