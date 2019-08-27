function exe1(){
    // recupera os dados do usario
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);
    //processamento
    //calculo media
    var media = (nota1+nota2+nota3+nota4)/4
    //verifica aprovação
    if (media>= 7){
        alert("Aprovado com media "+ media)
        console.log("Aprovadocom media " +media)
    }    
    else { 
    alert("Reprovado com media " +media)
    console.log("Reprovado com media " + media)
    }
}
function exe2(){
    // recupera os dados do usario
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    
    //processamento
    //calculo media
    var media = (n1+n2)/4
    //verifica aprovação
    if (media>= 7){
        alert("Aprovado com media "+ media)
}
else {    
    alert("Reprovado com media " +media)
    }
}
function exe3(){
    // recupera os dados do usario
    var nro1 = Number(document.getElementById("nro1").value);
    var nro2 = Number(document.getElementById("nro2").value);
    
    //verificar o menor 
    if(nro1 < nro2){ 
        alert("Menor "+ nro1)
}
else if (nro2 < nro1){    
    alert("Menor " + nro2)
    }
else{ 
    alert("Não existe menor ")
  }
}
function exe4(){
    // recupera os dados do usario
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var numero3 = Number(document.getElementById("numero3").value);
    //verificar o menor 
    if((numero1 == numero2) && (numero2 == numero3)) {       
    alert("Não existe maior")
}
    else if (numero1 >= numero2) && (numero1 >= numero3)){    
    alert("Maior " + numero1)
    else if (numero2 >= numero3)}
    alert("Maior" + numero2
    }
else{ 
    alert("Maior " + numero3)
  }
}
function exe5(){
      // recupera os dados do usario
    var no1 = Number(document.getElementById("no1").value);
    var no2 = Number(document.getElementById("no2").value);
    var no3 = Number(document.getElementById("no3").value);
    var resultado
    switch(opcao){ 
    case 1:resultado = (no1 + no2) / 2
        break //não entra no case debaixo
    case 2: if (no1 >= no2) / 2
        break // resultado = no1 - no2
        }
        else { 
            resultado = no1 / no2
        }
        break //não entra no case debaixo 
    case 3:resultado = no1 * no2 
        break //não entra no case debaixo
    case 4:if (no2 ! = 0){ 
        resultado = no1/ no2
        }
        else { 
            resultado = "Divisao por zero"
        }
        break //não entra no case debaixo 
        default:resultado = "Opção invalido"
}
alert("Resultado " + resultado)
  
    