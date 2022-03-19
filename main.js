// https://andyelpoeta.000webhostapp.com/Maquetacion_php/api.php
addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("api.php");
    let json = await peticion.json();
    console.log(json);
    document.querySelector(".logo").insertAdjacentHTML("beforeend", json.imagen);
    document.querySelector(".navigation").insertAdjacentHTML("beforeend", json.menu);
    document.querySelector(".search").insertAdjacentHTML("beforeend", json.buscar);
    document.querySelector(".banner").insertAdjacentHTML("beforeend", json.articuloImagen);
    document.querySelector(".banner").insertAdjacentHTML("beforeend", json.parteFondo);
    document.querySelector(".banner").insertAdjacentHTML("beforeend", json.mision);
    document.querySelector(".trailer").insertAdjacentHTML("beforeend",json.trailer);
    //mostrar el video
    document.querySelector(".play").addEventListener("click",(e)=>{
       
       document.querySelector(".trailer").classList.toggle("active");
       document.querySelector(".trailer video").play();
    })
    //cerrar el video
    document.querySelector("ion-icon[name='close']").addEventListener("click", (e)=>{
        document.querySelector(".trailer").classList.toggle("active");
        document.querySelector(".trailer video").pause();
    })

})
