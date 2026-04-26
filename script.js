const fotky=[
"img/prace1.jpg",
"img/prace2.jpg",
"img/prace3.jpg"
];

const nadpisy=[
"Rekonstrukce koupelny",
"Oprava potrubí",
"Nové odpady"
];

const texty=[
"Kompletní rekonstrukce koupelny.",
"Oprava prasklého potrubí.",
"Instalace nových rozvodů."
];

let index=0;

function aktualizuj(){

document.getElementById("slider-foto").src=fotky[index];
document.getElementById("slider-nadpis").innerText=nadpisy[index];
document.getElementById("slider-text").innerText=texty[index];

document.getElementById("btn-predchozi").disabled=index===0;
document.getElementById("btn-dalsi").disabled=index===fotky.length-1;

}

function dalsi(){
if(index<fotky.length-1){
index++;
aktualizuj();
}
}

function predchozi(){
if(index>0){
index--;
aktualizuj();
}
}



/* ANIMACE */

const prvky=document.querySelectorAll(".animace");

function animace(){

prvky.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-100){
el.classList.add("zobraz");
}

});

}

window.addEventListener("scroll",animace);
animace();



/* RECENZE */

const form=document.getElementById("recenzeForm");
const box=document.getElementById("recenze-box");

let recenze=JSON.parse(localStorage.getItem("recenze"))||[];

function zobraz(){

box.innerHTML="";

recenze.forEach(r=>{

box.innerHTML+=`
<div class="karta-recenze">

<h4>${r.jmeno}</h4>

<div style="color:gold">
${"⭐".repeat(r.rating)}
</div>

<p>${r.text}</p>

</div>
`;

});

}

zobraz();

form.addEventListener("submit",function(e){

e.preventDefault();

const jmeno=document.getElementById("jmeno").value;
const text=document.getElementById("text").value;

const rating=document.querySelector('input[name="rating"]:checked').value;

recenze.push({jmeno,text,rating});

localStorage.setItem("recenze",JSON.stringify(recenze));

form.reset();

zobraz();

});

/* HAMBURGER MENU */

function toggleMenu(){

const menu = document.getElementById("menu");

menu.classList.toggle("aktivni");

}