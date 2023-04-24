const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }};
console.log(JSON.stringify(obj));

// modo errado
//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) 

//modo errado
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) 

//modo certo
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3')); // todo nome de atributo json devem ter aspa duplas

//modo correto tambem 
console.log(JSON.parse('{"a":1, "b": "string", "c": true, "d": {}, "e": [] }'))