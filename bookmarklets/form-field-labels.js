document.querySelectorAll("#wai-styles,#wai-info-box,.wai-label").forEach(el => {
  el.remove();  
});
document.querySelector("body").insertAdjacentHTML("afterbegin","<style id='wai-styles'>.wai-label{color:black;font-weight:bold;font-size:small;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif;background-color:#eed009;margin:0 2px;padding:2px;speak:literal-punctuation}.wai-good{outline:2px solid #005a6a}.wai-bad{outline:3px dashed #c0272d}label{line-height:200%}#wai-info-box{z-index:1000;color:black;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif;border:solid 1px #ddd;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}#wai-info-box header{font-weight:700;background-color:#f2f2f2;color:#005a6a;padding:8px 16px}#wai-info-box header a{float:right;text-decoration:none}#wai-info-box div{padding:8px 16px}.wai-more-info{position:fixed;bottom:5em;right:5em}</style>");

// Go through input elements and check for lables
for(let input of document.querySelectorAll('input, textarea, select')) {
  if(!input.getAttribute('type').match(/hidden|button|submit|reset/)) {
    let label = document.querySelector('label[for="' + input.getAttribute('id') + '"]');

    // Check to see if there is an implicit label wrapping the input
    if(!label) {
      // Check for aria-labeledby
      if(input.getAttribute('aria-labeledby')) {
        let ids = input.getAttribute('aria-labeledby').split(/ +/);
        if(ids.length>=0) {
          if(!input.getAttribute('id')) {
            input.setAttribute('id',ids[0] + '-field');
          }
          input.insertAdjacentHTML('beforebegin', '<span class="wai-good"><span class="wai-label">✓ Labelled</span></span>');
          input.previousElementSibling.appendChild(input);
        
          for(let id of ids) {
            let arialabel = document.querySelector('#' + id);
            arialabel.insertAdjacentHTML("afterbegin", '<span class="wai-label">Label for ID="<a href="#' + input.getAttribute('id') + '">' + input.getAttribute('id') + '</a>"</span>');
            arialabel.classList.add('wai-good');
          }
        }
      } else
      // Check for aria-label
      if(input.getAttribute('aria-label')) {
        input.insertAdjacentHTML('beforebegin', '<span class="wai-good"><span class="wai-label">! Labelled (using ARIA)</span></span>');
        input.previousElementSibling.appendChild(input);
      } else {
        if(input.parentElement.tagName == "LABEL") {
          // Explicit wrapped label
          input.parentElement.classList.add('wai-good');
          input.parentElement.insertAdjacentHTML('afterbegin', '<span class="wai-label">✓ Labelled</span>');
        } else {
          if(input.getAttribute('id')) {
            // No parent label and no id
            input.insertAdjacentHTML('beforebegin', '<span class="wai-bad"><span class="wai-label">✗ Missing label (No matching label for ID="' + input.getAttribute('id') + '" found)</span></span>');
          } else {
            // No id at all
            input.insertAdjacentHTML('beforebegin', '<span class="wai-bad"><span class="wai-label">✗ Missing label</span></span>');
          }
          input.previousElementSibling.appendChild(input);
        }
      }
    } else {
      // Explicit label found
      input.insertAdjacentHTML('beforebegin', '<span class="wai-good"><span class="wai-label">✓ Labelled</span></span>');
      input.previousElementSibling.appendChild(input);
      
      // Add a link from the label to the input
      label.insertAdjacentHTML("afterbegin", '<span class="wai-label">Label for field with ID="<a href="#' + label.getAttribute('for') + '">' + label.getAttribute('for') + '</a>"</span>');
      label.classList.add('wai-good');
    }
  }
}

// Find labels with incorrect 'for' attributes
for(let label of document.querySelectorAll('label')) {
  if(label.getAttribute('for') && !document.querySelector('#' + label.getAttribute('for'))) {
    label.insertAdjacentHTML("afterbegin", '<span class="wai-label">Label with no matching field with ID="' + label.getAttribute('for') + '"</span>');
    label.classList.add('wai-bad');
  }
}

document.querySelector('body').insertAdjacentHTML('beforeend', '<aside id="wai-info-box" class="wai-more-info"><header>Find out more<a href=javascript:document.querySelectorAll("#wai-styles,#wai-info-box,.wai-label").forEach(function(el){el.remove()}); aria-label=dismiss>X</a></header><div><a href="https://w3.org/wai/test-evaluate/easy-checks/form-field-labels/">Checking Field Labels</a></div></aside>');