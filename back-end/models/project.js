module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Project', {
        projectId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        }
    });
    return model
};
