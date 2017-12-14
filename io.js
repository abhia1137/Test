var express = require('express');
var app = express();
var http  = require('http');	
var mongojs = require('mongojs');
var db = mongojs('socket',['socket']); // socket is a database name
var bodyParser =  require('body-parser');
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

		app.get('/details',(req,res)=>{
			db.simple.find({"name": {$regex : req.query.name}},(err, docs)=>{
				if (err){
					throw err;
				}
				else{
					res.json(docs);
					//console.log(res.status(400).send());
					console.log(docs+ ": " + req.query.name+ ": " +req.body.name);
				}
			});
		});
		app.post('/details', (req,res)=>{
			db.simple.insert(req.body, (err, docs)=>{
				if (err){
					throw err;
				}
				else{
					res.json(docs);
					console.log(docs);
				}
			});
		});

app.delete('/details/:id1', (req,res)=>{
	 var id1 = req.params.id1
	db.simple.remove({_id: mongojs.ObjectId(id1)} , (err, docs)=>{
		console.log(req.params.id);
		res.json(docs);
	})
})

app.put('/details/:id', (req,res)=>{
	var id  = req.body.id;
	db.simple.save({query: {_id: mongojs.ObjectId(id)}, 
	update: 	{$set: {"name": req.body.name, "age": req.body.age}}, multi: true}, function(){
		db.simple.find({_id: mongojs.ObjectId(id)} , (err, docs)=>{
				res.json(docs);
				console.log(docs + ":" + req.params.id);	
				console.log(req.params);
				console.log(req.body);
//db.simple.update({"_id" :ObjectId("5a0969f6b4e1019436195bc6")}, {$set: {"name": "Abhi"}}, {multi: true})

		})
	//res.send({type: "PUT"});	
	})

})

//{$and:[{"name":req.query.name}, {"scores.score":{$gt:req.query.score}}]}
	
		app.listen(4444, ()=> console.log('Server is listning to port 4444'));
