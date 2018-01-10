(function() {
	"use strict";
	console.log("SEAF Fired");

//CAST SCROLL TO 
	var nav = document.querySelector(".scrollNav, .scrollNav2, .scrollNav3");
	var links = nav.querySelectorAll("a");
	
	function scrolling(evt){
		//console.log(evt.target.id);
		var idNum = evt.target.id;
		console.log("section"+idNum);
		TweenLite.to(window, 1, {scrollTo:{y:"#section"+idNum, offsetY:20}});
	}
	
	for(var i=0; i<links.length; i++){
		links[i].addEventListener("click", scrolling, false);
	}
	
})();