// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw circle with radius : " + radius);
        }
    };
}
const circle = createCircle(1);

circle.draw();

// constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw from const func");
    };
}
const c1 = new Circle(3);
c1.draw();

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

// print properties of class 
console.log('------------------ print properties & funcs of class ');
for (let key in circle) {
    console.log(key, circle[key]);

}

// print properties of class 
console.log('------------------ print only properties of class ');
for (let key in circle) {

    if (typeof circle[key] !== 'function') {
        console.log(key, circle[key]);

    }

}

// print properties & funcs of class by object keys
console.log('------------------ print properties & funcs of class by object keys ');
const keys = Object.keys(circle);
console.log(keys);


// print properties only
console.log('------------------ print properties only ');
if ('radius' in circle) {
    console.log('circle has radius ');

}