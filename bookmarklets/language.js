document.querySelectorAll("#wai-styles,#wai-info-box").forEach(el => {
  el.remove();  
});

document.querySelector("body").insertAdjacentHTML("afterbegin","<style id='wai-styles'>#wai-info-box{position:fixed;width:40%;top:40%;left:50%;transform:translate(-50%,-50%);z-index:1000;color:black;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif}#wai-info-box{border:solid 1px #ddd;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}#wai-info-box header{font-weight:700;background-color:#f2f2f2;color:#005a6a;padding:8px 16px;}#wai-info-box header a{float:right;text-decoration:none}#wai-info-box div{padding:8px 16px;}#wai-info-box div span{font-weight:700;}</style>");

let userLang = navigator.language || navigator.userLanguage;
let languageNames = new Intl.DisplayNames([userLang], {type: "language"}); 
var message = "";
let pageLang = document.documentElement.lang || document.getElementsByTagName('html')[0].getAttribute('xml:lang');
if(pageLang) {
  message += '<span>' + pageLang + " (" + languageNames.of(pageLang) + ')</span>';
} else {
  message += 'Page language is not specified';
}
document.querySelector('body').insertAdjacentHTML('beforeend', '<aside id="wai-info-box" tabindex="-1"><header>Page Language<a href=javascript:document.querySelectorAll("#wai-styles,#wai-info-box").forEach(function(el){el.remove()}); aria-label=dismiss>X</a></header><div>' + message + '<p>Find out more about <a href="https://www.w3.org/wai/easy-checks/language/">Checking Page Language</a></div></aside>');

document.getElementById("wai-info-box").focus();