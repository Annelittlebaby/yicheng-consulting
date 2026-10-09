(() => {
  const book=document.querySelector('#book'),pages=[...document.querySelectorAll('.page')],toc=document.querySelector('#toc');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const initialMatch=/^#page-(\d+)$/.exec(location.hash);
  let current=initialMatch?Math.max(0,Math.min(13,Number(initialMatch[1])-1)):0;
  function render(i){current=i;pages.forEach((p,j)=>p.classList.toggle('active',j===i));document.querySelector('#counter').textContent=`${String(i+1).padStart(2,'0')} / 14`;document.querySelector('#progress').style.width=`${(i+1)/14*100}%`;document.querySelector('#prev').disabled=i===0;document.querySelector('#next').disabled=i===13;history.replaceState(null,'',`#page-${i+1}`);}
  function go(i,instant=false){i=Math.max(0,Math.min(13,i));book.scrollTo({top:pages[i].offsetTop,behavior:instant||reduced?'instant':'smooth'});if(instant)render(i);}
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)render(pages.indexOf(e.target));}),{root:book,threshold:.6});
  requestAnimationFrame(()=>{go(current,true);pages.forEach(p=>observer.observe(p));});
  document.querySelector('#prev').onclick=()=>go(current-1);document.querySelector('#next').onclick=()=>go(current+1);
  document.querySelector('#menu').onclick=()=>toc.showModal();document.querySelector('#close-menu').onclick=()=>toc.close();
  document.querySelectorAll('a[href^="#page-"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();if(toc.open)toc.close();go(Number(a.hash.split('-')[1])-1);}));
  document.addEventListener('keydown',e=>{if(toc.open||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable||e.target.closest('[data-knocket]'))return;if(['ArrowDown','ArrowRight','PageDown'].includes(e.key)){e.preventDefault();go(current+1);}if(['ArrowUp','ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(current-1);}if(e.key==='Home'){e.preventDefault();go(0);}if(e.key==='End'){e.preventDefault();go(13);}});
  let start;book.addEventListener('touchstart',e=>{if(e.touches.length===1)start={x:e.touches[0].clientX,y:e.touches[0].clientY};else start=null;},{passive:true});book.addEventListener('touchend',e=>{if(!start)return;const dx=e.changedTouches[0].clientX-start.x,dy=e.changedTouches[0].clientY-start.y;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5)go(current+(dx<0?1:-1));start=null;},{passive:true});
  let timer;function toast(s){const t=document.querySelector('#toast');t.textContent=s;t.style.display='block';clearTimeout(timer);timer=setTimeout(()=>t.style.display='none',4500);}
  document.querySelector('#share').onclick=async()=>{if(location.protocol==='file:'){toast('上线后可分享公开网址。');return;}const url=location.href.split('#')[0];try{if(navigator.share)await navigator.share({title:document.title,text:'翼乘咨询 · 咨询 / 方案 / 落地',url});else{await navigator.clipboard.writeText(url);toast('宣传册链接已复制');}}catch(e){if(e.name!=='AbortError')toast('请复制浏览器地址分享。');}};
  const c=window.YICHENG_CONFIG||{};
  function safe(v){try{const u=new URL(v);return ['https:','http:'].includes(u.protocol)?u.href:null;}catch{return null;}}
  document.querySelector('#consult').onclick=async()=>{if(c.consultationUrl&&safe(c.consultationUrl)){location.href=safe(c.consultationUrl);return;}if(c.email){location.href='mailto:'+encodeURIComponent(c.email);return;}if(c.phone){location.href='tel:'+c.phone.replace(/[^+\d]/g,'');return;}if(c.wechat){try{await navigator.clipboard.writeText(c.wechat);toast('微信号已复制');}catch{toast('请添加微信：'+c.wechat);}return;}if(c.knocketEnabled){toast('请点击页面右侧的客服气泡开始沟通。');return;}toast('客服入口尚未配置完成。');};
  document.querySelector('#contact-status').textContent=c.knocketEnabled?'点击右侧客服气泡，开始业务沟通。':c.email||c.phone||c.wechat||c.consultationUrl?'欢迎联系我们，讨论具体业务场景。':'客服入口配置中';
  window.addEventListener('resize',()=>go(current,true));
})();
