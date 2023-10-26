for(const el of document.querySelectorAll('a[href],button,select,input:not([type="hidden"]),textarea,summary,details,area,[tabindex],[contenteditable]:not([contenteditable="false"])')) {
  let focusStyle = "";
  el.style.transition = "none";
  el.focus();
  
  let styles = getComputedStyle(el);
  for(var i = 0; i<styles.length; i++) {
    focusStyle += styles[i] + ":" + styles.getPropertyValue(styles[i]) + ";";
  }
  el.setAttribute("style", focusStyle);
}