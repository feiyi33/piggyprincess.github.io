//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
        
        if(compassHeading >315 || compassHeading < 45){
            text_area.textContent = "North, a pink piggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
            var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            ctx.fillStyle="#FF0000";
            ctx.fillRect(0,0,150,75);
        }
        if(compassHeading >45 && compassHeading < 135){
            text_area.textContent = "East, a yellow pig";
        }
        if(compassHeading >135 && compassHeading < 225){
            text_area.textContent = "South, a blue pig";
        }
        if(compassHeading >225 && compassHeading < 315){
            text_area.textContent = "West, a red pig";
        }
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


