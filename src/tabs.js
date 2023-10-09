
export default class Tabs {
    constructor(idElemento) {
        // Creamos variables (= propiedades ya que estamos en clases)
        this.tabs = document.getElementById(idElemento); // guardamos todo el elemento
        this.nav = this.tabs.querySelector('.tabs'); // guardamos el menú de navegación


        // Comprobamos que el elemento que clickeamos tenga la clase de tabs__link.
        this.nav.addEventListener('click', (e) => {
            if([...e.target.classList].includes('tabs__button')) {

                // Obtenemos la tab que queremos mostrar.
                const tab = e.target.dataset.tab;

                // Quitamos la clase active de algunas otras tabs que la tengan.
                if (this.tabs.querySelector('.tab--active')) {
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active');
                }

                // Quitamos la case active del botón.
                if (this.tabs.querySelector('.tabs__button--active')) {
                    this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
                }

                // Agregamos la clase active al tab.
                this.tabs.querySelector(`#${tab}`).classList.add('tab--active');

                // Agregamos la clase active al boton.
                e.target.classList.add('tabs__button--active');
            }
        });
    }
}