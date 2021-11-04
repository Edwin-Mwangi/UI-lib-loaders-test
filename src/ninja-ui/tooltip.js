import './styles/test.css';

class Tooltip{
    constructor (element){
        this.element = element;
        this.message = element.getAttribute('data-message');

    }

    init(){
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip); 
        
        tip.addEventListener('mouseenter', () =>{
            tip.classList.add('active');
        });

        tip.addEventListener('mouseleave', () =>{
            tip.classList.remove('active');
        })
    }
}

export {Tooltip};