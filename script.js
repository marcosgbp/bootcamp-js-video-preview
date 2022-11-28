function reproducir(element){
    element.autoplay = true;
    element.muted = true;
    element.load();
}

function pausar(element){
    console.info("pausa....")
    element.pause();
}