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

    // hashes linkedInId value on account creation
    model.prototype.hash = function(account) {
        return bcrypt.hashSync(account, bcrypt.genSaltSync(8));
    };

    // adds method to account to check 
    model.prototype.validUser = function(attempted, encrypted) {
        return bcrypt.compareSync(attempted, encrypted);
    };

    return model
}
