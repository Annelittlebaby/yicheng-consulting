(() => {
  const script=document.createElement('script');
  script.src='https://trtc.io/knocket-sdk/sdk.js?identifier=a327cd3e8b4ab083ed';
  script.async=true;
  script.onerror=()=>{document.querySelector('#contact-status').textContent='客服加载失败，请稍后刷新重试。';};
  document.body.appendChild(script);
  // SDK 使用 Shadow DOM；把气泡放到翻页栏上方，保留小屏安全区。
  let attempts=0;
  const timer=setInterval(()=>{
    const root=document.querySelector('#contact-widget-auto')?.shadowRoot;
    if(root&&!root.querySelector('#yicheng-widget-layout')){
      const style=document.createElement('style');style.id='yicheng-widget-layout';
      style.textContent='.trtc-float-card.widget-sdk-float-card{bottom:calc(82px + env(safe-area-inset-bottom))!important;right:16px!important}';
      root.appendChild(style);
    }
    const launcher=root?.querySelector('.trtc-float-card');
    if(launcher){launcher.setAttribute('aria-label','打开翼乘咨询客服');launcher.setAttribute('role','button');launcher.setAttribute('tabindex','0');launcher.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();launcher.click();}});clearInterval(timer);}
    else if(++attempts>80)clearInterval(timer);
  },250);
})();
