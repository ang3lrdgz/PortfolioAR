$(window).on('load', function() {
  gsap.to('#loader', 1, { y: '0'});
  gsap.to('#loader', 1, { opacity: 0, delay: 1 });
  gsap.to('#loader', 0, { display: 'none', delay: 3 });
  gsap.to('#header', 0, { display: 'block', delay: 2 });
  gsap.to('.navigation-close', 0, { display: 'none'});
  gsap.to('#navigation-content', 0, { display: 'none', delay: 1 });
  gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
});

$(function(){
  $('.color-panel').on("click",function(e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
});
$('.colors a').on("click",function(e) {
  e.preventDefault();
  var attr = $(this).attr("title");
  console.log(attr);
  $('head').append('<link rel="stylesheet" href="css/'+attr+'.css">');
});
});
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   }); 

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){

    $('#about-link').on('click',function(){
      gsap.to('#navigation-content',0,{display:"none",delay:.7});
      gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
      gsap.to('.menubar',0,{display:"block",delay:.7});
      gsap.to('.navigation-close',0,{display:"none",delay:.7});
   gsap.to('#breaker',0,{display:"block"});
   gsap.to('#breaker-two',0,{display:"block",delay:.1});
   gsap.to('#breaker',0,{display:"none",delay:2});
   gsap.to('#breaker-two',0,{display:"none",delay:2});
   gsap.to('#about',0,{display:"block",delay:.7});
   gsap.to('#navigation-content',0,{display:'flex',delay:2});
 })
 $('#contact-link').on('click',function(){
   gsap.to('#navigation-content',0,{display:"none",delay:.7});
   gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
   gsap.to('.menubar',0,{display:"block",delay:.7});
   gsap.to('.navigation-close',0,{display:"none",delay:.7});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#contact',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#portfolio-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('.menubar',0,{display:"block",delay:.7});
  gsap.to('.navigation-close',0,{display:"none",delay:.7});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})
$('#home-link').on('click',function(){
  gsap.to('#navigation-content',0,{display:"none",delay:.7});
  gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
  gsap.to('.menubar',0,{display:"block",delay:.7});
  gsap.to('.navigation-close',0,{display:"none",delay:.7});
gsap.to('#breaker',0,{display:"block"});
gsap.to('#breaker-two',0,{display:"block",delay:.1});
gsap.to('#breaker',0,{display:"none",delay:2});
gsap.to('#breaker-two',0,{display:"none",delay:2});
gsap.to('#header',0,{display:"block",delay:.7});
gsap.to('#navigation-content',0,{display:'flex',delay:2});
})

})
// Agrega el evento de click al icono
document.querySelector('.footer-button').addEventListener('click', scrollToTop);
// Función scrollToTop
function scrollToTop() {
  const scrollToTop = window.setInterval(function() {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 30); // Ajusta el valor 20 para controlar la velocidad de desplazamiento
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 10); // Ajusta el valor 10 para controlar la frecuencia de desplazamiento
}

//--------------------------light mode--------------------------
const btnMode = document.querySelector('#lightmode');
const htmlElement = document.querySelector('html');
const headerElement = document.querySelector('#header');
const navigationBarElement = document.querySelector('#navigation-bar');
const navigationContentElement = document.querySelector('#navigation-content');
const navigationCloseElement = document.querySelector('.navigation-close');
const aboutElement = document.querySelector('#about');
const portfolioElement = document.querySelector('#portfolio');
const contactElement = document.querySelector('#contact');
const textWhiteElement = document.querySelectorAll('.text-white');
const skillsElement = document.querySelector('#skills');
const footerElement = document.querySelector('.footer');

btnMode.addEventListener('click', () => {
  htmlElement.classList.toggle('light');
  headerElement.classList.toggle('light');
  navigationBarElement.classList.toggle('light');
  navigationContentElement.classList.toggle('light');
  navigationCloseElement.classList.toggle('light');
  aboutElement.classList.toggle('light');
  portfolioElement.classList.toggle('light');
  contactElement.classList.toggle('light');
  textWhiteElement.forEach((white) => {
    white.classList.toggle('light');
  });
  skillsElement.classList.toggle('light');
  footerElement.classList.toggle('light');
});

//--------------------------scroll top--------------------------
window.addEventListener('scroll', function() {
  var header = document.getElementById('navigation-bar');
  var scrollPosition = window.scrollY || window.pageYOffset;
  
  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


//--------------------------Languages--------------------------

const language = document.querySelector("#language");
language.addEventListener('click', changeLanguage);

function changeLanguage() {
  const isChecked = language.checked;
  const trueSpan = document.querySelector('.true-span');
  const falseSpan = document.querySelector('.false-span');
  const verb = document.getElementById("verb");
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const portfolioLink = document.getElementById("portfolio-link");
  const contactLink = document.getElementById("contact-link");
  const aboutTitle = document.getElementById("about-title");
  const aboutTitleColor = document.getElementById("about-title-color");
  const aboutCaption = document.getElementById("about-caption");
  const aboutCaptionColor = document.getElementById("about-caption-color");
  const aboutFirst = document.getElementById("about-first");
  const aboutFirstColor = document.getElementById("about-first-color");
  const aboutFirst2 = document.getElementById("about-first2");
  const aboutSecond = document.getElementById("about-second");
  const cvEn = document.getElementById("cvEn");
  const cvEs = document.getElementById("cvEs");
  const skillsTitle = document.getElementById("skills-title");
  const skillsTitleColor = document.getElementById("skills-title-color");
  const portfolioTitle = document.getElementById("portfolio-title");
  const portfolioTitleColor = document.getElementById("portfolio-title-color");
  const portfolioCaption = document.getElementById("portfolio-caption");
  const portfolioCaptionColor = document.getElementById("portfolio-caption-color");
  const titleProject1 = document.getElementById("title-project1");
  const descProject1 = document.getElementById("desc-project1");
  const viewProject1 = document.getElementById("view-project1");
  // const titleProject2 = document.getElementById("title-project2");
  // const descProject2 = document.getElementById("desc-project2");
  // const viewProject2 = document.getElementById("view-project2");
  // const titleProject3 = document.getElementById("title-project3");
  // const descProject3 = document.getElementById("desc-project3");
  // const viewProject3 = document.getElementById("view-project3");
  // const titleProject4 = document.getElementById("title-project4");
  // const descProject4 = document.getElementById("desc-project4");
  // const viewProject4 = document.getElementById("view-project4");
  const contactTitle = document.getElementById("contact-title");
  const contactTitleColor = document.getElementById("contact-title-color");
  const contactCaption = document.getElementById("contact-caption");
  const contactCaptionColor = document.getElementById("contact-caption-color");
  const contactN = document.getElementById('contactn');
  const contactLinkedin = document.getElementById('contact-linkedin');
  const contactL = document.getElementById('contactl');
  const contactLocation = document.getElementById('contact-location');
  const contactP = document.getElementById('contactp');
  const contactPhone = document.getElementById('contact-phone');
  const contactE = document.getElementById('contacte');
  const contactEmail = document.getElementById('contact-email');

  const languageContent = {
    trueSpan: { spanish: 'inline', english: 'none' },
    falseSpan: { spanish: 'none', english: 'inline' },
    verb: { spanish: 'Soy un', english: "I'm a" },
    homeLink: { spanish: 'INICIO', english: 'HOME' },
    aboutLink: { spanish: 'SOBRE MÍ', english: 'ABOUT ME' },
    portfolioLink: { spanish: 'PORTAFOLIO', english: 'PORTFOLIO' },
    contactLink: { spanish: 'CONTACTO', english: 'CONTACT' },
    aboutTitle: { spanish: 'Sobre', english: 'About' },
    aboutTitleColor: { spanish: 'M&iacute;', english: 'Me' },
    aboutCaption: { spanish: '', english: 'Get to Know' },
    aboutCaptionColor: { spanish: 'Con&oacute;ceme', english: 'me.' },
    aboutFirst: { spanish: 'Hola, soy', english: "Hello, I'm" },
    aboutFirstColor: { spanish: '&Aacute;ngel Rodr&iacute;guez', english: '&Aacute;ngel Rodr&iacute;guez' },
    aboutFirst2: { spanish: ', un apasionado desarrollador web con sede en San Luis, Argentina', english: ', a passionate web developer based in San Luis, Argentina' },
    aboutSecond: { spanish: 'A mis 26 años, me presento como una persona dedicada, responsable y siempre dispuesta a enfrentar nuevos desafíos. En 2022, obtuve mi título de Ingeniero de Sistemas de la UNEFA en Venezuela, lo que me brindó una sólida base académica en sistemas de información. Desde entonces, he invertido tiempo y esfuerzo en estudiar y profundizar en el mundo del diseño y desarrollo web.', english: 'At the age of 26 I present myself as a dedicated, responsible person and always ready to face new challenges. In 2022 I obtained my degree in Systems Engineering from UNEFA in Venezuela, which gave me a solid academic foundation in information systems. Since then, I have invested time and effort in studying and delving into the world of web design and development.' },
    cvEn: { spanish: 'Descargar (CV en inglés)', english: 'Download (CV in English)' },
    cvEs: { spanish: 'Descargar (CV en español)', english: 'Download (CV in Spanish)' },
    skillsTitle: { spanish: 'Mis', english: 'My' },
    skillsTitleColor: { spanish: 'Habilidades', english: 'Skills' },
    portfolioTitle: { spanish: 'Mi', english: 'My' },
    portfolioTitleColor: { spanish: 'Portafolio', english: 'Portfolio' },
    portfolioCaption: { spanish: 'Algunos de mis', english: 'Some of my' },
    portfolioCaptionColor: { spanish: 'trabajos', english: 'Works' },
    titleProject1: { spanish: 'TotalControl-EE', english: 'TotalControl-EE' },
    descProject1: { spanish: 'Esta API REST es una aplicación de ASP.NET Core en .NET 7, tiene cuatro servicios que se encargan de realizar diferentes tareas, proporciona endpoints para acceder a recursos relacionados con empleados y registros de ingresos y egresos de los empleados.', english: 'This REST API is an ASP.NET Core application in .NET 7, it has four services that are responsible for performing different tasks, it provides endpoints to access resources related to employees and employee sign-in and sign-out records.' },
    viewProject1: { spanish: 'Ver Proyecto', english: 'View Project' },
    //titleProject2: { spanish: 'Titulo Proyecto 2', english: 'Title Project 2' },
    //descProject2: { spanish: 'Descripcion Proyecto 2', english: 'Description Project 2' },
    // viewProject2: { spanish: 'Ver Proyecto', english: 'View Project' },
    // titleProject3: { spanish: 'Titulo Proyecto 3', english: 'Title Project 3' },
    // descProject3: { spanish: 'Descripcion Proyecto 3', english: 'Description Project 3' },
    // viewProject3: { spanish: 'Ver Proyecto', english: 'View Project' },
    // titleProject4: { spanish: 'Titulo Proyecto 4', english: 'Title Project 4' },
    // descProject4: { spanish: 'Descripcion Proyecto 4', english: 'Description Project 4' },
    // viewProject4: { spanish: 'Ver Proyecto', english: 'View Project' },
    contactTitle: { spanish: '', english: 'Contact' },
    contactTitleColor: { spanish: 'Cont&aacute;ctame', english: 'Me' },
    contactCaption: { spanish: 'en contacto', english: 'In touch' },
    contactCaptionColor: { spanish: 'Ponerse', english: 'Get' },
    contactN: { spanish: 'Linkedin', english: 'Linkedin' },
    contactLinkedin: { spanish: 'angelrdgz', english: 'angelrdgz' },
    contactL: { spanish: 'Direcci&oacute;n', english: 'Location' },
    contactLocation: { spanish: 'San Luis, Argentina', english: 'San Luis, Argentina' },
    contactP: { spanish: 'Tel&eacute;fono', english: 'Phone' },
    contactPhone: { spanish: '+54 9 266 4867847', english: '+54 9 266 4867847' },
    contactE: { spanish: 'Correo', english: 'Email' },
    contactEmail: { spanish: 'angelrdgz.sist@gmail.com', english: 'angelrdgz.sist@gmail.com' },
  };

  if (isChecked) {
    applyLanguageContent('spanish');
  } else {
    applyLanguageContent('english');
  }

  function applyLanguageContent(lang) {
    trueSpan.style.display = languageContent.trueSpan[lang];
    falseSpan.style.display = languageContent.falseSpan[lang];
    verb.innerHTML = languageContent.verb[lang];
    homeLink.innerHTML = languageContent.homeLink[lang];
    homeLink.dataset.text = languageContent.homeLink[lang];
    aboutLink.innerHTML = languageContent.aboutLink[lang];
    aboutLink.dataset.text = languageContent.aboutLink[lang];
    portfolioLink.innerHTML = languageContent.portfolioLink[lang];
    portfolioLink.dataset.text = languageContent.portfolioLink[lang];
    contactLink.innerHTML = languageContent.contactLink[lang];
    contactLink.dataset.text = languageContent.contactLink[lang];
    aboutTitle.innerHTML = languageContent.aboutTitle[lang];
    aboutTitleColor.innerHTML = languageContent.aboutTitleColor[lang];
    aboutCaption.innerHTML = languageContent.aboutCaption[lang];
    aboutCaptionColor.innerHTML = languageContent.aboutCaptionColor[lang];
    aboutFirst.innerHTML = languageContent.aboutFirst[lang];
    aboutFirstColor.innerHTML = languageContent.aboutFirstColor[lang];
    aboutFirst2.innerHTML = languageContent.aboutFirst2[lang];
    aboutSecond.innerHTML = languageContent.aboutSecond[lang];
    cvEn.innerHTML = languageContent.cvEn[lang];
    cvEs.innerHTML = languageContent.cvEs[lang];
    skillsTitle.innerHTML = languageContent.skillsTitle[lang];
    skillsTitleColor.innerHTML = languageContent.skillsTitleColor[lang];
    portfolioTitle.innerHTML = languageContent.portfolioTitle[lang];
    portfolioTitleColor.innerHTML = languageContent.portfolioTitleColor[lang];
    portfolioCaption.innerHTML = languageContent.portfolioCaption[lang];
    portfolioCaptionColor.innerHTML = languageContent.portfolioCaptionColor[lang];
    titleProject1.innerHTML = languageContent.titleProject1[lang];
    descProject1.innerHTML = languageContent.descProject1[lang];
    viewProject1.innerHTML = languageContent.viewProject1[lang];
    // titleProject2.innerHTML = languageContent.titleProject2[lang];
    // descProject2.innerHTML = languageContent.descProject2[lang];
    // viewProject2.innerHTML = languageContent.viewProject2[lang];
    // titleProject3.innerHTML = languageContent.titleProject3[lang];
    // descProject3.innerHTML = languageContent.descProject3[lang];
    // viewProject3.innerHTML = languageContent.viewProject3[lang];
    // titleProject4.innerHTML = languageContent.titleProject4[lang];
    // descProject4.innerHTML = languageContent.descProject4[lang];
    // viewProject4.innerHTML = languageContent.viewProject4[lang];
    contactTitle.innerHTML = languageContent.contactTitle[lang];
    contactTitleColor.innerHTML = languageContent.contactTitleColor[lang];
    contactCaption.innerHTML = languageContent.contactCaption[lang];
    contactCaptionColor.innerHTML = languageContent.contactCaptionColor[lang];
    contactN.innerHTML = languageContent.contactN[lang];
    contactLinkedin.innerHTML = languageContent.contactLinkedin[lang];
    contactL.innerHTML = languageContent.contactL[lang];
    contactLocation.innerHTML = languageContent.contactLocation[lang];
    contactP.innerHTML = languageContent.contactP[lang];
    contactPhone.innerHTML = languageContent.contactPhone[lang];
    contactE.innerHTML = languageContent.contactE[lang];
    contactEmail.innerHTML = languageContent.contactEmail[lang];
  }
}
changeLanguage();

function toggleMenuBar() {
  const menubar = document.querySelector('.menubar');
  const navigationClose = document.querySelector('.navigation-close');

  if (menubar.style.display === 'none') {
    menubar.style.display = ''; // Retirar el estilo display: none;
    navigationClose.style.display = 'none'; // Mostrar navigation-close
  } else {
    menubar.style.display = 'none'; // Agregar el estilo display: none;
    navigationClose.style.display = ''; // Ocultar navigation-close
  }  
}

function addClickHandlers() {
  const menubar = document.querySelector('.menubar');
  const navigationClose = document.querySelector('.navigation-close');

  menubar.addEventListener('click', toggleMenuBar);
  navigationClose.addEventListener('click', toggleMenuBar);
}

document.addEventListener('DOMContentLoaded', addClickHandlers);

