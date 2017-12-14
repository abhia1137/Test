function name(name1, city){
	this.name1 = name1;
	this.city= city;
	this.print = print;
}
obj = new name('ABhi', 'Fazilka');

obj.print()

function print(){
	console.log(this.name1+ " :" +this.city);
}
console.log('++++++++++++++++++++++++++++++++++++')



var student = {name: 'Abhi', section: 'A+B', loc:'Fazilka', obj: {IntName: 'Abhu', rolln: 1306725, loc2: "Chandigarh"}};

console.log(Object.keys(student).length);
console.log(student.name);  // student['name']; <----- does the same thing 
console.log('++++++++++++++++++++++++++++++++++++');

var list = [{
				name: "Abhi",
				age: 22,
				status: true
			},
			{
				name: "Rahul",
				age: 23,
				status: true
			},
			{
				name: "Aman",
				age: 23,
				status: false
			}
			];
		for(i = 0; i<list.length; i++){
			if(list[i].status){
				console.log(list[i].name+ " is earning");
			}
			else{
				console.log(list[i].name+ ' He is not earning')
			}
		}
			

console.log('++++++++++++++++++++++++++++++++++++')
var obj1 = {};
obj1.firstname = 'Abhi';
obj1.lastname = 'Arora';
obj1.age = 22;

var obj2 = {};
obj2.firstname = 'Rahul';
obj2.lastname = 'Khurana';
obj2.age = 23;


function NewFunction(firstname, lastname, age){
	//var NewObject = {}   //  JavaScript is creating a standered object "this", when we call a construction function
	this.firstname = firstname; //
	this.lastname  = lastname;
	this.age 	    = age; 
	//NewObject.print2 = print2;
	//return NewObject;
	}

var obj3 = new NewFunction ("Aman", 'Arora', 22);  // assigning the value to the new object(obj3) 
 // new keyword is used to put the function into constructor mode
console.log(obj3);
console.log(obj1);
console.log(obj2);


console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
var bye = {
cadance: 22,
gear: 4
}
function ByeCycle(cadance, gear){
	var New = {}
	New.cadance = cadance;
	New.gear = gear;
	
	console.log(New.cadance+ " :"  +New.gear);
};
ByeCycle(34, 3);

function CByeCycle(cadance, gear){ // Function CByeCycle(cadance, gear){
	this.cadance = cadance;		// var this = 
	this.gear = gear;          //{cadance: 23, gear: 6, show: function()
	this.show = show;   	   //{console.log(this.cadance+ " :" +this.gear);}}
								// } 
}

var bye = new CByeCycle (23, 6);      //var bye  = new CByeCycle(23,6);
bye.show();                           // CByeCycle.show();
function show(){
	console.log(this.cadance+ " :" +this.gear);
}

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
function foo(){
	
	console.log('hello');
}
foo();

var obj  ={foo: function(){
	console.log('Hello');}

};
console.log(obj);
obj.foo();

var OBJ = new foo();



console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')


var arr = [5,53,3,8, 2,33];

		var find = 53;
		
		for(i = 0; i<arr.length; i++){
			if(find===arr[i]){
				console.log("found: " + find+ " at " +i+ " location")
			}
		}
	console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')		
	var nfoo = 44;
			var reminder = nfoo%10;   //44%10 = 4
			var base = Math.floor(nfoo/10);       // 44/10 = 4
			
			var sum = reminder +base;
			
			console.log(sum);
	console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')
	
	
	var str = ['aaaaaaaaaa','bbbbbbbbbbbbbbb','cccccccccccccc','ddddddddddd','eeeeeeeeee'];
	
	var rstr = str.reverse();
	console.log(rstr);
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')
	
	
	
	var str = 'Aa kiu, I swd GH skieo 236587. GH kiu: sieo?? 25.33';
	var spaces = 0;
	var number1	= str.replace(/[^0-9]/g,"").length;
	var match = str.match(/GH/gi,"").length;
	var  chars =  str.replace(/[^A-Z-a-z]/g,"").length;
	var special = str.replace(/[^,.?:	]/g,"").length;	
			for(i =0; i<str.length; i++){
				if(str[i]===" "){
					spaces++
				};
			}
			console.log(match);
				console.log("Numbers: " +number1+ "   Chars : " +chars+ "  spaces : "   +spaces+ "  special : " + special) ;
	
//console.log(number1);

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')

//var amount = 0;
	for( i = 1; i <= 4; i++){
			for( j = 1; j <= 4; j++){
				for( k = 1; k <= 4; k++){
					if(k != i && k != j && i != j){
						console.log(i + "" + j + "" + k);
					}
				}
			}
		}
		console.log('DSAKDJK');	
var string = 'euhgewuyfherfhreihfrihhijavarefihreifhohjavahojrofeorjavaojosjoajavaiufheorhjavdmkdkk';
				
								var str =0;
								var j =0;
									
								for(i =0; i<string.length; i++ ){									
									if(string[i] == 'j' && string.charAt(i) == 'j' && string.charAt(i+1) == 'a' && string.charAt(i+2) == 'v' && string.charAt(i+3) == 'a'){
										j++;
										
									}									
								}
								console.log(j);	
									
		/*
	console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++')
		
	var res = String.fromCharCode(65);
	console.log(res);
	
	var charCode = "97".charCodeAt();
			console.log(charCode);
			
	var hello = 'Hello';
			for(i =0; i< hello.length; i++){
			console.log(hello.charCodeAt(i));
			}
			
	var integer  = 6;
	for(i=0; i<3;i++){
		for(j=0; j<=i; j++){
			console.log(integer);
		}
	}

	*/
	
	var python = "python 2.0";
	
	var tutorial = 'tutorial'
	var arr = python.split(' ');
	
	console.log(arr);
	
	
		
	for(i =0; i<arr.length; i++){	
			if(i==1){
					var temp = arr[i];
						arr[i] = tutorial;
						arr[2] = temp;
					
			}
			
	}
	console.log(arr.join(' '));
	
	
	var string = 'ajeio djeo jfojreo fjeroj fof nre bhi';
	string = string.split(' ');
	console.log(string);
		
	for(i=0; i<string.length; i++){
		if(string[i] === "bhi"){
			for(j=0; j<=2; j++){
				console.log(string[i]);
			}
		  }
		}
		
		var python = 'python';
		var pythonl = Math.floor(python.length/2);
		var sum;
		//console.log(pythonl);
			for(i=0; i<pythonl; i++){
				sum += python[i];
			}
			console.log(sum);
			
		
		console.log('++++++++++++++++++++++++++++++++');
		
			var java = 'java';
			var amazon = 'amazon';
					 
			if(java.length>amazon.length){
				return false;
			}
			else {
				console.log(java+ "" +amazon+ "" +java);
			}
			
			
			var cubol = 'cubol';
			var cissp = 'cissp';
			var p1;
			var p2;
			for(i=1; i<=cubol.length; i++){
				p1 += cubol[i];
			}
			console.log(p1);
			
				for(j=1; j<cissp.length; j++){	 
					 p2 += cissp[j];	
			}
			console.log(p2);
			
			
			
			console.log('Array roration +++++++++++++++++++++++++');
			
			
	var ar1 = [1,2,3,4];
	var ar2 = [4,3,2,1];
	for(i= 0; i<ar1.length; i++){
		for(j=i; j<=i; j++){
		console.log(ar1[i] * ar2[j]);
		}
	}
	
			var leap = [2000,2004,2008,2012,2016]
	var year = 2015;
			var month = 2;
				for(i =0; i<leap.length; i++){
					if(year == leap[i]){
						
				for(j=0; j<=12; j++){
					if(j == month){
					console.log("this is a leap year " +leap[i]+ " and the months is " +j);
					}
				}
				
			}
		}
			console.log('++++++++++++++++++++++++++');
			
	var vowel = 'aeiou'
	var consonent  = /bcdfghjklmnpqerstuvqxyz/g;
	var enter  = 'u'
		 var at = vowel.match(enter);
		 console.log(at);
			
			console.log('+++++++++++++++++++++++++++++++++++++++');
			
			var user = 2015;
			
			if(user%4 ==0){
				console.log('Leap');
			}
			else{
				console.log('Not a leap')
			}
			
			
			console.log('Odd natural number and their sum');
			
			var natural = [3,5,7,9,11];
			var sum = 0;
			var average;
			for(i=0; i<natural.length; i++){
				
				 sum += natural[i];
				 average = sum/natural.length;
			}
			console.log(sum+ " : " +average);
			
			
			
			console.log('*************************');
			
			var miniute = 525600;
			var hours  = miniute/60;
			 var days = hours/24;
			 var months = days/30;
			 var years = months/12;
			 console.log(years);
console.log('+++++++++++++++++++++++++++++++++++++++==')			 
			 var p1  =3;
			 var square = 0;
			 for(i=1; i<=3; i++){
				  square += p1;
			 }
			 console.log(square);
			 var cube= 0;
			 for(j=1; j<=9; j++){
				 cube += p1;
			 }
			 console.log(cube);