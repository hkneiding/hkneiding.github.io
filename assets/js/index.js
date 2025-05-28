window.onload = function() {
    initialiseParticles();
};

function initialiseParticles() {
    Particles.init({
        selector: '.background',
        color: ['#b3b3b3', '#757575', '#363636'],
        maxParticles: Math.floor( 0.0001 * window.screen.width * window.screen.height ),
        speed : 0.3,
        connectParticles: true,
        sizeVariations : 5,
        minDistance: 100,
    });
}
