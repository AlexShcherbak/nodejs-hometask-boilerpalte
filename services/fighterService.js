const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    
    // from baseRepository.js
    getAllFighters() {
        const fighters = FighterRepository.getAll();
        if(!fighters) {
            throw Error('Empty')
        }
        return fighters;
    }

    getOneFighter(search) {
        const fighter = FighterRepository.getOne(search);
        if(!fighter) {
            throw Error('The fighter was not found')
        }
        return fighter;
    }
    

    create(data) {
        const fighter = FighterRepository.create(data);
        if(!fighter) {
            throw Error('The fighter is not created')
        }
        return fighter;
    }

    update(id, dataToUpdate) {
        const fighter = FighterRepository.update(id, dataToUpdate);
        if(!fighter) {
            throw Error("the fighter's data has not been updated")
        }
        return fighter;
    }

    delete(id) {
        const fighter = FighterRepository.delete(id);
        if(!fighter) {
            throw Error('The fighter was removed')
        }
        return fighter;
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
    
}

module.exports = new FighterService();