document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>')
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  clear();
  let h = hour();
  let m = minute();
  let s = second();

//text
      //1am to 2am
      if (h >= 1 && h < 2) {
        fill(11, 47, 109);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
    rect(65, 80, 20, 5);
    rect(95, 80, 20, 5);
        textSize(15);
        fill('black');
        text('you should sleep soon!', 20, 170);
      }
      //2am to 3am
      if (h >= 2 && h < 3) {
   fill(11, 47, 109);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
    rect(65, 80, 20, 5);
    rect(95, 80, 20, 5);
        textSize(15);
        fill('black');
        text('how are you doing?', 30, 170);
      }
      //3am to 4am
      if (h >= 3 && h < 4) {
   fill(11, 47, 109);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
    rect(65, 80, 20, 5);
    rect(95, 80, 20, 5);
        textSize(15);
        fill('black');
        text('*yawn*', 68, 170);
      }
      //4am to 5am
      if (h >= 4 && h < 5) {
        fill(11, 47, 109);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
    rect(65, 80, 20, 5);
    rect(95, 80, 20, 5);
        textSize(15);
        fill('black');
        text('im sleepy', 60, 170);
      }
      //5am to 6am
      if (h >= 5 && h < 6) {
        fill(11, 47, 109);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
    rect(65, 80, 20, 5);
    rect(95, 80, 20, 5);
        textSize(15);
        fill('black');
        text('is the sun rising?', 40, 170);
      }
      //6am to 7am
      if (h >= 6 && h < 7) {
        fill(221, 81, 20);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('its morning!', 55, 170);
      }
      //7am to 8am
      if (h >= 7 && h < 8) {
        fill(221, 81, 20);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('hello!', 75, 170);
      }
      //8am to 9am
      if (h >= 8 && h < 9) {
        fill(221, 81, 20);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('its gonna be a great day!', 20, 170);
      }
      //9am to 10am
      if (h >= 9 && h < 10) {
      fill(251, 174, 22);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('im full of energy!!', 35, 170);
      }
      //10am to 11am
      if (h >= 10 && h < 11) {
      fill(251, 174, 22);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('how are you doing?', 35, 170);
      }
      //11am to 12pm
      if (h >= 11 && h < 12) {
         fill(251, 174, 22);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('lets get that bread', 35, 170);
      }
      //12pm to 1pm
      if (h >= 12 && h < 13) {
        fill(68, 194, 224);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('halfway through the day!', 20, 170);
      }
      //1pm to 2pm
      if (h >= 13 && h < 14) {
       fill(68, 194, 224);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('drink water!', 52, 170);
      }
      //2pm to 3pm
      if (h >= 14 && h < 15) {
      fill(68, 194, 224);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('im hungry', 56, 170);
      }
      //3pm to 4pm
      if (h >= 15 && h < 16) {
       fill(68, 194, 224);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('just vibin', 60, 170);
      }
      //4pm to 5pm
      if (h >= 16 && h < 17) {
       fill(68, 194, 224);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('doing okay?', 50, 170);
      }
      //5pm to 6pm
      if (h >= 17 && h < 18) {
   fill(68, 194, 224);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('take a break!', 50, 170);
      }
      //6pm to 7pm
      if (h >= 18 && h < 19) {
      fill(68, 194, 224);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('dinner time?', 50, 170);
      }
      //7pm to 8pm
      if (h >= 19 && h < 20) {
      fill(68, 194, 224);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('you got this!', 50, 170);
      }
      //8pm to 9pm
      if (h >= 20 && h < 21) {
         fill(26, 76, 183);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('lets watch something?', 20, 170);
      }
      //9pm to 10pm
      if (h >= 21 && h < 22) {
         fill(26, 76, 183);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text(':D', 80, 170);
      }
      //10pm to 11pm
      if (h >= 22 && h < 23) {
        fill(26, 76, 183);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('time for a snack', 40, 170);
      }
      //11pm to 12am
      if (h >= 23 && h < 24) {
       fill(26, 76, 183);
        noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
       circle(75, 80, 8, 8);
    circle(105, 80, 8, 8);
        textSize(15);
        fill('black');
        text('is it time to sleep yet?', 27, 170);
      }
      //12am to 1am
      if (h< 1) {
        fill(11, 47, 109);
    noStroke();
    circle(90, 90, 100, 150);
    fill("black");
    noStroke();
    rect(65, 80, 20, 5);
    rect(95, 80, 20, 5);
        textSize(15);
        fill('black');
        text('its the next day woah', 30, 170);
      }


  console.log("it is " + h + ":" + m + ":" + s + " o'clock");
}