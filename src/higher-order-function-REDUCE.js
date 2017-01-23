

/*
 Reduce is also the Higher order function like map, filter but it doesn't return a array.
 It is a function on the array of objects
 It returns a value. (Summarize properties of a series of objects)
 It also takes call back function but with 2 arguments first and second
*/

// Example

const cartItems = [
  { "name" : "book-1", "price": 250 },
  { "name" : "book-2", "price": 450 },
  { "name" : "book-3", "price": 150 },
  { "name" : "book-4", "price": 750 },
  { "name" : "book-5", "price": 350 },
]

// Traditional way of getting the sum of all items

let total = 0;
for (let item of cartItems) {
  totalSum += item.price;
}

console.log(totalSum);


// Now in Functional programming way

let totalSum = cartItems.reduce((sum, item) => {
  return sum+item.price;
}, 0)

console.log(totalSum);



// Making it nested objects

let output = cartItems.reduce((final, item) => {
  final[item.name] = final[item.name] || [];
  final[item.name].push({
    'price' : item.price
  })
  return final;
}, {})

console.log(JSON.stringify(output, null, 2));  // Gives the output which is Object of nested objects


// Checkout the example of reduce-task there more example of reduce
