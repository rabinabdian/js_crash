import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>

`;

// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw circle with radius : " + radius);
    }
  };
}
const circle = createCircle(1);

circle.draw();

// constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw from const func");
  };
}
const c1 = new Circle(3);
c1.draw();
