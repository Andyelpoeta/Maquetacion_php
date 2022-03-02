addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("");
    let json = await peticion.json();
    console.log(json);
    document.querySelector(".logo").insertAdjacentHTML("beforeend", json.imagen);
    document.querySelector(".navigation").insertAdjacentHTML("beforeend", json.menu);
    document.querySelector(".search").insertAdjacentHTML("beforeend", json.buscar);
})