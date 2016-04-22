var z = o;
var sum = 0;
var x = 1;
var y = 1;

while (z<= 4000000) {
  z=x+y;
  x=y;
  y=z;
  if(z%2=0) {
    sum +=z;
  };
};

console.log(sum);
