window.addEventListener('load', function() {
    let list;
    list = this.document.querySelectorAll('.list');
    function activar() {
        list.forEach(element => {
            element.classList.remove('active');
            this.classList.add('active');
        });
    }
    list.forEach((item) => item.addEventListener('click', activar)) ;
})