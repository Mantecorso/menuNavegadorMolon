window.addEventListener('load', function() {
    let list;
    list = this.document.querySelectorAll('.list');
    function activar() {
        list.forEach(element => {
            element.classList.remove('active');
            this.classList.add('active');
        });
    }
    list.forEach((item) => item.addEventListener('click', activar));

    function rain() {
        let uno = 111;
        let goldo = document.querySelector('.contenedor');
        let i = 0;

        while (i < uno) {
            let gotas = document.createElement('i');
            let stamano = Math.random() * 5;
            let posicionX = Math.floor(Math.random() * window.innerWidth);
            let retraso = Math.random() * -20;
            let duracion = Math.random() * 5;

            gotas.style.width = 0.2 + stamano + "px";
            gotas.style.left = posicionX + "px";
            gotas.style.animationDelay = retraso + "s";
            gotas.style.animationDuration = 1 + duracion + "s";

            goldo.appendChild(gotas);
            i++;
        }

    }

    rain();

})