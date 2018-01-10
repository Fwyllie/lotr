(function() {
	"use strict";

//GALLERY
	
var galSmall = ["GalleryS-1", "GalleryS-2", "GalleryS-3", "GalleryS-4", "GalleryS-5", "GalleryS-6", "GalleryS-7", "GalleryS-8", "GalleryS-9", "GalleryS-10", "GalleryS-11", "GalleryS-12"];

var galLarge = ["GalleryL-1", "GalleryL-2", "GalleryL-3", "GalleryL-4", "GalleryL-5", "GalleryL-6", "GalleryL-7", "GalleryL-8", "GalleryL-9", "GalleryL-10", "GalleryL-11", "GalleryL-12"];

var mainImg = document.querySelector("#mainImg");
var thumbnails = document.querySelector("#thumbnails");
var anchors = thumbnails.querySelectorAll("img");


function showImg(e){
	if(Foundation.MediaQuery.atLeast('medium')){
		mainImg.src="images/"+galLarge[e.target.id]+".jpg";
		console.log("images/"+galLarge[e.target.id]+".jpg");
	}
	else{
	mainImg.src="images/"+galSmall[e.target.id]+".jpg";
	console.log("images/"+galSmall[e.target.id]+".jpg");
	}
	

}

for (var i=0;i<anchors.length; i++){
		anchors[i].addEventListener("click", showImg, false);
	}
	
})();