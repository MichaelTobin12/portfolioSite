angular.module('portfolio.services', [])

.service('Projects', function() {
	var checkoutArray = [];

	var items = [{
		"id" : "0",
    "project" : "Course Caddy",
    "tech" : ["Ionic" ,"Angular", ],
		"hosted_site" : "https://coursecaddy-5ade6.firebaseapp.com",
		"github" : "https://github.com/MichaelTobin18/CourseCaddy",
		"img_refs_pics" : ["../images/courseCad/1.png","../images/courseCad/2.png","../images/courseCad/3.png","../images/courseCad/4.png","../images/courseCad/5.png" ],
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
		"img_refs_pics" : ['../images/snippetto/1.png', '../images/snippetto/2.png','../images/snippetto/3.png','../images/snippetto/4.png','../images/snippetto/5.png','../images/snippetto/6.png','../images/snippetto/7.png','../images/snippetto/8.png','../images/snippetto/9.png','../images/snippetto/10.png','../images/snippetto/11.png'],
		"img_refs_techs" : ["../images/technologies/angular_logo.png", "../images/technologies/knex_logo.png", "../images/technologies/postgreSQL.png","../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png", "../images/technologies/css_logo.png"],
		"about" : "Snippetto is an app for the information seeker. It provides information to start your day with and was desgined to be the go-to app for the morning. Snippetto provides news from various sources, weather for the day, to-do functionality, traffic information/ commute time to a location you provide, a fun page calling various entertaining API's and a youtube page akeen to your likes. Snippetto is a mobile inspirted application, built on the web. The app uses Google OAuth, 15 different API calls (not including our own API's serving information), is a decoupled app, uses angularJS and postgreSQL.",
		"challenges": "Snippetto brought on a lot of challenges. This was the first group project we did at Galvanize and it didn't come without challenges. The primary issue we had, was managing merge conflicts. Sometimes we would have new code that broke everything else and it would take hours to solve. Eventually it got easier and the conflicts became fewer and fewer. Another challenge with Snippetto, was making our own API in a decoupled application. We created a postgreSQL DB, hosted on Heroku and had our Firebase application making Ajax calls to it.",
		"future":"Snippetto was initially intended to be a mobile application, so I had future plans to make it so. Unfortunately, I have recently downloaded IOS 10 and realized that the new side menu is pretty much the exact same thing. Apple uses widgets instead of an actual application and I commend them for it, because it is a great idea and very useful."
    },{
    "project" : "Clique",
    "id" : "2",
    "tech" : ["Ionic"],
		"hosted_site" : "https://clique-82cee.firebaseapp.com/#/login",
		"github" : "",
		"img_refs_pics" : ["../images/clique/1.png", "../images/clique/2.png", "../images/clique/3.png", "../images/clique/4.png", "../images/clique/5.png", "../images/clique/6.png","../images/clique/7.png"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png", "../images/technologies/firebase_logo.png", "../images/technologies/ionic-logo.png", "../images/technologies/nodejs.png", "../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"],
		"about" : "I love the idea behind the Clique app. It is an issue I have run into for the past 5 years or so. That issue being, when group texts attack. I am talking about when in the course of an hour, the group has sent 60+ messages and your phone is blowing up. The worst part about that, is when it is just two people talking in a group of 4+. Clique allows for you to see who spoke during different timed intervals, a summary of what was said and key words throughout the conversation. This project uses Firebase, Ionic, AngularJS, HTML5 and CSS.",
		"challenges": "One of the biggest challenges here was figuring out what technologies to use for this project. We knew we had to have some sort of web sockets implemented to be able to keep real time messages coming to and from out app. We had to have a mobile technology. So we initially started out using Meteor with react-native. That was proving to be troublesome, since we didn't really know what Meteor was doing in the background. We had a week to complete this project and on day three we were still trying to figure out the basics of Meteor and React-Native. Ontop of that, we didn't have that much ES6 experience at the time. Essentially, working with an entire new stack. I did some research and found Firebase and all of our problems were solved. After a failed attempt at migrating React-Native Firebase2 to Firebase3, I scrapped React-Native and made a mockup in Ionic. It was smooth sailing from there and we made an impressive product for a weeks work.",
		"future": "I have a ton of plans for this project in the future. We didn't get most of the functionality that makes the app appealing. So I plan to add the summary functionality and the interval view. I really want to make this app useful and something people would use."
	},{
		 "id" : "3",
		 "project" : "clustR",
		 "tech" : ["Ionic"],
		 "hosted_site" : "",
		 "github" : "",
		 "img_refs_pics" : ["../images/clustR/1.png","../images/clustR/2.png"],
		 "img_refs_techs" : ["../images/technologies/react_logo.svg", "../images/technologies/firebase_logo.png", "../images/technologies/nodejs.png"],
		 "about" : "clustR was my last project at Galvanize. This was done for my capstone and solves a problem that I have run into many times before. Before clustR, a user would have to spend 50+ presses of their finger to send a text message to the people they want to share content with. So, if I wanted to share a great soccer goal or funny picture, I would have to individually text each of those people I want to send it to. clustR allows you to send an individual text message to all the recipients with no more than 5 presses of your finger. Essentially saving you a whole minute, which in this fast paced world, is invaluable.",
		 "challenges": "There were many challenges with making clustR. The biggest problem, was choosing the correct technologies to use. Initially I set out wanting to make a swift IOS application, with a node.js and postgreSQL backend. I thought the new iMessage SDK allowed for complete access to the SMS features. That is not the case, so I decided to pivot to a different technology, being React Native, Firebase, and node.js/express. The app is also decoupled with calls being made to a backend heroku app. I am very pleased with what I was a able to accomplish in such a short time and am very excited to use React on future projects.",
		 "future":"Version 1 of clustR has no future. I had a great time making this project and it does serve a very useful purpose, but there are many problems it causes at it's current state. Having just learned React Native, the app is hacked together and needs a rework. The great thing about React, is that I can re use almost all the components I made, so it is more of a re structuring to come. I want to make clustR handle the messaging inapp and not over the Twilio API, as it is not free either. "
	},{
		"id" : "4",
    "project" : "Pokemon Node Battles",
		"tech" : ["Ionic"],
		"hosted_site" : "https://arcane-caverns-89238.herokuapp.com/pokemon",
		"github" : "",
		"img_refs_pics" : ["../images/pokeNode/1.png","../images/pokeNode/2.png","../images/pokeNode/3.png","../images/pokeNode/4.png","../images/pokeNode/5.png","../images/pokeNode/6.png",],
		"img_refs_techs" : ["../images/technologies/knex_logo.png", "../images/technologies/postgreSQL.png",  "../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"],
		"about" : "This project was an assignment that had to be completed within two days. It's primarly use was to drill technologies like knex, postgreSQL and node.js into our brains, while at the same time learning the order of operations to make it succesful. I had a blast with this project and it was really a integral part or learning database calls, with RESTful practices.",
		"challenges": "Pokemon Node Battles presented a fair amount of challenges. The biggest one, was figuring out how to display the DB data, given different conditions. Along with that, was figuring out how to make calls to localstorage and the DB, and displaying the information properly. So, if the user has one pokemon seleceted, display this, if the user has two selected, display that.",
		"future":"I am going to let this project rest as is. There is no real future for this, except maybe helping a friend who wants to learn programming."
	 },{
		"id" : "5",
    "project" : "Order Up!",
    "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs_pics" : ["../images/galEats/1.png", "../images/galEats/2.png", "../images/galEats/3.png"],
		"img_refs_techs" : ["../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"],
		"about" : "Order Up was the first project given to us, during my stay at Galvanize. This project was a pivital stepping stone into my confidence as a programmer and was a great way to gauge my ability moving forward. I mean, before this project and Galvanize as a whole, I had not really made something from scratch. I had followed tutorials online and what have you, but those don't give you the same satsifaction as having actually made it yourself. We were given about 12 hours to finish this project and I completed it in 6. That was a huge confidence booster moving forward.",
		//TODO: ADD manifest hyperlink and an ng-if statment on the frontend
		"challenges": "There were many challenges, most of which rested in the CSS3 realm. As I mentioned above, I had never done much CSS3 before coming to Galvanize. It's easy to copy someone elses work, but having to figure it all out on your own was challenging. Position relative and absolute saved me on this project (wish I knew flexbox was a thing, at the time). The project itself was really just a counter, for a checkout, so the positioning and layout was the biggest challenge. Ontop of that, we were given an image to copy; or a client request. That was the real challenge. In an actual production enviorment, you must meet the client needs, which I had a little experience with before (See Manifest).",
		"future":"There is no future for this project, other than remanicing of past acomplishments."
	 },{
		"id" : "6",
    "project" : "Get that Tea!",
    "tech" : ["Ionic"],
		"hosted_site" : "https://teabag-545aa.firebaseapp.com/#/main",
		"github" : "",
		"img_refs_pics" : ["../images/teaBag/1.png","../images/teaBag/2.png","../images/teaBag/3.png"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png", "../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"],
		"about" : "Get That Tea (Angular Shopping Cart), was another assingment that we were to complete within 3 days. This was a way to take all the angular 1 conecpts and put them in a project. So using factories, services, filters, ng classes and so on. I had a great time with this assignment, I love angular and think it is very powerful. Really not that much to say about this project, check it out to see for yourself",
		//TODO: add hyperlink to course caddy
		"challenges": "There were quite a few challenges with this project. How to pass information around the $scope properly was numero uno. I had done some of this with Course Caddy, but I was also using rootScope in that project, which is a no no. This project also taught me how to send just one scope object to the view, rather than sending 5+ objects. It keeps things cleaner.",
		"future":"There is no future planned for this project. It was a great way to learn angular and I plan to take those concepts on to angular 2."
	 },{
		"id" : "7",
    "project" : "Angular Movie DB",
    "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs_pics" : ["../images/angularMovie/1.png","../images/angularMovie/2.png","../images/angularMovie/3.png","../images/angularMovie/4.png"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png", "../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"],
		"about" : "This project was another way to learn angular 1 and http calls. This was the intro into angular project and is pretty basic. Make an ajax call, display movies, filter movies. Not much else.",
		"challenges": "To be honest, this project didn't challenge me a whole lot! The biggest take away from this was learning promise calls and displaying the scope object with what you needed from the ajax call.",
		"future":"Outlook is bleak for this project."
	 },{
		"id" : "8",
    "project" : "Reddit 2.0 (Reddit Clone)",
    "tech" : ["Ionic"],
		"hosted_site" : "https://redditclone-7eb21.firebaseapp.com/#",
		"github" : "",
		"img_refs_pics" : ["../images/redditClone/1.png","../images/redditClone/2.png","../images/redditClone/3.png","../images/redditClone/4.png"],
		"img_refs_techs" : ["../images/technologies/angular_logo.png","../images/technologies/jquery_logo.png",  "../images/technologies/nodejs.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png" ],
		"about": "Reddit Clone was a galvanize project, where we were assigned to make a clone of reddit in a day. This project was done in mostly angular, with HTML5 and CSS3. I also used bootstrap for some of the base css elements and page framework. I had a great time making this project and it is a good representation of some basic angular functionality knowledge.",
		"challenges" : "What was challenging about this project was the fact that I chose to incorporate the Reddit API, instead of the static data that we were given for the assignment. So the real challenge was manipulating the data object and adding data to it. For instance, I had to use a filter for the dates and have it work dynamically for any date given. Another challenge was incorporating angular authentication for submitting a new post.",
		"future": "I want to incorporate reddit OAuth with this project and give the user an actual opportunity to post, comment, save and participate in reddit from my site. I also want to incorporate a DB to this project and give the user a way to display their up-voted posts in an organized manor. So all technology up-votes in one spot, etc."
	 },{
		"id" : "9",
  	"project" : "Ralphs Revenge / Matriarch TD",
    "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs_pics" : ["../images/ralphsRev/Ralph_Menu.png","../images/ralphsRev/Ralph_Level.png","../images/ralphsRev/Ralph_Armory.png","../images/ralphsRev/Ralph_Begin.png","../images/ralphsRev/Ralph_Gameplay.png","../images/ralphsRev/Ralph_Turret.png", "../images/matriarchTD/Mat_Menu.png", "../images/matriarchTD/Mat_instruc.png","../images/matriarchTD/Mat_dayplay.png","../images/matriarchTD/mat.15secs.png", "../images/matriarchTD/Mat_Herddead.png"],
		"img_refs_techs" : ["../images/technologies/unity_logo.png", "../images/technologies/cSharp.png"],
		"about" : "Ralphs Revenge and Matriarch TD were two of the first projects I had ever worked on. At Tribeca Flashpoint College, before Galvanize, I was studying game and interactive media programming. This started out as a school wide competition called Production in Action. PIA was a way to bring all the disiplincs that were taught, together to make a campaign. We were split into teams of about 25 and had individuals from the game, audio, animation and video departments. I was voted to be the lead game engineer for our team. This was less a programming role, as it was a producing role. Within 2 weeks we were to make and present a campaign given to us by a non-profit company. We were to work with hardshell labs to raise awareness for elephant poaching. Matriarch TD was made in Unity3D, using C# and was a Tower Defenese style game. In the end, we won 1st place and $5,000 for our non-profit. Now, for Ralphs Revenge. HardShell labs was so immpressed with the game we made for PIA, that they came back next semester and had us make them another game, that they would eventually take over when we graduated. I was choosen to be the Lead Game Engineer again and we set off making a elephant shooter game. The idea was to have levels assiciated with a story. So Ralphs mother was taken by poachers and you were to hunt them down and get her back. Over the course of 3 months, we had a very reliable alpha build of the game. Ralphs Revenge was made in Unity3D and C#.",
		"challenges": "There were a ton of challenges for both games. The biggest challenge for me, was getting assets from people. I was balancing 4 different diciplinaries and trying to program at the same time, in two weeks. The art guys had a million questions, where the animation guys didn't ask enough. It was challenging learning to balance these groups and come out on top of the competition. With Matriarch TD, the most challenging part, coding wise, was figuring out A* Pathfinding. Now for Ralphs Revenge. The challenges faced with Ralphs Revenge were daunting. It was the first time I had been introduced to an actual production enviorment. Meaning deadlines. Meaning doing someone elses work, beacuse it was school and we couldn't fire them. I talked with HardShell Labs CEO and another boardmember weekly to go over things and review what we had completed. This was a challenge on itself. How to explain something can't be done, code wise, when they really wanted it to happen. Then trying to figure out work arounds, for said features. Here is one example. They (HardShell Labs) wanted images of dead elephants after each level to show the user the true plight of these animals. It seems easy, to explain to them that this was not cool, Apple would never allow it on their app store and our target market was children. Well it wasn't.",
		"future":"There might be future plans for Ralphs Revenge, but that is out of my hands. We handed the project to them once we graduated."
	 },{
		"id" : "10",
    "project" : "Manifest's MERC",
    "tech" : ["Ionic"],
		"hosted_site" : "https://merc.manifest.com/",
		"github" : "",
		"img_refs_pics" : ["../images/merc/1.jpg", "../images/merc/2.jpg", "../images/merc/3.jpg","../images/merc/4.jpg","../images/merc/5.jpg","../images/merc/6.jpg","../images/merc/7.jpg","../images/merc/8.jpg", "../images/merc/9.jpg"],
		"img_refs_techs" : ["../images/technologies/WordPress_blue_logo.svg.png","../images/technologies/php_logo.png","../images/technologies/okta_logo.png","../images/technologies/HTML5_Logo.png","../images/technologies/css_logo.png"],
		"about": "My first big boy tech job, out of school, was working for a company called Manifest based in Chicago. I was hired on to build, from the ground up, their employee intranet. I got to work with everyone from the dev team to the CEO, but primarily worked with the HR team, since the application was for them to use. I got to choose everything from the content manager system (WordPress), to the front end design decisions and the backend login functionality. This was a great project to get my feet wet with development and really sunk home how much I didn't know about web development.",
		"challenges" : "There were many challenges with this project. One of the biggest challenges was getting content from the HR team in a timely manor. There were some weeks that they didn't give me anything new to add, so during that time I would debug and mock up various designs for them to review. The biggest challenge was learning PHP and the WordPress environment as a whole. Coming from a C# background, I had no clue what I was looking at and debugging PHP was a nightmare for me. With little help from the dev team, I had to figure out how to edit the base files that WordPress used to display the view. During the ending of my contract and the project, I had to implement a login feature using SAML authentication to an Okta backend. This was no easy task and if you go to the live site now, it appears the scrapped the login-in entirely.",
		"future": "I do not own this project, so there will be no future plans for it. I will say though, that knowing what I know now, I could complete this project in no more than 3 weeks. It really gives me perspective on how slow a large company can move sometimes and gives me a good barometer of my own ability; in regard to time spent. Also, I never want to work in WordPress again."
	 },{
		"id" : "11",
    "project" : "Avarice",
    "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "",
		"img_refs_pics" : ["../images/avarice/AvariceTITLE.jpg","../images/avarice/AvariceVALCANO.jpg", "../images/avarice/AvariceWALL.jpg", "../images/avarice/AvariceCOREAngled.jpg", "../images/avarice/AvariceVEGAS.jpg", "../images/avarice/AvariceVegasVIEW.jpg","../images/avarice/AvariceFORREST.jpg", "../images/avarice/AvariceFactory.jpg"],
		"img_refs_techs" : ["../images/technologies/cSharp.png"],
		"about" : "Avarice is a game that my previous programming instructor created on his free time. The game has the Steam Greenlight and is a ton of fun. It may look like minecraft, but trust me the box like display was created well before minecraft was a thing. For this project, I was the Design Lead and as so, was trusted with helping my classmates with how their levels were to look and feel. Over the course of the semester we were tasked with making a campaign that would eventually make it into the actual game. We were very successful with the levels we created and I am happy with how the campaign turned out.",
		"challenges": "There were many challenges within the management realm for this project. This was my first experience with managing a team in a real world production setting. So, given that this was school, the biggest challenge was to motivate the team members to get their levels done and update what changes we decided on. I ended up doing a lot of the work, but am happy how the levels turned out because of it. A big challenge here was realizing how small a change can effect the big picture though. It was like working with pixels to create a big picture, every little change to the blocks would make the overall picture change.",
		"future":"There is no future for Avarice and myself."
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
