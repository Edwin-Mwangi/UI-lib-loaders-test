import { Tooltip } from "./ninja-ui/tooltip";
import Dropdown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";
import Snackbar from "./ninja-ui/snackbar";
//create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();//"I am a tooltip is now output to the DOM"

//dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>{
    const instance = new Dropdown(dropdown);
    instance.init();
});

//tabs
const tabs = new Tabs(document.querySelector('.tabs')); 
tabs.init();

//snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () =>{
    snackbar.show('You clicked me :)');
})
