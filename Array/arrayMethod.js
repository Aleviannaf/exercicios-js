const pilotos = ['Vetteel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() //massa saiu - remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') //add na lista
console.log(pilotos)

pilotos.shift() //remove no inicio
console.log(pilotos)

pilotos.unshift('Ale') //add no inicio
console.log(pilotos)

//splice pode add e remover
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1) //remoceu Massa
console.log(pilotos)

//já o metodo slice retorna um novo array
const algunsPilotos1 = pilotos.slice(2) // fatia e retorna o array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // a posição 4 não entra
console.log(algunsPilotos2)