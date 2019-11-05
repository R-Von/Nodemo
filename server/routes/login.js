var express = require('express')
var router = express.Router()

router.get("/",function(req,res,next){
	console.log(req)
	var data = {
		name:"user",
		pwd:"123"
	}
	res.json(data)
	// res.send('1respond with a 1resource');
})

module.exports = router;
