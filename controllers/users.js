const { response } = require('express');
const mongodb = require('../data/database');
const ObjectId  = require('mongodb').ObjectId;

const getAll = async (req, res) => { 
const result = await mongodb.getDabatase().db().collection('users').find();
result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
});
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDabatase().db().collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

const createuser = async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const result = await mongodb.getDabatase().db().collection('users').replaceOne({ _id: userId }, user);
    if (response.acknowledge > 0) {
        res.status(204).send();
    }else {
        res.status(500).json(response.error || 'Some error occured while updating the user.');
    }
    
}


const updateuser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDabatase().db().collection('users').replaceOne({ _id: userId }, { $set: user });
    if (result.modifiedCount > 0) {
        res.status(204).send();
    }else {
        res.status(500).json(result.error || 'Some error occured while updating the user.');
    }
}
const deleteuser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDabatase().db().collection('users').remove({ _id: userId });
    if (result.deletedCount > 0) {
        res.status(204).send();
    }else {
        res.status(500).json(result.error || 'Some error occured while deleting the user.');
    }
}



module.exports = {
    getAll,
    getSingle,
    createuser,
    updateuser,
    deleteuser
};
