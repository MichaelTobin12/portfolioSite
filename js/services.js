angular.module('portfolio.services', [])

.service('Projects', function() {
	var checkoutArray = [];

	var items = [{
		"id" : "0",
        "project" : "Course Caddy",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "https://github.com/MichaelTobin18/CourseCaddy",
		"img_refs" : "",
	},{
        "id" : "1",
        "project" : "Snippetto",
        "tech" : ["Ionic"],
		"hosted_site" : "",
		"github" : "https://github.com/MichaelTobin18/snippetto",
		"img_refs" : ""
    },{
        "id" : "2",
        "project" : "Clique",
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
