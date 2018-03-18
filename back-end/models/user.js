module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        headline: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        industry: {
            type: Sequelize.STRING
        },
        pictureUrl: {
            type: Sequelize.STRING
        },
        summary: {
            type: Sequelize.TEXT
        },
        gaCohort: {
            type: Sequelize.STRING
        },
        interestCategories: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        }
    });
    return model
}
