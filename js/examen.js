
// ACCIÓN SALUDO
let btnSaludo = document.querySelector("#saludo-btn");

btnSaludo.addEventListener("click", function(){
    alert("Hola Mundo: Bienvenidos al examen de Diego");
});

// ACCIÓN MOSTRAR NOMBRE y EMAIL

let inputNombre = document.querySelector("#nombre");
let inputEmail = document.querySelector("#email");
let formulario = document.querySelector("form");
let divDatos = document.querySelector(".mostrar-datos");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nombre = inputNombre.value.trim();
    let email = inputEmail.value.trim();

    if (nombre === "" || email === "") {
        divDatos.textContent = "Por favor, complete todos los campos.";
        divDatos.style.backgroundColor = "#ffe6e6";  
        divDatos.style.color = "#d9534f";         
    } else {
        divDatos.innerHTML = `
            <ul><li><strong>Nombre:</strong> ${nombre}</li></ul>
            <ul><li><strong>Email:</strong> ${email}</li></ul>
        `;
        divDatos.style.backgroundColor = "#e6fff2";
        divDatos.style.color = "#333";
        divDatos.style.display = "block";           
    }
});

// ACCIÓN MOSTRAR LISTA DE ACTORES

let btnMostrarActores = document.querySelector("#toggleButton");

btnMostrarActores.addEventListener("click", function(e) {
    e.preventDefault();

    let actorList = document.querySelector(".actor_list");

    if (actorList.style.display === "none" || actorList.style.display === "") {
        actorList.style.display = "block";
    } else {
        actorList.style.display = "none";
    }
});


// SOLICITUD REST COUNTRIES

let btnCargaPaises = document.querySelector("#loadCountries");

btnCargaPaises.addEventListener("click", function(){
// Realizar la solicitud a la API de RestCountries
fetch("https://restcountries.com/v3.1/all")
.then(response => {
    if (!response.ok) {
        throw new Error("Error al cargar los países");
    }
    return response.json();
})
.then(data => {
    // Limpiar la lista antes de agregar los países
    countryList.innerHTML = "";

    // Recorrer los datos y agregar cada país a la lista
    data.forEach(country => {
        let listItem = document.createElement("li");
        listItem.textContent = country.name.common;  // Nombre del país
        countryList.appendChild(listItem);
    });
})
.catch(error => {
    console.error("Hubo un problema con la solicitud:", error);
    countryList.innerHTML = "<li>Error al cargar los países. Inténtalo de nuevo.</li>";
});
});