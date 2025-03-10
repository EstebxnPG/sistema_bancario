document.querySelector(".form").addEventListener("submit", function(evento){
    evento.preventDefault();
    const opcion_usuario = document.querySelector(".opcion__usuario").value;
    
    console.log(opcion_usuario)
    function redirigirUsuario(num){
            if(num == 1){     
                window.location.href="opciones-dpg/crear-cuenta.html";
            }
            if(num == 2){
                window.location.href="opciones-dpg/crear-cuenta.html";
            }
            if(num == 3){
                window.location.href="opciones-jx/consultar-saldo.html";
            }
            if(num == 4){
                window.location.href="opciones-jx/retirar.html";
            }
            if(num == 5){
                window.location.href="opciones-jx/consignar.html";
            }
            if(num == 6){
                window.location.href="opciones-jx/salir.html";
            }

    }
    redirigirUsuario(opcion_usuario);
})