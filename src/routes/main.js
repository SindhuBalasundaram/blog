const express = require('express')
const router =  express.Router()


router.get('', (req, res)=>{
    const locals = {
        title: 'Node js Blog',
        desc: 'Simple Nodejs, Expressjs, MongoDB Blog Project'
    }
    res.render('index', {locals})
})

router.get('/about', (req, res)=>{
    res.render('about')
})

router.get('/contact', (req, res)=>{
    res.render('contact')
})

module.exports = router;
