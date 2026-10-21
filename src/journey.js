const root=document.documentElement;
const chapters=[...document.querySelectorAll('.chapter')];
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
root.classList.add('journey-ready');
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
let positions=[],active=-1,raf=false,galleryDistance=0;
const track=document.querySelector('.work-track');
const work=document.querySelector('#work');
let currentBelief=-1;
function layout(preserve=false){
 const previous=positions[active];
 const fraction=previous?clamp((scrollY-previous.top)/previous.height):0;
 chapters.forEach(el=>{el.style.setProperty('--length',el.dataset.length);el.style.setProperty('--chapter-color',el.dataset.color)});
 positions=chapters.map(el=>({top:el.offsetTop,height:el.offsetHeight}));
 galleryDistance=Math.max(0,track.scrollWidth-innerWidth+25);
 if(preserve&&previous&&!reduced.matches)window.scrollTo({top:positions[active].top+fraction*positions[active].height,behavior:'instant'});
 update();
}
function update(){
 const y=scrollY;
 let index=0;
 positions.forEach((p,i)=>{if(y>=p.top-2)index=i});
 const chapter=chapters[index],pos=positions[index];
 const p=clamp((y-pos.top)/Math.max(1,pos.height));
 if(index!==active){
  active=index;
  chapters.forEach((el,i)=>{el.classList.toggle('active',i===index);if(!reduced.matches){el.inert=i!==index;el.setAttribute('aria-hidden',String(i!==index))}else{el.inert=false;el.removeAttribute('aria-hidden')}});
  document.body.style.setProperty('--scene-bg',chapter.dataset.color);
  document.body.style.setProperty('--scene-ink',chapter.dataset.ink);
  document.querySelectorAll('.chapter-ruler a,.journey-controls nav a').forEach(a=>{const selected=a.hash==='#'+chapter.id;a.classList.toggle('active',selected);if(selected)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});
 }
 chapter.style.setProperty('--p',p.toFixed(4));
 if(chapter.id==='systems')chapter.style.setProperty('--system',clamp((p-.1)*2.8).toFixed(4));
 if(chapter.id==='beliefs'){
  const b=Math.min(2,Math.floor(p*3));
  if(b!==currentBelief){currentBelief=b;document.querySelectorAll('.belief-panel').forEach((el,i)=>{el.classList.toggle('current',i===b);if(!reduced.matches){el.inert=i!==b;el.setAttribute('aria-hidden',String(i!==b))}else{el.inert=false;el.removeAttribute('aria-hidden')}});document.querySelector('.belief-count').textContent=String(b+1).padStart(2,'0');}
 }
 if(chapter.id==='work'){
  const progress=clamp(p/.86);
  track.style.setProperty('--gallery-x',(-galleryDistance*progress).toFixed(2));
  document.querySelector('.gallery-current').textContent=String(Math.min(6,Math.max(1,Math.ceil(progress*6)))).padStart(2,'0');
 }
 if(chapter.id==='contact')chapter.style.setProperty('--close',clamp(p*5).toFixed(4));
 document.body.style.setProperty('--scroll-progress',clamp(y/(document.documentElement.scrollHeight-innerHeight)).toFixed(5));
 raf=false;
}
addEventListener('scroll',()=>{if(!raf){requestAnimationFrame(update);raf=true}},{passive:true});
addEventListener('resize',()=>layout(true));
reduced.addEventListener('change',()=>{active=-1;currentBelief=-1;layout()});
document.fonts.ready.then(()=>layout());layout();
// Give the display lettering a small, hand-set rhythm without splitting its accessible name.
document.querySelectorAll('.cutout-title').forEach(el=>{
 el.setAttribute('aria-label',[...el.childNodes].map(n=>n.nodeName==='BR'?' ':n.textContent).join('').trim().replace(/\s+/g,' '));
 function letters(parent){[...parent.childNodes].forEach(n=>{if(n.nodeType===3){const fragment=document.createDocumentFragment();for(const c of n.textContent){const s=document.createElement('span');s.className='cut-letter';s.textContent=c===' '?'\u00a0':c;s.setAttribute('aria-hidden','true');fragment.append(s)}n.replaceWith(fragment)}else if(n.nodeType===1&&n.tagName!=='BR')letters(n)})}
 letters(el);
});
// Accessible project overlays preserve the gallery's scroll position.
const projectIndex=JSON.parse(document.querySelector('#project-index').textContent);
const dialog=document.querySelector('.project-dialog');
const frame=document.querySelector('.project-frame');
let openProject=-1,returnFocus=null,restoringFocus=false;
function openCase(slug,push=true){
 const i=projectIndex.findIndex(p=>p.slug===slug);if(i<0)return;
 if(!dialog.open){returnFocus=document.querySelector('[data-project="'+slug+'"]')||document.activeElement;dialog.showModal();document.body.style.overflow='hidden'}
 openProject=i;
 const project=projectIndex[i];document.querySelector('#dialog-title').textContent=project.title;
 frame.title=project.title+' case study';frame.src='/work/'+project.slug+'/?embed=1';
 if(push)history.pushState({project:slug},'', '#work/'+slug);
 document.querySelector('.close-project').focus();
}
function closeCase(changeHistory=true){if(!dialog.open)return;dialog.close();frame.removeAttribute('src');document.body.style.overflow='';if(changeHistory)history.replaceState(null,'','#work');restoringFocus=true;returnFocus?.focus({preventScroll:true});restoringFocus=false;}
function syncRoute(){const match=location.hash.match(/^#work\/(.+)$/);if(match)openCase(match[1],false);else closeCase(false);}
document.querySelectorAll('[data-project]').forEach(a=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();openCase(a.dataset.project)}));
document.querySelector('.close-project').addEventListener('click',()=>closeCase());
dialog.addEventListener('cancel',e=>{e.preventDefault();closeCase()});
document.querySelector('.prev-project').addEventListener('click',()=>openCase(projectIndex[(openProject+projectIndex.length-1)%projectIndex.length].slug));
document.querySelector('.next-project-button').addEventListener('click',()=>openCase(projectIndex[(openProject+1)%projectIndex.length].slug));
addEventListener('popstate',syncRoute);
syncRoute();
if(location.hash.startsWith('#work/')){work.scrollIntoView({behavior:'instant'});layout()}
// Opt-in ambient sound, generated locally. No audio plays before a user gesture.
let audio=null,master=null,oscillators=[];
const sound=document.querySelector('.sound-toggle');
function stopSound(){oscillators.forEach(o=>{try{o.stop()}catch{}});oscillators=[];if(audio){audio.close();audio=null}sound.setAttribute('aria-pressed','false');sound.setAttribute('aria-label','Sound: turn ambient audio on');sound.querySelector('.sound-label').textContent='SOUND OFF'}
sound.addEventListener('click',async()=>{
 if(audio){stopSound();return}
 try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw Error('unsupported');audio=new AC();master=audio.createGain();master.gain.value=.018;master.connect(audio.destination);[130.81,196,261.63].forEach((freq,i)=>{const osc=audio.createOscillator();const gain=audio.createGain();osc.type='sine';osc.frequency.value=freq;gain.gain.value=i===0?.55:.22;osc.connect(gain).connect(master);osc.start();oscillators.push(osc)});await audio.resume();sound.setAttribute('aria-pressed','true');sound.setAttribute('aria-label','Sound: turn ambient audio off');sound.querySelector('.sound-label').textContent='SOUND ON'}catch{stopSound();toast('Ambient audio isn’t available in this browser.')}
});
document.addEventListener('visibilitychange',()=>{if(audio){if(document.hidden)audio.suspend();else audio.resume()}});
function toast(message){const el=document.querySelector('.journey-toast');el.textContent=message;el.classList.add('show');clearTimeout(window.journeyToast);window.journeyToast=setTimeout(()=>el.classList.remove('show'),3000)}
document.querySelector('.journey-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('abhisheknahire89@gmail.com');toast('Email copied. Let’s start a conversation.')}catch{toast('abhisheknahire89@gmail.com')}});

// Keep keyboard-focused cards in view while retaining pointer scroll positions.
document.querySelectorAll('[data-project]').forEach(link=>link.addEventListener('focus',()=>{
 if(reduced.matches||dialog.open||restoringFocus||!link.matches(':focus-visible'))return;
 const card=link.closest('.journey-project');
 const progress=clamp((card.offsetLeft-innerWidth*.06)/Math.max(1,galleryDistance));
 const position=positions[chapters.indexOf(work)];
 window.scrollTo({top:position.top+progress*.86*position.height,behavior:'instant'});
}));
