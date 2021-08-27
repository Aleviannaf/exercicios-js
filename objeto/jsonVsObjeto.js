const obj = { a:1, b: 2, c: 3, soma(){return a +b +c}}
//transformar para json
console.log(JSON.stringify(obj))
//note que a função foi excluida

//agora vou pegar um Json e transformar em um objeto
//console.log(JSON.parse("{ a:1, b:2, c:3}")) // não funciona
//console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3}")) // também não funciona
console.log(JSON.parse('{ "a":1, "b":2, "c":3}'))
