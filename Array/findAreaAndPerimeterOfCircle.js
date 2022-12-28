const PI = Math.PI;
const radius = 2.6;
function circle(radius,PI){
  this.PI = PI;
  this.radius = radius;
  this.area = function(){
    return PI * radius * radius
  }
}
const output = new circle(radius,PI);
console.log(output.area())
