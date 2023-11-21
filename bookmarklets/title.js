if(el = document.querySelector("#wai-styles")) {
  el.remove();
}
if(el = document.querySelector("#wai-info-box")) {
  el.remove();
}
document.querySelector("body").insertAdjacentHTML("afterbegin","<style id='wai-styles'>#wai-info-box{position:fixed;width:40%;top:40%;left:50%;transform:translate(-50%,-50%);z-index:1000;color:black;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif}aside{border:solid 1px #ddd;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}#wai-info-box header{font-weight:700;background-color:#f2f2f2;color:#005a6a;padding:8px 16px;}#wai-info-box header a{float:right;text-decoration:none}#wai-info-box div{padding:8px 16px;}#title-message div span{font-weight:500;}</style>");

var message = "";
if(document.title) {
  message += '"<span>' + document.title + '</span>';
} else {
  message += 'Page title is missing'; 
}
document.querySelector('body').insertAdjacentHTML('afterbegin','<aside id="wai-info-box" tabindex="-1"><header>Page Title<a href="javascript:document.querySelector(\'#wai-info-box\').remove();" aria-label="dismiss">X</a></header><div>' + message + '<p>Find out more about <a href="https://www.w3.org/wai/easy-checks/title/">Checking Page Title</a></div></aside>');

document.getElementById("wai-info-box").focus();
