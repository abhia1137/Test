var express = require('express');
var app = express();
var http  = require('http');	
//var mongodb = require('mongodb');
//var MongoClient = mongodb.MongoClient;
var mongojs = require('mongojs');
var db = mongojs('contactlist1',['contactlist1']);
var bodyParser =  require('body-parser');
//var url = 'mongodb://localhost:27017/list'


	app.use(express.static(__dirname + "/public"));
	app.use(bodyParser.json())
		app.get('/contactlist', function(req, res){
			db.contactlist1.find(function(err, docs){
				console.log(docs);
				res.json(docs);
			});
			
			});
			app.post('/contactlist', function(req, res){
				console.log(req.body);
				db.contactlist1.insert(req.body, function(err, doc){
					res.json(doc);
				});
					app.delete('/contactlist/:id', function(req,res){
						var id = req.params.id;
						console.log(id);
					});
			/*
			console.log('i have recieved a get requiest');
								person1= {   
									name: 'Tim',
									email: 'tim@gmail.com',
									number:'(571) 426-1433'
								};

								person2 = {
									name:'Liam',
									email:'neason@taken2.com',
									number: '(777) 777-7777'
								};

								person3={
									name: 'Jessie',
									email:'jessie@vma.com',
									number: '(684) 426-1232'
								};
		 
			var contactlist = [person1, person2, person3];
			res.json(contactlist);
			*/
		});
	app.listen(3000);
	console.log('running');
	
	
	