module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Profile', {
        profileId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // reference to user
        userId: {
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
