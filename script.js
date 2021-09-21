var f = 130
var h = 40
var O = 120;
var slider;
function setup() {
  createCanvas(1000, 400);
  angleMode(DEGREES);
  slider = createSlider(0, 500, O);
  slider.style('width', '500px');
}
$('#focal').on('input',(e)=>{
  if(e.target.value < 20){
    text("focal length must be more than 5", width/2,80)
  }else{
  f = parseInt(e.target.value);
  }
})
$('#object').on('input',(e)=>{

  O = parseInt(e.target.value);
  slider.value(O)
})

function draw() {
  O = parseInt(slider.value());
  $('#object').val(O)
  background(0);
  fill('red')
  text("CREATER: Rabin Lamichhane", width/2,40)
  text("For light experiment on convex lens", width/2,60)
  text(`Focal length:${f}\n Height of image:${h} \n Object: ${O}`,10,20)
  strokeWeight(1)
  noFill()
  var t = 15
  var ht = ((3)**(0.5))*(f/2)
  push()
  stroke(255)
  dashedLine(width/2,height/2-ht/2,width/2,(height/2)+ht/2,7, 10)
  arc(width/2+(f/4),height/2,f,f,135-t,225+t)
  arc(width/2-(f/4),height/2,f,f,-45-t,45+t)
  line(0, height / 2, width, height / 2)
  fill('black')
  if(O > 15){
  object(O)
  
  }else{
  push()
  noStroke()
  fill(255)
  text("object length must be more than 15",width/2+100,height-100)
  pop()
  }
  pop()
  strokeWeight(5);
  push()
  //O
  stroke(255)
  fill(255)
  point(width / 2, height / 2);
  //F
  point(width / 2 - f, height / 2);
  noStroke()
  text('F', width / 2 - f - 3, height / 2 + 16)
  //2F
  stroke(255)
  point(width / 2 - 2 * f, height / 2);
  noStroke()
  text('2F', width / 2 - 2 * f - 7, height / 2 + 16)

    //-F
    stroke(255)
  point(width / 2 + f, height / 2);
  noStroke()
  text("F'", width / 2 + f - 3, height / 2 + 16)
  //-2F
  stroke(255)
  point(width / 2 + 2 * f, height / 2);
    noStroke()
  text("2F'", width / 2 + 2 * f-7, height / 2 + 16)
  pop()

}

function object(u) {
  img = (f*u)/(u-f)
  mg = img/u
    //image
    //to F
    l1(width / 2, height / 2 - h,width / 2 + f, height / 2,500)
    //intersect
    l1(width / 2 - u, height / 2 - h, width / 2, height / 2,500)
    //height of image
    push()
    strokeWeight(2)
    stroke(255,0,0)
    line(width / 2 + img, height / 2, width / 2 +img, height / 2 + h*mg)
    pop()
  if(u < f){
    //height
    line(width / 2 + img, height / 2, width / 2 +img, height / 2 + h*mg)
    dashedLine(width / 2 - u, height / 2 - h,width / 2 +img, height / 2 + h*mg,10,10)
    dashedLine(width / 2, height / 2 - h,width / 2 +img, height / 2 + h*mg,10,10)
  }
  //height
  push()
  strokeWeight(2)
  stroke(0,0,255)
  line(width / 2 - u, height / 2, width / 2 - u, height / 2 - h)
  pop()
  //parallel
  line(width / 2 - u, height / 2 - h, width / 2, height / 2 - h)
  
}
function l1(x1,y1,x2,y2,d){
  let m = (((x2-x1)**2)+((y2-y1)**2))**(0.5) + d
  let n = d
  let x = (m * x2 - n * x1)/(m-n) 
  let y = (m * y2 - n * y1)/(m-n) 
  line(x1,y1,x,y)
}
function dashedLine(x1, y1, x2, y2, l, g) {
  var pc = dist(x1, y1, x2, y2) / 100;
  var pcCount = 1;
  var lPercent = gPercent = 0;
  var currentPos = 0;
  var xx1 = yy1 = xx2 = yy2 = 0;

  while (int(pcCount * pc) < l) {
    pcCount++
  }
  lPercent = pcCount;
  pcCount = 1;
  while (int(pcCount * pc) < g) {
    pcCount++
  }
  gPercent = pcCount;

  lPercent = lPercent / 100;
  gPercent = gPercent / 100;
  while (currentPos < 1) {
    xx1 = lerp(x1, x2, currentPos);
    yy1 = lerp(y1, y2, currentPos);
    xx2 = lerp(x1, x2, currentPos + lPercent);
    yy2 = lerp(y1, y2, currentPos + lPercent);
    if (x1 > x2) {
      if (xx2 < x2) {
        xx2 = x2;
      }
    }
    if (x1 < x2) {
      if (xx2 > x2) {
        xx2 = x2;
      }
    }
    if (y1 > y2) {
      if (yy2 < y2) {
        yy2 = y2;
      }
    }
    if (y1 < y2) {
      if (yy2 > y2) {
        yy2 = y2;
      }
    }

    line(xx1, yy1, xx2, yy2);
    currentPos = currentPos + lPercent + gPercent;
  }
}