if(el = document.querySelector("#wai-styles")) {
  el.remove();
}
if(el = document.querySelector("#wai-info-box")) {
  el.remove();
}
document.querySelector("body").insertAdjacentHTML("afterbegin","<style id='wai-styles'>#wai-info-box{z-index:1000;color:black;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif;border:solid 1px #ddd;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}#wai-info-box header{font-weight:700;background-color:#f2f2f2;color:#005a6a;padding:8px 16px;}#wai-info-box header a{float:right;text-decoration:none}#wai-info-box div{padding:8px 16px;}.wai-more-info{position:sticky;width:25%;margin-left:70%;bottom:5em;}</style>");

document.body.style.filter="grayscale(1)";

document.querySelector('body').insertAdjacentHTML('beforeend', '<aside id="wai-info-box" class="wai-more-info"><header>Find out more</header><div><a href="https://w3.org/wai/easy-checks/color-contrast/">Checking Color Contrast</a></div></aside>');