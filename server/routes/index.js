const express = require('express')
const router = express.Router()
const Photos = require('../models/photoModel')

router.get('/', (req, res) => {
    Photos.find({}, (err, photos) => {
        res.json(photos)
    })
})
router.use('/:id', (req, res, next) => {
    console.log('sdasd',req.photo, req.params.id)
    req.photo = {
        "id": "481",
        "url": "http://www.tvmaze.com/shows/1/under-the-dome",
        "name": "Under the Dome",
        "type": "Scripted"
        }
        next()
    // // return  res.json(
        
    // // )
    Photos.findOne({type : 'Scripted'})
            .exec(function (err, photo) {
                if (err) return console.log('err',err);
                else req.photo = photo 
                next()
            });
    // , (err, photo) => {
    //     if(err){
    //         console.log('err',err)
    //         res.status(500).send(err)
    //     }
    //     else 
    //         req.photo = photo 
    //         next()
    // })
})
router
    .get('/:id', (req, res) => {
        console.log('res',res)
        return res.json( req.photo )
    })
    .put('/:id', (req, res) =>{
        Object.keys(req.body).map(key=>{
            req.photo[key] = req.body[key]
        })
        req.photo.save()
        res.json(req.photo)
    })
module.exports = router;