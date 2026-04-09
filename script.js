document.addEventListener('DOMContentLoaded', () => {
    const btnInicio = document.getElementById('btn-inicio');
    const sections = document.querySelectorAll('.fullscreen');
    let currentSectionIndex = 0;

    btnInicio.addEventListener('click', () => {
        // Al apretar el botón, desliza la portada hacia arriba
        sections[currentSectionIndex].style.transform = 'translateY(-100%)';
        currentSectionIndex++;
        // Y muestra la sección del logo
        sections[currentSectionIndex].classList.remove('oculto');
    });

    // Función opcional para avanzar con las flechas del teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            if (currentSectionIndex < sections.length - 1) {
                sections[currentSectionIndex].style.transform = 'translateY(-100%)';
                currentSectionIndex++;
                sections[currentSectionIndex].classList.remove('oculto');
            }
        }
    });
});
            
