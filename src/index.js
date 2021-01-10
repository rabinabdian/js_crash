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
