const express = require("express")
const router = express.Router() 
const {getWisulData}= require('../Controller/fetchFunction')
const {authentication} = require("../middleware/middleware")


router.get("/getWisulData",authentication,getWisulData)



module.exports = router 