import { Tooltip } from "./ninja-ui/tooltip";
import Dropdown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";

//create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();//"I am a tooltip is now output to the DOM"

//dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>{
    const instance = new Dropdown(dropdown);
    instance.init();
});

const tabs = new Tabs(document.querySelector('.tabs')); 
tabs.init();