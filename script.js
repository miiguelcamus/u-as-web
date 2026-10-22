(function(){
var b=document.querySelector('.burger'),m=document.querySelector('.menu');
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var g={};new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Madrid',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date()).forEach(function(p){g[p.type]=p.value});
var d={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[g.weekday],t=(+g.hour%24)*60+ +g.minute;
var open=(d>=1&&d<=5&&t>=600&&t<1200)||(d===6&&t>=600&&t<900);
var s=document.getElementById('openstate');if(s)s.textContent=open?'Abierto ahora · con cita previa':'Ahora cerrado · reserva tu cita';
var li=document.querySelector('#hours li[data-d="'+d+'"]');if(li)li.classList.add('today');
document.querySelectorAll('.sws').forEach(function(grp){grp.querySelectorAll('.sw').forEach(function(x){x.addEventListener('click',function(e){e.preventDefault();
grp.querySelectorAll('.sw').forEach(function(y){y.classList.remove('on')});x.classList.add('on');
document.documentElement.style.setProperty('--polish',x.dataset.c);var hd=document.querySelector('.hand');if(hd){hd.classList.remove('paint');void hd.offsetWidth;hd.classList.add('paint')}var n=document.getElementById('cname');if(n)n.textContent=x.dataset.n;
var h=grp.closest('form');if(h)h.querySelector('[name=c]').value=x.dataset.n;})})});
var f=document.getElementById('bk');if(f){var dt=f.querySelector('[type=date]');try{dt.min=new Date().toISOString().slice(0,10)}catch(e){}
f.addEventListener('submit',function(e){e.preventDefault();var v=function(k){return f.querySelector('[name='+k+']').value};
var msg='Hola! Soy '+v('n')+'. Quería cita para '+v('s')+' el '+v('d').split('-').reverse().join('/')+' por la '+v('f').toLowerCase()+'. Color: '+v('c')+'.';
window.open('https://wa.me/34600000000?text='+encodeURIComponent(msg),'_blank','noopener')})}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll('.s,blockquote,.cg,figure,.ritual li').forEach(function(el,i){el.classList.add('reveal');el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)})}
})();
