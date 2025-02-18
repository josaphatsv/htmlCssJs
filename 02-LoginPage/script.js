let bakcFond= ()=> {
   const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 6 && hour < 18) {
        // Día de las 6 a 18 horas
        body.style.background = "url('./img/day.jpg') no-repeat center center/cover";
    } else {
        // Noche 19 a 5 horas
        body.style.background = "url('./img/night.jpg') no-repeat center center/cover";
        }
  
};

window.addEventListener('load', bakcFond);