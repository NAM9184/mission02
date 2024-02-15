import { getNode, attr, addClass, removeClass } from "../lib/dom/index.js";
import { data } from "./data.js";

const posterList = getNode(".nav > ul");

function bgChange(target ,index){
  if(typeof target == 'string') target = getNode(target);
  const gradient = `linear-gradient(to bottom, ${data[index - 1].color[0]}, ${data[index - 1].color[1]})`;

  gsap.fromTo(target, {opacity: 0.5},{opacity: 1});
  
  target.style.backgroundImage = gradient;
}


const handleSlide = (() => {
  const poster = getNode(".visual img");
  const nickName = getNode(".nickName");
  
  return function(e) {
    e.preventDefault();
    const target = e.target.closest("li");
    const button = e.target.closest("button");
    const list = [...posterList.children];
    if (!target || !button) return;
    
    const index = target.dataset.index;
    
    nickName.textContent = data[index - 1].name;
    attr(poster, "src", `./assets/${data[index - 1].name.toLowerCase()}.jpeg`);
    attr(poster, "alt", data[index - 1].alt);
    
    
    gsap.fromTo(poster,{opacity:0,y:10, },{opacity:1,y: 0 ,ease: Power2.easeInOut, duration: .5})
    
    list.forEach((li) => removeClass(li, "is-active"));
    addClass(target, "is-active");


    bgChange('body', index);
  };
})();



posterList.addEventListener("click", handleSlide);
