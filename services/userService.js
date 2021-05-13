const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user
    // TODO: change return -> throw Error('')
    getAllUsers() {
        const users = UserRepository.getAll();
        if(!users) {
            throw Error('Database is empty');
        }
        return users;
    }

    // getOneUser(search) {
    //     const user = UserRepository.getOne(search);
    //     if(!user) {
    //         return null;
    //     }
    //     return user;
    // }

    create(data) {
        const user = UserRepository.create(data);
        if(!user) {
            throw Error(`${data} not created`);
        }
        return user;
    }

    update(id, dataToUpdate) {
        const user = UserRepository.update(id, dataToUpdate);
        if(!user) {
            throw Error('user not found');
        }
        return user;
    }

    delete(id) {
        const user = UserRepository.delete(id);
        if(!user) {
            throw Error('User not found');
        }
        return user;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            throw Error('User not found');
        }
        return item;
    }
}

module.exports = new UserService();