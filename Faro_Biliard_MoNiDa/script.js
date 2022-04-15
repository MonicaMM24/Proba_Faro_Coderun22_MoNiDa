var x=[];
var dx;
var vx=[];
var fx;
var y=[];
var dy;
var vy=[];
var fy;
var m=[];
var dt; 
var I;
var r;
var D;
var color=[] 
var shoot;
var dead=[];

function setup() {  
  createCanvas(700, 700);
  I=2;
  dt = 0.01;
  D=0.005;
  shoot=0;
  for (var i=0;i<I; i++){
  dead[i]=1;
  x[i] = random(1,200);
  dx = 0;
  fx=0;
  vx[i] = 0;
  y[i] = random(1,200);
  dy = 0;
  fy=0;
  vy[i] = 0;
  m[i] = random(20,20);
  r=0;
  color[i]=i;
  }

}

function draw() {
  
background(0,100,0,255);
ellipse(0,0,70);
ellipse(700,0,70);
ellipse(0,700,70);
ellipse(700,700,70);
ellipse(0,350,70);
ellipse(700,350,70);

fill(255,0,0,255);

if (shoot==2){ 
stroke(255,50,0,255);
strokeWeight(4);
line(x[1],y[1],mouseX,mouseY);
}
if (shoot===1){
  vx[1]=(x[1]-x[0])*5;
  vy[1]=(y[1]-y[0])*5;
  shoot=0;
}
for (var i=1; i<I; i++) {
 if (dead[i]==1){
 fx=0;
 fy=0;
for (var j=1; j<I; j++) {
 if (dead[j]==1){
  dx = x[i]-x[j];
  dy = y[i]-y[j];
  r = pow(dx,2)+pow(dy,2);
  r =sqrt(r);
  if (2*r<m[i]+m[j]){
  fx = fx + 100000*dx/pow((r+2),1);
  fy = fy + 100000*dy/pow((r+2),1);
}
}
}
vx[i]=(1-D)*vx[i]+fx*dt/m[i];
vy[i]=(1-D)*vy[i]+fy*dt/m[i];  
if(x[i] <= 10 || x[i] >= 690)
	vx[i] = -vx[i];
if(y[i] <= 10 || y[i] >= 690)
	vy[i] = -vy[i];
x[i]=x[i]+vx[i]*dt;
y[i]=y[i]+vy[i]*dt;
}

}
for (i=2;i<9;i++){

noStroke();

fill(0);
if (dead[i]==1)  
text(i-1,x[i]-5,y[i]+3);
if (dead[i+7]==1)
text(i+7,x[i+7]-5,y[i+7]+3);
}
if (dead[1]==1){
fill(255,255,255,255);
ellipse(x[1],y[1],m[1]);
}
fill(0);
if (dead[11]==1)
text(10,x[11]-5,y[11]+3);
}

function mousePressed(){
  x[1]=mouseX;
  y[1]=mouseY;
  shoot=2;
  
}
function mouseReleased(){
  t=0;
  x[0]=mouseX;
  y[0]=mouseY;
  shoot=1;
}
