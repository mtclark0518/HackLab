module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('Project', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        owner: {
            type: Sequelize.UUID
        },
        location: {
            type: Sequelize.STRING
        },
        overview: {
            type: Sequelize.TEXT
        },
        projectName: {
            type: Sequelize.STRING,
        },
        projectIMG: {
            type: Sequelize.BLOB
        },
        projectStack: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        projectType: {
            type: Sequelize.ARRAY(Sequelize.ENUM),
            values: [
                'Books','Business','Catalogs',
                'Education','Entertainment','Finance',
                'Food & Drink','Games','Health & Fitness','Lifestyle',
                'Medical','Music','Navigation','News',
                'Photo & Video','Productivity','Reference',
                'Social Networking','Sports',
                'Travel','Utilities','Weather'
            ]
        },
        projectUrl: {
            type: Sequelize.STRING
        }

    });
    return model
};
