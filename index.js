let carTranslateX = 0;
function moveCar() {
    window.addEventListener('keydown', (event) => {
        const car = document.getElementById('car');
        console.log(event.key, carTranslateX);
        if (event.key === 'ArrowRight') {
            carTranslateX+=100;
            car.style.transform =  `translate(${carTranslateX}px)`;
        }
        if (event.key === 'ArrowLeft') {
            carTranslateX-=100;
            car.style.transform =  `translate(${carTranslateX}px)`;
        }
    })
}

moveCar();


