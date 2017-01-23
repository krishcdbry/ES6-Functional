import fs from 'fs'


// let data = fs.readFileSync('data.txt');
// console.log(data);  // This actually prints byte information - Normally in computer it contains strings as long list of binary codes so we can sove this by character encoding

let output_1 = fs.readFileSync('data.txt', 'utf8')
                        .trim()                           // To remove the unnecessary spaces/lines
                        .split('\n')                      // Splitting each line to array
                        .map((line) => line.split(' '))   // Making the input into a convinent array of objects
                        .reduce((final, line) => {
                          final[line[0]] = final[line[0]] || [];
                          final[line[0]].push({
                            type : line[1]
                            , name : line[2]
                            , price : line[3]
                          })
                          return final;
                        }, {})


let output_2 = fs.readFileSync('data.txt', 'utf8')
                        .trim()                           // To remove the unnecessary spaces/lines
                        .split('\n')                      // Splitting each line to array
                        .map((line) => line.split(' '))   // Making the input into a convinent array of objects
                        .reduce((final, [shop, type, name, price]) => {
                          final[shop] = final[shop] || []
                          final[shop].push({type, name, price});
                          return final;
                        }, {})

console.log(JSON.stringify(output_2, null, 2));   // Prints the proper array
console.log(JSON.stringify(output_1, null, 2));   // Prints the proper array
