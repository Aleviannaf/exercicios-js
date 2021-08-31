//array é um objeto 
console.log(typeof Array,typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Ale', 'Xande', 'Vianna']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados)

aprovados[3] = 'Paulo'
aprovados.push('Adria')
console.log(aprovados)

console.log(aprovados.length)
aprovados.sort() //esse metodo organiza em orgem alfabetica
console.log(aprovados)
console.log(aprovados[2])

delete aprovados[0]
console.log(aprovados)

aprovados.splice(1,2)
console.log(aprovados)

aprovados.splice(0, 2, 'Xatuba', 'Mesquita')
console.log(aprovados)

aprovados.splice(0, 0, 'Ale')
console.log(aprovados)