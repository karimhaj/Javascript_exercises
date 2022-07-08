class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
static calculate(shape){
let area=0;
if (shape == square){
area= shape.side*shape.side;
return area;
}
else if (shape == rectangle){
  area= shape.width*shape.height;
  return area;
}
else if (shape == circle){
  area= ((shape.radius*shape.radius)*3.14);
  return area;
}
else console.log('this is not a valid shape');
}
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);


console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
