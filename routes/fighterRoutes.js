const { Router } = require('express');
const FighterService = require('../services/fighterService');
const UserService = require('../services/userService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter
router.get('/', (req, res, next) => {
    try {
        const fighters = FighterService.getAllFighters();
        if(fighters) {
            res.status(200);
            res.data = fighters;
        }
    } catch (err) {
        res.status(400);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const foundFighter = FighterService.search({id});
        if(foundFighter) {
            res.status(200);
            res.data = foundFighter;
        }
    } catch (err) {
        res.status(400);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.post('/', createFighterValid, (req, res, next) => {
    try {
        const validFighter = req;
        const result = UserService.create(validFighter);
        if(result) {
            res.status(200);
            res.data = result;
        }
    } catch (err) {
        res.status(400);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.put('/:id', updateFighterValid, (req, res, next) => {
    try {
        const id = req.params.id;
        const updateFighter = FighterService.update(id, fighterInfo);
        if(updateFighter) {
            res.status(200);
            res.data = updateFighter;
        }
    } catch (err) {
        res.status(400);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedFighter = FighterService.delete(id);
        if(deletedFighter) {
            res.status(200);
            res.data = deletedFighter;
        }
    } catch (err) {
        res.status(400);
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;