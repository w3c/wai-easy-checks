for(const el of document.querySelectorAll("span")) {
  if(el.matches(".altSpan, .inputSpan")) {
    el.remove();
  }
}
if(el = document.querySelector("#img-check-styles")) {
  el.remove();
}
document.querySelector("body").insertAdjacentHTML("afterbegin","<style id='img-check-styles'>.altSpan,.inputSpan,#failure,#success {color:black;font-weight:bold;font-size:small;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif;background-color:#eed009;margin:0 2px;padding:2px;speak:literal-punctuation}#success{position:absolute;width:0;height:0;clip:rect(0,0,0,0);})</style>");
document.querySelectorAll("img, [role=img]").forEach(function(el) {
  var message = "";
  if (el.hasAttribute('role')) {
    message += "Role=\"" + el.getAttribute('role') + "\"<br>";
  }
  if (el.hasAttribute('aria-label')) {
    message += "❓aria-label=\"" + el.getAttribute('aria-label') + "\"<br>";
  }
  if (el.hasAttribute('aria-describedby')) {
    message += "Described by ID(s)=";
    var describedbyValue = el.getAttribute('aria-describedby');
    var describedbyArray = describedbyValue.split(' ');
    for (i = 0; i < describedbyArray.length; i++) {
      var describedby = document.querySelector('[id="' + describedbyArray[i] + '"]');
      message+= "<a href=\"#" + describedbyArray[i] + "\">" + describedbyArray[i] + "</a>";
      if(i < describedbyArray.length - 1 ) {
        message += ", ";
      }
      if(describedby) {
        describedby.style.setProperty("outline", "orange 2px dashed");
        describedby.insertAdjacentHTML("afterbegin", "<span class=\"inputSpan\">id=\"" + describedbyArray[i] + "\"</span>");
      }
    }
  }
  if (el.hasAttribute('aria-labelledby')) {
    message += "Labelled by ID(s)=";
    var labelledbyValue = el.getAttribute('aria-labelledby');
    var labelledbyArray = labelledbyValue.split(' ');
    for (i = 0; i < labelledbyArray.length; i++) {
      var labelledby = document.querySelector('[id="' + labelledbyArray[i] + '"]');
      message+= "<a href=\"#" + labelledbyArray[i] + "\">" + labelledbyArray[i] + "</a>";
      if(i < labelledbyArray.length - 1 ) {
        message += ", ";
      }
      if(labelledby) {
        labelledby.style.setProperty("outline", "orange 2px dashed");
        labelledby.insertAdjacentHTML("afterbegin", "<span class=\"inputSpan\">id=\"" + labelledbyArray[i] + "\"</span>");
      }
    }
  }
  el.style.setProperty("outline", "#00818d 5px solid");
  el.style.setProperty("padding", "2px;");
  if (!el.hasAttribute('alt')) {
    if (el.parentNode.nodeName == "A") {
      if (!el.hasAttribute('aria-label')) {
        if (!el.hasAttribute('aria-labelledby')) {
          if (!el.hasAttribute('aria-describedby')) {
            if (!el.hasAttribute('title')) {
              message += "<span style=\"border-bottom:2px solid #003366;\">❌ Link image missing alt text</span>";
            }
          }
        }
      }
    } else if (!el.hasAttribute('aria-label')) {
      if (!el.hasAttribute('aria-labelledby')) {
        if (!el.hasAttribute('aria-describedby')) {
          if (!el.hasAttribute('title')) {
            el.style.setProperty("outline", "#c0272d 5px solid");
            el.style.setProperty("padding", "2px;");
            message += "❌ Image missing alt text";
          }
        }
      }
    }
  } else {
    el.style.setProperty("outline", "#00818d 5px solid");
    el.style.setProperty("padding", "2px;");
    if (el.parentNode.nodeName == "A") {
      if (el.getAttribute('alt') == "") {
        message += "<span style=\"border-bottom:2px solid #003366;\">❓Empty link alt text. Ok?</span>";
      } else {
        message += "<span style=\"border-bottom:2px solid #003366;\">✓ Link alt text=\"" + el.getAttribute('alt') + "\". Suitable?</span>";
      }
    } else {
      message += "✓ Alt text=\"" + el.getAttribute('alt') + "\". Suitable?";
    }
  }
  if (el.hasAttribute('title')) {
    message += "❓Image has title=\"" + el.getAttribute('title') + "\"";
  }
  if (el.hasAttribute('longdesc')) {
    message += "❓Image linked to a long description=\"" + el.getAttribute('longdesc') + "\"";
  }
  
  if(message) {
    el.insertAdjacentHTML("afterend", "<span class=\"altSpan\">" + message + "</span>");
  }
});

if (!document.querySelectorAll('img, [role=img]').length) {
  document.querySelector('body').insertAdjacentHTML('afterbegin','<strong id="failure" role="alert">No Images Found on Page: ' + document.title + '</strong>');
  setTimeout(function() {
    document.querySelector('#failure').remove();
  }, 6000);
} else {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<div id="success" role="alert">Success! Images Found on Page: ' + document.title + '</div>');
  setTimeout(function() {
    document.querySelector('#success').remove();
  }, 3000);
}