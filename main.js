// https://andyelpoeta.000webhostapp.com/Maquetacion_php/api.php
addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("https://andyelpoeta.000webhostapp.com/Maquetacion_php/api.php");
    let json = await peticion.json();
    console.log(json);
    document.querySelector(".logo").insertAdjacentHTML("beforeend", json.imagen);
    document.querySelector(".navigation").insertAdjacentHTML("beforeend", json.menu);
    document.querySelector(".search").insertAdjacentHTML("beforeend", json.buscar);
})