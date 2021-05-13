const { user } = require('../models/user');

const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    
    const {body} = req;
    let notValid = [];
    if (body.hasOwnProperty('id')) {
        notValid.push('req has "id" property');
        next()
    }
    Object.keys(user).map(e => {
        let text = e.replace(/([a-z\d])([A-Z])/g, '$1' + " " + '$2')
                    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + " " + '$2')
                    .toLowerCase();
        if(!body.hasOwnProperty(e) && e !== 'id') {
            notValid.push(`${text} is empty`);
        }
        if ((e !== 'id') && (!user[e](body[e]))) {
            notValid.push(`${text} is not valid`);
        }
    });

    if(notValid.length <= 0) {
        return res.status(200).json({user: {firstName, lastName, phoneNumber, email, password} = body});
    } else if (notValid.length > 0) {
        return res.status(400).json({error: true, message: notValid[0]})
    }
    next();
};

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    const {body} = req;
    let notValid = [];
    if (body.hasOwnProperty('id')) {
        notValid.push('req has "id" property');
        next();
    }
    Object.keys(user).map(e => {
        let text = e.replace(/([a-z\d])([A-Z])/g, '$1' + " " + '$2')
                    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + " " + '$2')
                    .toLowerCase();
        if(!body.hasOwnProperty(e) && e !== 'id') {
            notValid.push(`${text} is epmty`);
        }
        if((e !== 'id') && (!user[e](body[e]))) {
            notValid.push(`${text} is not valid`);
        }
    });
    if(notValid.length <= 0) {
        return res.status(200).json({user: {firstName, lastName, phoneNumber, email, password} = body});
    } else if(notValid.length > 0) {
        return res.status(400).json({error: true, message: notValid[0]});
    }
    next();
};

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;