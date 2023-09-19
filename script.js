
const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const itipo = document.querySelector(".tipo");
const idescricao = document.querySelector(".descricao");
const iquartos = document.querySelector(".quartos");
const ifinanciavel = document.querySelector(".financiavel");
const iarea = document.querySelector(".area");
const ivalor = document.querySelector(".valor");
const igaragem = document.querySelector(".garagem");
const isenha = document.querySelector(".senha");

function cadastrar () {
    fetch("http://localhost:8080/imovel",
    { 
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body:JSON.stringify({
            tipo: itipo.value,
            descricao: idescricao.value,
            quartos: iquartos.value,
            financiavel: ifinanciavel.value,
            area: parseFloat(iarea.value),
            valor: parseFloat(ivalor.value),
            garagem: igaragem.value,
            senha: isenha.value
         })
    })
    .then(function (res) {console.log(res)})
    .catch(function (res) {console.log(res)})
};

function limpar() {
    itipo.value = "",
    idescricao.value = "",
    iquartos.value = "",
    ifinanciavel.value = "",
    iarea.value = "",
    ivalor.value = "",
    igaragem.value = "",
    isenha.value = ""
}

formulario.addEventListener("submit", function (event){
    event.preventDefault();

   cadastrar();
   limpar(); 
    
});
