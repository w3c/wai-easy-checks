document.querySelectorAll("#wai-styles,#wai-info-box,.required-span").forEach(function(el) {
  el.remove();  
});


document.querySelector("body").insertAdjacentHTML("afterbegin","<style id='wai-styles'>#wai-info-box{z-index:1000;color:black;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif;border:solid 1px #ddd;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}#wai-info-box header{font-weight:700;background-color:#f2f2f2;color:#005a6a;padding:8px 16px;}#wai-info-box header a{float:right;text-decoration:none}#wai-info-box div{padding:8px 16px;}.wai-more-info{position:fixed;bottom:5em;right:5em}.wai-error{position:fixed;width:40%;top:40%;left:50%;transform:translate(-50%,-50%)}.required-span{display:block;width:fit-content;color:black;font-weight:bold;font-size:small;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif;background-color:#eed009;padding:4px;speak:literal-punctuation}.required-label{outline:#eed009 2px dashed}</style>");

// Find the first in page link
const labels = Array.prototype.slice.call(document.querySelectorAll('label'));
const requiredFields = [];
const countWords = [];
if(labels) {
  for(let i = 0; i<labels.length; i++) {
    // Check if this is an implicit label
    let foundField = "";
    if(foundField = labels[i].querySelector('input,select,textarea')) {
      if(foundField.required || labels[i].innerText.search(/\*/)) {
        requiredFields.push({'labelText': labels[i].innerText, 'label': labels[i], 'field': foundField});
      }
    }
    // Check if this label has an associated field
    else if(labels[i].getAttribute('for')) {
      foundField = document.getElementById(labels[i].getAttribute('for'));
      if(foundField.required || (labels[i].innerText.search(/\*/) >= 0)) {
        requiredFields.push({'labelText': labels[i].innerText, 'label': labels[i], 'field': foundField});
      }
    }
    
    // Count up instances of words across all the labels
    let words = [...labels[i].innerText.matchAll(/\w{2,}/g)];
    words.forEach(word => {
      countWords[word[0]] ? countWords[word[0]]++ : countWords[word[0]] = 1;
    })
  }
  
  // Find labels that contain words repeated two or more times
  for(let word in countWords) {
    if(countWords[word]>2) {
      // Possible required field marker
      let matches = labels.filter(function(element) {
        return element.textContent.search(word) >= 0;
      });
      
      if(matches.length>0) {
        for(let i=0; i<matches.length; i++) {
          if(!requiredFields[matches[i].innerText]) {
            requiredFields.push({'labelText': matches[i].innerText, 'label': matches[i], 'requiredText': word});
          }
        }
      }
    }
  }
  
  // Mark labels for required fields
  for(let i=0; i<requiredFields.length; i++) {
    let required = requiredFields[i];
    if(required['requiredText']) {
      required['label'].classList.add('required-label');
      required['label'].insertAdjacentHTML("afterbegin", "<span class='required-span'>Correctly marked with '" + required['requiredText'] + "'?</span>");
    } else {
      required['label'].classList.add('required-label');
      required['label'].insertAdjacentHTML("afterbegin", "<span class='required-span'>Required field</span>");        
    }
  }
}

document.querySelector('body').insertAdjacentHTML('beforeend', '<aside id="wai-info-box" class="wai-more-info"><header>Find out more<a href=javascript:document.querySelectorAll("#wai-styles,#wai-info-box,.required-span").forEach(function(el){el.remove()}); aria-label=dismiss>X</a></header><div><a href="https://w3.org/wai/easy-checks/required-fields/">Checking Required Fields</a></div></aside>');