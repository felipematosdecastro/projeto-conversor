var dolar = 5.8

var usdinput = document.querySelector("#usd")
var brlinput = document.querySelector("#brl")

usdinput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})
brlinput.addEventListener("keyup", () => {
   convert("brl-to-usd")
})

usdinput.addEventListener("blur", () => {
    usdinput.value = formatcurrency(usdinput.value)
})

brlinput.addEventListener("blur", () => {
    brlinput.value = formatcurrency(brlinput.value)
})

usdinput.value = "1000,00"
convert("usd-to-brl")
// FUNÇÕES

function formatcurrency(value){
        // AJUSTAR O VALOR
    var fixedvalue = fixvalue(value)
        // UTILIZAR FUNÇÃO DE FORMATAR
    var objeto = {
        useGrouping: false,
        minimumFractionDigits: 2,
    }
       // FORMATADOR
    var formatter = new Intl.NumberFormat("pt-BR", objeto)
    return formatter.format(fixedvalue)
}

function fixvalue(value){
    var fixvalue = value.replace(",", ".")
    var floatvalue = parseFloat(fixvalue)
    if(floatvalue == NaN) {
        floatvalue = 0
    }
    return floatvalue
}
   
function convert(type){
    if(type == "usd-to-brl"){        
       var fixedvalue = fixvalue(usdinput.value)
       var result = fixedvalue * dolar 
       result = result.toFixed(2)  
       
       brlinput.value = formatcurrency(result)
    } 
    if(type == "brl-to-usd"){         
      var fixedvalue = fixedvalue(brlinput.value)
      var result = fixedvalue / dolar
      result = result.toFixed(2)

      usdinput.value = formatcurrency(result)
         
    }
}