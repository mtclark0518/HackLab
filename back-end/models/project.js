module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Project', {
        id: {
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
