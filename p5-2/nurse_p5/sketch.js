var ellipseX = 100;
var ellipseY = 100;
var ellipseSpeedX = 15;
var ellipseSpeedY = 15;
var ellipseDiam = 25;

//function strict()

function setup() {
  createCanvas(1100,1100);
}

function draw() {
    background(0,0,255);
//translate(240,0,0);
    textSize(20);
    textFont("georgia");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("move the arrow keys to move the ball!",200,50);
    
    
    
    
    
    
 ellipse(ellipseX, ellipseY, ellipseDiam * 2, ellipseDiam * 2);
 ellipseX += ellipseSpeedX;
 ellipseY += ellipseSpeedY;
if(ellipseX > width - ellipseDiam || ellipseX < ellipseDiam) {
     ellipseSpeedX = -ellipseSpeedX;
   }
   if(ellipseY > height - ellipseDiam || ellipseY < ellipseDiam) {
       ellipseSpeedY = -ellipseSpeedY;
    }

    
    if (keyCode == RIGHT_ARROW) {
        ellipseX += 10;
        
    } else if (keyCode == LEFT_ARROW) {
        ellipseX -= 10;
        
    } else if (keyCode == DOWN_ARROW) {
        ellipseY += 10;
        
    } else if(keyCode == UP_ARROW){
        ellipseY -= 10;
    }

    if(ellipseX > width/2) {
        fill('yellow')
        
    } else if (ellipseX < width/2) {
        fill('lightgreen');   
        
    } else if (ellipseY > height/4) {
        fill('green')
        
    } else if (ellipseY < height/4) {
        fill('blue')
    }
    
    
    
    
    
}