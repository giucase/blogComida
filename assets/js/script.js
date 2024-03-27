//Tratamento de Eventos
document.querySelector("#nome").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)
document.querySelector("#prototipo_nao").addEventListener("change", calcular)

document.querySelector("#prazo").addEventListener("input", function() {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerText = "Prazo" + prazo
    calcular()
})


function calcular(){

    //Dom - Document Object Model 
    const nome = document.querySelector("#nome").value
    let valor = nome * 100;
    
    const tipo = document.querySelector("#tipo").value
    if(tipo == 2) valor += 2000

    const prototipo_sim = document.querySelector("prototipo").checked
    if (prototipo_sim) valor*1.1



    document.querySelector("#valor").innerText = "R$" + valor.toFixed(2)
}


