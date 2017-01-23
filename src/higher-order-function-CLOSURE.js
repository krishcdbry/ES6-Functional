
/*

Closure is simply called “THE FUNCTION WITH PRESERVED DATA” - Where we can find the concept of abstraction.
- An inner function which can access the outer variables even though it was returned.
- State of variables are preserved
- It can access three kind of variales :
1. Global scope
2. Variable in it’s enclosing function scope
3. In it Own scope

*/



let add = (x) => {
  // Level 1
  let add2 = (y) => {
    // Level 2
    let add3 = (z) => {
      // Level 3
      return x+y+z;
    }
    return add3;
  }
  return add2;
}

console.log(add(3)(5)(7))


/*

As you have observed in the above closure even though the add3 is returned it is accessing the X value. Where user can only access add function but not the inside functions
Closure actually is the environment where the properties gets saved with the default function


In the above example : add(5)   =>  Returns the function with 5 preserved inside it.
So now we can use in future add(5) by saving it into any variable. so that later we can access it

*/


// And also we can do method chaining

let operations = (init) => {

  let final = (init) ? init : 1;  // Private property

  let add = (num) => {
      final = final + num; // Private property (Adding num)
      return opt;
  }

  let multiply = (num) => {
    final = final * num;  // Private property (Multiplying to num)
    return opt;
  }

  let substract = (num) => {
    final = final - num; // Private property (Substract num)
    return opt;
  }

  let print = () => {
    console.log(final) // Private property (Printint the value)
  }

  let opt =  {
    add : add
    , mul: multiply
    , sub: substract
    , print: print
  }

  return opt;
}

let newOperation = operations(50);

newOperation.mul(15).add(10).print();  // Here we are acheveing method chaining

/*
By this approach we can do the method changing because the inner functions were not accessed from the outside. But we can get
the whole process done.
Because the |   newOperation.add(5) - > Returns the object this | Here we are getting the function abstraction no one from outside can access the private methods
*/
