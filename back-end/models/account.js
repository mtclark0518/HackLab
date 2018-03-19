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
// TODO
    // model.prototype.hash = function(password) {
    //     return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    // };
    // model.prototype.validPassword = function(attempted, encrypted) {
    //     return bcrypt.compareSync(attempted, encrypted);
    // };

    return model
}
