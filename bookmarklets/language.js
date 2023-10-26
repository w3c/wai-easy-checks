if(el = document.querySelector("#language-check-styles")) {
  el.remove();
}
if(el = document.querySelector("#language-check-message")) {
  el.remove();
}
document.querySelector("body").insertAdjacentHTML("afterbegin","<style id='language-check-styles'>#language-check-message{position:fixed;width:40%;top:40%;left:50%;transform:translate(-50%,-50%);z-index:1000;color:black;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif}aside{border:solid 1px #ddd;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}#language-check-message header{font-weight:700;background-color:#f2f2f2;color:#005a6a;padding:8px 16px;}#language-check-message header a{float:right;text-decoration:none}#language-check-message div{padding:8px 16px;}#language-message div span{font-weight:500;}</style>");

let userLang = navigator.language || navigator.userLanguage;
let languageNames = new Intl.DisplayNames([userLang], {type: "language"}); 
var message = "";
let pageLang = document.documentElement.lang || document.getElementsByTagName('html')[0].getAttribute('xml:lang');
if(pageLang) {
  message += "Page langage is: <span>" + pageLang + " (" + languageNames.of(pageLang) + ")</span>";
} else {
  message += "Page langage is not specified" 
}
document.querySelector('body').insertAdjacentHTML('afterbegin','<aside id="language-check-message" tabindex="-1"><header>Page Language<a href="javascript:document.querySelector(\'#language-check-message\').remove();" aria-label="dismiss">X</a></header><div>' + message + '</div></aside>');

document.getElementById("language-check-message").focus();