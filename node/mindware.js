//minffleware pattern (chain of responsibility)

const passo1 = (context, next) =>{
    context.valor1 = 'mid1'
    next()
}

const passo2 = (context, next) => {
    context.valor2 = 'mid2'
    next()
}

const passo3 = context => context.valor3 = 'mid3'

const exec = (ctx, ...mindleware) =>{
    const execPasso = indice => {
        mindleware && indice < mindleware.length &&
            mindleware[indice](ctx, ()=> execPasso(indice + 1))
    }
    execPasso(0)
}


const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)