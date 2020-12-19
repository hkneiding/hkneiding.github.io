window.onload = function() {
    initialiseParticles();
};

function initialiseParticles() {
    Particles.init({
        selector: '.background',
        color: ['#b3b3b3', '#757575', '#363636'],
        maxParticles: 100,
        speed : 0.25,
        connectParticles: true,
        sizeVariations : 5,
        minDistance: 100,
        // options for breakpoints
        responsive: [
            {
            breakpoint: 768,
            options: {
                maxParticles: 80,
                sizeVariations : 4,
                minDistance: 80,
                }
            }, {
            breakpoint: 425,
            options: {
                maxParticles: 40,
                sizeVariations : 4,
                minDistance: 60,
                }
            }, {
            breakpoint: 320,
            options: {
                maxParticles: 0, // disables particles.js
                }
            }
        ] 
        });
    }
