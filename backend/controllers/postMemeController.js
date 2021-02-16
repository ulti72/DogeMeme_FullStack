const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId

var { PostMeme } = require('../models/postMemes')


router.get('/', (req, res) => {
    PostMeme.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    }).limit(100)
})



router.get('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    PostMeme.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while fetching a record : ' + JSON.stringify(err, undefined, 2))
    })
})


router.post('/', (req, res) => {
    var newRecord = new PostMeme({
        name: req.body.name,
        caption: req.body.caption,
        url: req.body.url
    })

    newRecord.save((err, docs) => {
        if (!err){
            var resultme = {"id":docs._id}
            res.send(resultme)
        }
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })
})


router.patch('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(404).send('No record with given id : ' + req.params.id)

    var updatedRecord = {
        caption: req.body.caption,
        url: req.body.url
    }

    PostMeme.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while updating a record : ' + JSON.stringify(err, undefined, 2))
    })
})

router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    PostMeme.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while deleting a record : ' + JSON.stringify(err, undefined, 2))
    })
})



module.exports = router
