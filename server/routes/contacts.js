const router = require('express').Router();
const contactModel = require('../model/contact');

router.get('/', async (req, res, next) => {
    try {
        let contacts = await contactModel.find();
        res.send({
            contacts: contacts
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    let newContact = new contactModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        deliveryAddress: req.body.deliveryAddress,
        billingAddress: req.body.billingAddress
    });
    try {
        await newContact.save();
        res.send({
            success: true,
            message: 'Contact saved!'
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let existing = await contactModel.findById(req.params.id);
        if (existing) {
            res.send(
                existing
            );
        } else {
            res.send({
                success: false,
                message: `Can't find ${req.params.id}`
            });
        }
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        let existing = await contactModel.findById(req.params.id);
        if (existing) {
            existing.firstName = req.body.firstName;
            existing.lastName = req.body.lastName;
            existing.deliveryAddress = req.body.deliveryAddress;
            existing.billingAddress = req.body.billingAddress;
            await existing.save();
            res.send({
                success: true
            });
        } else {
            res.send({
                success: false,
                message: `Can't find ${req.params.id}`
            });
        }
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await contactModel.remove({ _id: req.params.id })
        res.send({
            success: true,
            message: 'Contact deleted!'
        });
    } catch (err) {
        next(err);
    }
})

module.exports = router;
