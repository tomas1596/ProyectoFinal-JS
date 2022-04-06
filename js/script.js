//Crear Cuenta
class Cuenta {
    constructor(correo,) {
        this.correo = correo;
    }
}

let correos

if(localStorage.getItem('Correos')){
    correos = JSON.parse(localStorage.getItem('Correos'))
} else {
    correos = []
    localStorage.setItem('Correos', JSON.stringify(correos))
}

localStorage.setItem('Correos', JSON.stringify(correos))

let form = document.getElementById('formUser')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let correo = document.getElementById('account').value

    const cuenta = new Cuenta(correo)
    correos.push(cuenta)

    localStorage.setItem('Correos', JSON.stringify(correos))
    form.reset()
})

//Sweet Alert
document.getElementById('sweetAlert').addEventListener("click", function() {
	swal("Este botón no funciona :(", "", "warning");
})

//Pestañas
const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e) {
	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => {
	item.classList.remove('tab-border');
	});
}

function removeShow() {
	tabContentItems.forEach(item => {
	item.classList.remove('show');
	});
}

tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


// Pregunta 1
const targetDiv = document.getElementById('answer1');
const btn = document.getElementById('question1');
btn.onclick = function () {
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
    }else{
        targetDiv.style.display = "block";
    }
}
// Pregunta 2
const question2 = document.getElementById("answer2");
const question2btn = document.getElementById("question2");
question2btn.onclick = function () {
	if(question2.style.display !== "none"){
		question2.style.display = "none";
	}else{
		question2.style.display = "block";
	}
};
// Pregunta 3
const question3 = document.getElementById("answer3");
const question3btn = document.getElementById("question3");
question3btn.onclick = function () {
	if(question3.style.display !== "none"){
		question3.style.display = "none";
	}else{
		question3.style.display = "block";
	}
};
// Pregunta 4
const question4 = document.getElementById("answer4");
const question4btn = document.getElementById("question4");
question4btn.onclick = function () {
	if(question4.style.display !== "none"){
		question4.style.display = "none";
	}else{
		question4.style.display = "block";
	}
};
// Pregunta 5
const question5 = document.getElementById("answer5");
const question5btn = document.getElementById("question5");
question5btn.onclick = function () {
	if(question5.style.display !== "none"){
		question5.style.display = "none";
	}else{
		question5.style.display = "block";
	}
};
