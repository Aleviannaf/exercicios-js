//IIFe -> imediately invoked function expression
(
    function() {
        console.log('Será executado')
        console.log('Foge do escopo mais abrangenre')
    }
)()