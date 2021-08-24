const notas = [7.7 , 6.5 , 5.2 , 8.9 , 9.0]

//sem callback

let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)
//função filter não altera o array original
/*console.log(notas.filter(nota=> nota >= 7))*/

notasBaixas = notas.filter(nota => nota < 7)

console.log(notasBaixas)