angular.module('portfolio.services', [])

.service('Projects', function() {
	var checkoutArray = [];

	var items = [{
		"id" : "0",
        "project" : "Course Caddy",
        "tech" : ["Ionic" ,"Angular", ],
		"hosted_site" : "https://coursecaddy-5ade6.firebaseapp.com",
		"github" : "https://github.com/MichaelTobin18/CourseCaddy",
		"img_refs_pics" : ["../images/"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png", "../images/technologies/ionic-logo.png","../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png", "../images/technologies/css_logo.png"],
		"about" : "Course Caddy is a golfing app for the avid golfer. I kept running into the problem of yardage markers giving a vague distance, or being too far away from where I was hitting from. No longer is that a problem with Course Caddy. This app will give you the exact distance to the pin from whereever you are on the course. This app was made using the Ionic framework, angularJS, HTML5 and CSS3.",
		"challenges": "There were so many challenges I faced with this project, it is difficult to choose which to start with. The first challenge was figuring out what was going on with angularJS. Having never used it before, it was a process figuring out the MVC structure. The next challenge was figuring out how the cordova library worked and how to access native features. This app heavily uses Google Maps API's, so that was a challenge in itself. I'll save you from the rest, email me if your curious about how much else is going on in the background.",
		"future":"I will absolutly be working on this project and plan to release it targeting Colorado golf courses. Right now, the pin positions are hard coded to the center of the green. I would like to work with the local courses I play and get some up to date pin locations periodically. I would also like to incorperate DB functionality so the app will start saving what distances you are hitting with any given club. Right now, the recommened club section is using average distances for males and females. So a persionalized reccommend club."
	},{
        "id" : "1",
        "project" : "Snippetto",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "https://github.com/MichaelTobin18/snippetto",
		"img_refs_pics" : ["../images/"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png", "../images/technologies/knex_logo.png", "../images/technologies/postgreSQL.png","../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png", "../images/technologies/css_logo.png"],
		"about" : "Snippetto is an app for the information seeker. It provides information to start your day with and was desgined to be the go-to app for the morning. Snippetto provides news from various sources, weather for the day, to-do functionality, traffic information/ commute time to a location you provide, a fun page calling various entertaining API's and a youtube page akeen to your likes. Snippetto is a mobile inspirted application, built on the web. The app uses Google OAuth, 15 different API calls (not including our own API's serving information), is a decoupled app, uses angularJS and postgreSQL." 
    },{
        "project" : "Clique",
        "id" : "2",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs_pics" : ["../images/"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png", "../images/technologies/firebase_logo.png", "../images/technologies/ionic-logo.png", "../images/technologies/nodejs.png", "../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"]
	 },{
		"id" : "3",
        "project" : "PokemonNode",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs_pics" : ["../images/"],
		"img_refs_techs" : ["../images/technologies/knex_logo.png", "../images/technologies/postgreSQL.png",  "../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"]
	 },{
		"id" : "4",
        "project" : "Galvanize Eats",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs_pics" : ["../images/"],
		"img_refs_techs" : ["../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"]
	 },{
		"id" : "5",
        "project" : "Angular Shopping Cart",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs_pics" : ["../images/"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png", "../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"]
	 },{
		"id" : "6",
        "project" : "Angular Movie DB",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs_pics" : ["../images/"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png","../images/technologies/postgreSQL.png", "../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"]
	 },{
		"id" : "7",
        "project" : "Reddit 2.0 (Reddit Clone)",
        "tech" : ["Ionic"],
		"hosted_site" : "https://redditclone-7eb21.firebaseapp.com/#",
		"github" : "",
		"img_refs_pics" : ["../images/"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png","../images/technologies/jquery_logo.png",  "../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png" ],
		"about": "Reddit Clone was a galvanize project, where we were assigned to make a clone of reddit in a day. This project was done in mostly angular, with HTML5 and CSS3. I also used bootstrap for some of the base css elements and page framework. I had a great time making this project and it is a good representation of some basic angular functionality knowledge.",
		"challenges" : "What was challenging about this project was the fact that I chose to incorporate the Reddit API, instead of the static data that we were given for the assignment. So the real challenge was manipulating the data object and adding data to it. For instance, I had to use a filter for the dates and have it work dynamically for any date given. Another challenge was incorporating angular authentication for submitting a new post.",
		"future": "I want to incorporate reddit OAuth with this project and give the user an actual opportunity to post, comment, save and participate in reddit from my site. I also want to incorporate a DB to this project and give the user a way to display their up-voted posts in an organized manor. So all technology up-votes in one spot, etc."

		// 
	 },{
		"id" : "8",
        "project" : "Music Playlist",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs" : ""
	 },{
		"id" : "9",
        "project" : "Ralphs Revenge / Matriarch TD",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs" : "" 
	 },{
		"id" : "10",
        "project" : "Manifest's MERC",
        "tech" : ["Ionic"],
		"hosted_site" : "https://merc.manifest.com/",
		"github" : "",
		"img_refs" : "" 
	 },{
		"id" : "11",
        "project" : "Avarice",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs" : "" 
	 }]
	return {
		all: function() {
			return items;
		},
		countOption: function() {
			var objectReturn = {};
			for (var i = 1; i < 11; i++) {
				objectReturn[i] = i
			}
			return objectReturn;
		},
		createSubtotal: function(arrayOfObjects){
			var subtotal = 0;
			arrayOfObjects.forEach(function(ele){
				subtotal += ((ele.price)*(ele.quantity))
			})
			return subtotal;
		},
		createCheckoutObject: function(tea) {
			if(tea == undefined){
				return checkoutArray;
			}
			if(checkoutArray.indexOf(tea) > -1){
			}else{
				checkoutArray.push(tea);
			}
			return checkoutArray;
		},
		removeItemFromCheckout: function(item) {
			var index = checkoutArray.indexOf(item);
			if (index > -1) {
			    checkoutArray.splice(index, 1);
			}
			return checkoutArray;
		},
		// updateCheckoutArray: function()
		get: function(itemId) {
			for (var i = 0; i < items.length; i++) {
				if (items[i].id === itemId) {
					return items[i];
				}
			}
			return null;
		},
		getCategories: function() { //TODO: Use object keys. cant have dups.
			var categoryArray = [];
			for (var i = 0; i < items.length; i++) {
				for (var item in items[i].categories) {
					if (categoryArray.indexOf(items[i].categories[item]) > -1) {
						continue;
					} else {
						categoryArray.push(items[i].categories[item]);
					}
				}
			}
			return categoryArray;
		}
	}
})
