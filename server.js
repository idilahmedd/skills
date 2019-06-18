const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);

var contact = {
	name: "Steve Peters",
	email: "steve@steve.com",
	phone: "206-555-1212",
	fax: "Who uses faxes anymore?",
	site: "http://steve.io"
};

var skills = [
	"JavaScript",
	"HTML 5",
	"CSS 3",
	"Node JS",
	"Express JS",
	"Crooning"
];




// app.get("/", function(req, res) {
//     res.send("yeah it works");
//     // res.sendFile(__dirname + "/views/about.html");
//     // res.render('index', {name: "Steve Peters", age: 101});
// });

// app.get("/skills", function(req, res) {
//     res.render('skills', ["JavaScript",
// 	"HTML 5",
// 	"CSS 3",
// 	"Node JS",
// 	"Express JS",
// 	"Crooning"]);
    
    
// });

//sendFile for html, render for ejs

//write get route
app.get("/", function(req, res) {
    // res.sendFile(__dirname + "/views/about.html");
    res.render('index', {name: "Steve Peters", age: 101});
})

//Get /about
// app.get("/contact", function(req, res) {
//     // res.sendFile(__dirname + "/views/about.html");
// 	const contact = {
// 		name: "Steve Peters",
// 		email: "steve@steve.com",
// 		phone: "206-555-1212",
// 		fax: "Who uses faxes anymore?",
// 		site: "http://steve.io"
// 	}
	

		app.get("/contact", function(req, res) {
			// res.sendFile(__dirname + "/views/blog.html");
			var contact = [
				"name: Steve Peters",
				"email: steve@steve.com",
				"phone: 206-555-1212",
				"fax: Who uses faxes anymore?",
				"site: http://steve.io"
			];
			res.render('contact', {contact});
		});
	
	
	
 




//GET / blog
app.get("/skills", function(req, res) {
    // res.sendFile(__dirname + "/views/blog.html");
    const skills = [
		"JavaScript",
		"HTML 5",
		"CSS 3",
		"Node JS",
		"Express JS",
		"Crooning"
	]
    res.render('Skills', {skills});
});





app.listen(3000, function() {
    console.log("port 3000");
});
