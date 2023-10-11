let option = document.querySelectorAll("option")
let opçoes_texto = document.querySelector(".opçoes-texto")
let opçoes_numero = document.querySelector(".opçoes-numero")
let pontos_funcionario = document.querySelectorAll(".pontos-funcionario")
let desc_funcionario = document.querySelector(".descriçao-funcionario")
let base_array = document.querySelector(".base-array")
let contagem = 0
let opçoes_button = document.querySelectorAll("button")
let input = document.querySelector("input")
let carlos = null;
let pedro = null;
let henrique = null;
let gustavo = null;

let armazenamento = null;
let array_universal = []

//nenhum
option[0].addEventListener("click",()=>{
opçoes_texto.style = "display:none"
opçoes_numero.style = "display:none"
armazenamento = null;
pontos_funcionario[0].textContent = armazenamento;
})

//texto
option[1].addEventListener("click",()=>{
opçoes_texto.style = "display:block"
opçoes_numero.style = "display:none"
})

opçoes_button[0].addEventListener("click",()=>{
armazenamento = opçoes_button[0].value
pontos_funcionario[0].textContent = armazenamento
})
opçoes_button[1].addEventListener("click",()=>{
armazenamento = opçoes_button[1].value
pontos_funcionario[0].textContent = armazenamento
})
opçoes_button[2].addEventListener("click",()=>{
armazenamento = opçoes_button[2].value
pontos_funcionario[0].textContent = armazenamento
})
opçoes_button[3].addEventListener("click",()=>{
armazenamento = opçoes_button[3].value
pontos_funcionario[0].textContent = armazenamento
})
opçoes_button[4].addEventListener("click",()=>{
armazenamento = opçoes_button[4].value
pontos_funcionario[0].textContent = armazenamento
})

//número
option[2].addEventListener("click",()=>{
opçoes_texto.style = "display:none"
opçoes_numero.style = "display:block"
})

opçoes_button[5].addEventListener("click",()=>{
armazenamento = opçoes_button[5].value
pontos_funcionario[0].textContent = armazenamento
})
opçoes_button[5].addEventListener("click",()=>{
armazenamento = opçoes_button[5].value
pontos_funcionario[0].textContent = armazenamento
})
opçoes_button[6].addEventListener("click",()=>{
armazenamento = opçoes_button[6].value
pontos_funcionario[0].textContent = armazenamento
})
opçoes_button[7].addEventListener("click",()=>{
armazenamento = opçoes_button[7].value
pontos_funcionario[0].textContent = armazenamento
})
opçoes_button[8].addEventListener("click",()=>{
armazenamento = opçoes_button[8].value
pontos_funcionario[0].textContent = armazenamento
})
opçoes_button[9].addEventListener("click",()=>{
armazenamento = opçoes_button[9].value
pontos_funcionario[0].textContent = armazenamento
})

//array
option[3].addEventListener("click",()=>{
	
		let criar_array = document.createElement("div")
	let titulo = document.createElement("h1")
	criar_array.setAttribute("class","array-criado")
		contagem+=1
	criar_array.textContent = "array_n"+contagem+"___"+array_universal
	base_array.appendChild(criar_array)
	
	criar_array.addEventListener("click",()=>{
		criar_array.remove()
	})
})

//atualizar valor
option[5].addEventListener("click",()=>{
	pontos_funcionario[1].textContent = "Novo"

	setTimeout(()=>{
	pontos_funcionario[2].textContent = "con..."
	},500)
	setTimeout(()=>{
	pontos_funcionario[2].textContent = "configurando"
	},1100)

setTimeout(()=>{
array_universal.push("Novo "+armazenamento) 
	desc_funcionario.textContent = "Novo "+armazenamento
	input.value = "Novo "+armazenamento
	console.log(array_universal)
	console.log(array_universal.length)
	console.log(armazenamento)

},2000)
	
})

//remover valor
option[6].addEventListener("click",()=>{
	array_universal.pop()
	criaçao()
})

//combinar valor
option[7].addEventListener("click",()=>{
	let ultimo_add = array_universal[1]
	let combinar = "/"+armazenamento+ array_universal[1]+"/"
	array_universal.push(combinar)
})

let frutas = "pera";
switch(frutas){
case "maça":
	console.log("maça ok");
	break;
case "pera":
	console.log("pera ok");
	break;
default:
	console.log("esperando valor")
}