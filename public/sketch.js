let ballLocation;  // Location of ball
let velocity;      // Velocity of ball
let gravity;       // Gravity acts at the ball's acceleration
let ballLocation1; // Location of ball
let velocity1;     // Velocity of ball
let gravity1;      // Gravity acts at the ball's acceleration

function setup() {
  createCanvas(640, 360);
  ballLocation = createVector(100, 100);
  velocity = createVector(1.5, 2.1);
  gravity = createVector(0, 0.2);
  
  ballLocation1 = createVector(300, 300);
  velocity1 = createVector(3, 4.2);
  gravity1 = createVector(0, 0.5);
}

function draw() {
  background(0);
  
  // Add velocity to the ballLocation.
  ballLocation.add(velocity);
  // Add gravity to velocity
  velocity.add(gravity);
  
  // Add velocity to the ballLocation.
  ballLocation1.add(velocity1);
  // Add gravity to velocity
  velocity1.add(gravity1);
  
  // Bounce off edges
  if ((ballLocation.x > width) || (ballLocation.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  
  if (ballLocation.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity.y = velocity.y * -0.95; 
    ballLocation.y = height;
  }

  if ((ballLocation1.x > width) || (ballLocation1.x < 0)) {
    velocity1.x = velocity1.x * -1;
  }
  
  if (ballLocation1.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity1.y = velocity1.y * -0.95; 
    ballLocation1.y = height;
  }
  
  // Display circle at ballLocation vector
  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(ballLocation.x, ballLocation.y, 48, 48);
  
  stroke(242, 229, 203);
  strokeWeight(5);
  fill(175, 76, 101);
  ellipse(ballLocation1.x, ballLocation1.y, 30, 30);
}
