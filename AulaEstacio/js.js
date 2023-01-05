let num1 = 0
let num2 = 0
let divisão = (num1 / num2)
function solicitan1(){
    let n1 = prompt('digite o 1º número: ')
    if (n1 < 0){
        alert('ERRO, digite um número válido')
        return solicitan1()
    }else{
        return num1 = n1
    }
}

function solicitan2(){
    let n2 = prompt('digite o 2º número: ')
    if(n2 < 0){
        alert('ERRO, digite um número válido: ')
        return solicitan2()
    }else{
        return num2 = n2
    }
}
solicitan1()
solicitan2()
alert(num1 / num2)