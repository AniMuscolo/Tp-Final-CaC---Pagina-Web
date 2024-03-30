document.addEventListener("DOMContentLoaded", () =>{
    //Seleccionamos elementos del DOM
    const toogleButton = document.querySelector(".navbar-toogle-boton");
    const movilMenu = document.querySelector(".navbar-menu-movil");

    //si el menu movil esta oculto (none o vacio) lo cambia a "flex"
    //Si el menu movil esta visible, lo oculta cambiando a "none"
    const toogleMenu = () =>{
        movilMenu.style.display = 
            movilMenu.style.display === "none" || movilMenu.style.display === ""
            ? "flex"
            : "none";
    };

    const ocultarMenuResize = () => {
        movilMenu.style.display = "none"
    }

    toogleButton.addEventListener("click", toogleMenu); // cuando se hace click en los puntos se despliega el menu
    window.addEventListener("resize", ocultarMenuResize); // cuando se agranda la pagina se oculta ese menú
    window.addEventListener("load", ocultarMenuResize); //para ocultar el menu de los puntos cuando se actualiza la pagina
});