
window.addEventListener( 'scroll', ()=>{

    animation('abajo');
    animation('derecha');
    animation('hizquierda');
});

const animation = ( direction )=>{
    const elements = document.querySelectorAll(`.animar-${direction}`);

    elements.forEach(element => {        
        const screenHeight = window.innerHeight;
        const distancia = element.getBoundingClientRect().top;
    
        if( distancia <= screenHeight ){
            element.classList.add(`animacion-${direction}`);
        }
    });
    
}