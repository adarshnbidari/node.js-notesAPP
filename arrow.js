var square=x=>x*x;


var user={
	name:'adarsh',
	sayHi:()=>{
		console.log(arguments);
		console.log(`Hi iam ${this.name}`);
	},
	sayHiAlt (){
		console.log(arguments);
		console.log(`Hi iam ${this.name}`);
	}
};


user.sayHi(1,2,4);