// calculo do imc = peso / (altura * altura)

function calcularImc(){

var inNome = document.getElementById("nome");

var inPeso = document.getElementById("peso");

var inAltura = document.getElementById("altura");

var outImc = document.getElementById("outImc");

var outProposta = document.getElementById("outProposta");

var inEmail = document.querySelector("#inEmail");

var inSobre = document.querySelector("#inSobre");

var btEnviar = document.querySelector("#btEnviar");

var nome = inNome.value;

var peso = Number(inPeso.value);

var altura = Number(inAltura.value);

var imc = peso / (altura * altura);


var participar = document.getElementById("participarPrograma");

var btParticiparPrograma = document.getElementById("btParticiparPrograma");

if (peso == "" || peso <= 0 || peso > 500 || isNaN(peso) || isNaN(altura)) {
    outImc.style.color = "red";
    outImc.textContent = "Por favor digite um peso válido."
    inPeso.focus();
    return;

} if ( altura == "" || altura <= 0 || altura > 3.00 ){
    outImc.style.color = "red";
    outImc.textContent = "Por favor digite uma altura válida."
    inAltura.focus();
    return;
}
else {
    outImc.textContent = nome + ", o valor do seu IMC é de: " + imc.toFixed(2);
    if (imc < 18.5){
        outImc.textContent = "Abaixo do peso!" + "\n"; 
        outProposta.textContent = "Pessoas com IMC abaixo de 18,5 podem apresentar quadros de desnutrição! Além disso, é importante verificar se não há alguma patologia por trás do baixo peso, principalmente se o emagrecimento aconteceu de forma repentina. Deficiências nutricionais, distúrbios alimentares, como anorexia, consumo excessivo de álcool e drogas, além do tabagismo, podem estar associados ao baixo peso. Tal condição pode provocar sintomas fisiológicas perceptíveis, como unhas fracas e quebradiças, irritabilidade, dores de cabeça, dor nas articulações, falta de concentração, entre outros sinais."
        participar.textContent = "Clique agora no botão abaixo e venha conhecer!" + "\n";
        btParticiparPrograma.removeAttribute("hidden");
    } else if (imc <= 24.9){
        outImc.textContent = "Peso normal!"
        outProposta.textContent = "Incrível! Você tem o peso normal, ou seja, você está com um peso adequado para sua altura. O ideal é que você se mantenha assim, porém, estando aqui, acredito que você tenha o objetivo de melhorar o seu corpo estéticamente? Conte para gente quais são os seus objetivos! Gostaria de ter um tanquinho malhado?"
        participar.textContent = "Escreve para gente se você tem um objetivo para o seu físico, ou se você quer simplesmente manter a forma e ter uma dieta mais saudável! Assim que possivel a gente entra em contato com você por email. Aliás, você tem um? Digite aqui pra mim também, por favor, em breve a gente se fala ta?!"
        inEmail.style.display = "block";
        inSobre.style.display = "block";
        btEnviar.style.display = "block";
    
    }
}


}


var botao = document.getElementById("botao");

botao.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    calcularImc(); // Chama a função calcularImc
});