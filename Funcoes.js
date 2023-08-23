function somar(){
    const a = 10;
    const b = 20;
    const resultado = a+b;
    console.log(resultado);
}


function subtrair(){
    const a = 100;
    const b = 20;
    const resultado = a-b;
    console.log(resultado);
}


function subtracaoComParametro(a,b){
    const subtracao = a-b
    console.log(subtracao)
    console.log("a: "+ a + "/ b: "+b)
}
subtracaoComParametro(15,25);

function somaComRetorno(a,b,i){
    const somatoria = a+b+i;
    return somatoria;
}
console.log(somaComRetorno(10,20,30))

function subtracaoComRetorno(a,b,i){
    const sub = a-b-i;
    return sub;
}
console.log(subtracaoComRetorno(10,20,30))

