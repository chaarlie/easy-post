const express = require('express');
const router = express.Router();
const tags = [
    {name:'Politics'},
    {name:'Science'},
    {name:'Art'},
    {name:'Drinks'},
    {name:'Fun'},
    {name:'Entrepreneurship'},
    {name:'Entertaiment'},
    {name:'Life'},
    {name:'Comic'}
];

router.get('/', (req, res) => res.end(res.json(tags)));

module.exports = router;