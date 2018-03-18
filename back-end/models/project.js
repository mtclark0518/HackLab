module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Project', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        owner: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        members: {
            type: Sequelize.ARRAY(Sequelize.INTEGER),
        }
    });
    return model
};
