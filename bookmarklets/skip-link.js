if(el = document.querySelector("#wai-styles")) {
  el.remove();
}
if(el = document.querySelector("#wai-info-box")) {
  el.remove();
}

document.querySelector("body").insertAdjacentHTML("afterbegin","<style id='wai-styles'>#wai-info-box{z-index:1000;color:black;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif;border:solid 1px #ddd;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}#wai-info-box header{font-weight:700;background-color:#f2f2f2;color:#005a6a;padding:8px 16px;}#wai-info-box header a{float:right;text-decoration:none}#wai-info-box div{padding:8px 16px;}.wai-more-info{position:fixed;bottom:5em;right:5em}.wai-error{position:fixed;width:40%;top:40%;left:50%;transform:translate(-50%,-50%)}.skiplink-span{color:black;font-weight:bold;font-size:small;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif;background-color:#eed009;margin:0 2px;padding:2px;speak:literal-punctuation}</style>");

// Keep track of any errors
let error = '';

// Find the first in page link
const link = document.querySelector("a[href^='#']");
if(link) {
  // Give link its focus styling if necessary
  if( (link.offsetWidth || link.offsetHeight || link.getClientRects().length) ||
      window.getComputedStyle(link).visibility == "hidden" ||
      window.getComputedStyle(link).position == "absolute" ) {
    // Make the link visible by styling it based on it's focus styling
    let focusStyle = "";
    link.style.transition = "none";
    link.focus();

    let styles = getComputedStyle(link);
    for(var i = 0; i<styles.length; i++) {
      focusStyle += styles[i] + ":" + styles.getPropertyValue(styles[i]) + ";";
    }
    link.setAttribute("style", focusStyle);
  }

  // Check if there is a target
  const anchorHash = link.getAttribute('href').substring(1);
  const anchor = document.querySelector("*[id=" + anchorHash + "]");
  if(!anchor) {
    error = "There is no target for the skip link"
  }
  
  // Highlight link and target
  link.style.setProperty("outline", "#eed009 2px dashed");
  anchor.style.setProperty("border", "#eed009 2px dashed");
  
  // Provide some text to explain the link and anchor
  link.insertAdjacentHTML("beforebegin", '<span class="skiplink-span">Skip link connects to id="' + anchorHash + '"</span>');
  anchor.insertAdjacentHTML("afterbegin", '<span class="skiplink-span">Skip link connects here</span>');
} else {
  error = "Unable to find any in page links";
}

if(error) {
  document.querySelector('body').insertAdjacentHTML('afterbegin','<aside id="wai-info-box" tabindex="-1" class="wai-error"><header>Missing skip link?<a href="javascript:document.querySelector(\'#wai-info-box\').remove();" aria-label="dismiss">X</a></header><div>' + error + '</div></aside>');
}

document.querySelector('body').insertAdjacentHTML('beforeend', '<aside id="wai-info-box" class="wai-more-info"><header>Find out more</header><div><a href="https://w3.org/wai/easy-checks/skip-link/">Checking Skip Links</a></div></aside>');