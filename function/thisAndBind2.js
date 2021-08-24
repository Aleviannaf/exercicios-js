function Pessoa (){
    this.idade = 0

    const self= this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this) funciona isso*/,1000)
}

//para funcionar vou instanciar
new Pessoa

/*
isso também funciona
const pessoa2 =()=>{
    idade=0

    setInterval(function(){
        idade++
        console.log(idade)
    },1000)
}

*/
