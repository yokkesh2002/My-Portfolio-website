//===========VARIABLES==============

const btn = document.querySelectorAll('.controls .control')
const sections = document.querySelectorAll('.section')
const secBtns = document.querySelectorAll('.controls')
const allSection = document.querySelector('.main-content')
const canva = document.querySelector('canvas')
//===========VARIABLES END==============

//========PARTICLES BACKGROUND==========

/* Credit and Thanks:
Matrix - Particles.js;
*/
var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
xS = w.innerWidth || e.clientWidth || g.clientWidth,
yS = w.innerHeight|| e.clientHeight|| g.clientHeight;
console.log((xS + ' × ' + yS));

window.onload = function () {
  Particles.init({
    selector: ".particles-js"
  })
}
var particles = Particles.init({
  selector: ".particles-js",
  color: ["#ff9000", "#ff0266", "#00ffff"],
  connectParticles: true,
  speed: .3,
  maxParticles: 150,
  responsive: [
    {
      breakpoint: 1000,
      options: {
        speed: .6,
        color: ["#ff9000", "#ff0266", "#00ffff","#15ff00"],
        maxParticles: 63,
        connectParticles: false
      }
    }
  ]
})



//========PARTICLES BACKGROUND==========

function PageTransitions(){
    for(let i = 0; i < btn.length; i++){
    
    btn[i].onclick = function(){
        let activeBtn = document.querySelectorAll('.active-btn')
        activeBtn[0].className = activeBtn[0].className.replace('active-btn','')
        this.className += 'active-btn'
    //NOTE: THE "THIS" KEYWORD DOESN'T WORK ON ARROW FUNCTIONS
    }
}

//========SECTION ACTIVE CLASS=======

allSection.onclick = function (e) {  
    const id = e.target.dataset.id
    if(id){
        secBtns.forEach((button)=>{
            button.classList.remove('active')
        })
        e.target.classList.add('active')
        //===Hide Other Sections
        sections.forEach((section)=>{
            section.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
}


}
PageTransitions()


//=======SET H-REFs FOR ANCHOR TAGS ========

$('.yt').prop('href', 'https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ')
$('.codepen').prop('href', 'https://www.codepen.io/skyegideon')
$('.git').prop('href', 'https://www.github.com')
$('.blog-a').prop('href', 'https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ')

//=======TEMPLATE FOR CV BTN============

function display(){
  customAlert('Coming soon....',3500)
}

function customAlert(msg, duration) {
	var styler = document.createElement("div");
	styler.className = 'dis-wrap'

	styler.innerHTML = "<h1 class='display'>" + msg + "</h1>";
	setTimeout(function () {
		styler.parentNode.removeChild(styler);
	}, duration);
	document.body.appendChild(styler);
}