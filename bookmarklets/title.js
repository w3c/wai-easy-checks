if(el = document.querySelector("#title-check-styles")) {
  el.remove();
}
if(el = document.querySelector("#title-check-message")) {
  el.remove();
}
document.querySelector("body").insertAdjacentHTML("afterbegin","<style id='title-check-styles'>#title-check-message{position:fixed;width:40%;top:40%;left:50%;transform:translate(-50%,-50%);z-index:1000;color:black;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif}aside{border:solid 1px #ddd;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}#title-check-message header{font-weight:700;background-color:#f2f2f2;color:#005a6a;padding:8px 16px;}#title-check-message header a{float:right;text-decoration:none}#title-check-message div{padding:8px 16px;}#title-message div span{font-weight:500;}</style>");

var message = "";
if(document.title) {
  message += "Page title is: <span>" + document.title + "</span>";
} else {
  message += "Page title is missing" 
}
document.querySelector('body').insertAdjacentHTML('afterbegin','<aside id="title-check-message" tabindex="-1"><header>Page Title<a href="javascript:document.querySelector(\'#title-check-message\').remove();" aria-label="dismiss">X</a></header><div>' + message + '</div></aside>');

document.getElementById("title-check-message").focus();
