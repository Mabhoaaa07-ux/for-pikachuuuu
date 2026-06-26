let scene = 1;

function go(n){
  document.querySelectorAll('.scene').forEach(s=>s.classList.remove('active'));
  document.getElementById('s'+n).classList.add('active');
  scene = n;
}

/* FLOW */
function openGift(){
  go(3);
  startSlider();

  setTimeout(()=>{
    typeLetter();
  },6000);
}

/* SLIDER */
let i=0;
function startSlider(){
  setInterval(()=>{
    let slides=document.querySelectorAll('.slide');
    slides.forEach(s=>s.classList.remove('active'));
    i=(i+1)%slides.length;
    slides[i].classList.add('active');
  },2500);
}

/* LETTER */
const msg = `I'm sorry.

I know I haven't always been perfect.

But every mistake taught me one thing —
I never want to lose you.

I promise to love you better every day.`;

function typeLetter(){
  go(4);
  let el=document.getElementById("letter");
  el.innerHTML="";
  let j=0;

  let t=setInterval(()=>{
    el.innerHTML += msg[j]==="\n"?"<br>":msg[j];
    j++;
    if(j>=msg.length){
      clearInterval(t);
      setTimeout(()=>go(5),3000);
    }
  },35);
}

/* NO ESCAPE BUTTON */
function runNo(){
  let b=document.getElementById("noBtn");
  b.style.position="absolute";
  b.style.top=Math.random()*200+"px";
  b.style.left=Math.random()*200+"px";
}

/* YES ACTION */
function yes(){
  go(6);
  heartRain();
  burstFX();
}

/* HEART RAIN */
function heartRain(){
  setInterval(()=>{
    let h=document.createElement("div");
    h.innerHTML="❤️";
    h.style.position="absolute";
    h.style.left=Math.random()*100+"vw";
    h.style.top="90vh";
    h.style.fontSize="18px";
    h.style.animation="rise 4s linear forwards";
    document.body.appendChild(h);

    setTimeout(()=>h.remove(),4000);
  },120);
}

/* FX BURST */
function burstFX(){
  setInterval(()=>{
    let s=document.createElement("div");
    s.innerHTML="✨";
    s.style.position="absolute";
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    s.style.fontSize="22px";
    document.body.appendChild(s);

    setTimeout(()=>s.remove(),1000);
  },150);
}

/* BACKGROUND PARTICLES (CANVAS) */
const canvas=document.getElementById("fxCanvas");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let dots=[];

for(let i=0;i<120;i++){
  dots.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2,
    d:Math.random()*1
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";

  dots.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();

    p.y+=p.d;

    if(p.y>canvas.height){
      p.y=0;
      p.x=Math.random()*canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();