function load() {
  container.style.height = "0px";
  container.style.height = doc.scrollingElement.scrollHeight + "px";
}
function render() {
  var absoluteMaximum = 0;
  var childNodes = document.querySelectorAll('h1,h2,h3,h4,h5,h6,h7,[role="heading"]');
  var instance = [];
  var i = 0;
  for (; i < childNodes.length; i++) {
    var node = childNodes[i];
    var visible = isVisible(childNodes[i]);
    var value = parseInt("heading" == node.getAttribute("role") && node.getAttribute("aria-level") || node.nodeName.substr(1));
    if (visible) {
      var wrong = value > absoluteMaximum && value !== absoluteMaximum + 1;
      absoluteMaximum = value;
    } else {
      wrong = false;
    }
    instance.push({
      visible : visible,
      visuallyhidden : visible && callback(node),
      wrong : wrong,
      level : value,
      el : node
    });
  }
  return instance;
}
function check(e, key) {
  var tasks = 0;
  var i = 0;
  for (; i < e.length; i++) {
    if (e[i][key]) {
      tasks++;
    }
  }
  return tasks;
}
function parse(options) {
  var output = "";
  var i = 0;
  for (; i < options.length; i++) {
    var data = options[i];
    var el = data.el;
    output = output + '<li class="';
    output = output + (data.wrong ? "wrong-level" : "correct-level");
    output = output + (data.visible ? "" : " hidden");
    output = output + (data.visuallyhidden ? " visuallyhidden" : "");
    output = output + ('" style="margin-left: ' + data.level + 'em;">');
    output = output + ('<a href="#' + i + '" target="_top">');
    output = output + ('<span class="level" data-level="' + data.level + '">' + data.level + '</span> ');
    output = output + ('<span class="text">' + htmlEntities(el.textContent.replace(/\s+/g, " ")) );
		output = output + (data.wrong ? " (skipped level)" : "");
		output = output + (data.visible ? "" : " (hidden)");
		output = output + "</span>";
    output = output + "</a>";
    output = output + "</li>";
  }
  return '<ul id="headings">' + output + "</ul>";
}
function htmlEntities(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function isVisible(elem) {
  var style = window.getComputedStyle(elem);
  var i = false;
  for (; elem;) {
    if ("none" === style.display) {
      return false;
    }
    if (!i) {
      if ("hidden" === style.visibility) {
        return false;
      }
      if ("visible" === style.visibility) {
        i = true;
      }
    }
    if ("true" === elem.getAttribute("aria-hidden")) {
      return false;
    }
    elem = elem.parentElement;
    try {
      style = window.getComputedStyle(elem);
    } catch (e) {
      return true;
    }
  }
  return true;
}
function callback(node) {
  var t = node.getBoundingClientRect(node);
  if ("absolute" === window.getComputedStyle(node).position) {
    if (t.width <= 1 && t.height <= 1) {
      return true;
    }
    if (t.right <= 0) {
      return true;
    }
  }
}
function init(element, animate) {
  if (!animate) {
    if (element.scrollIntoViewIfNeeded) {
      element.scrollIntoViewIfNeeded();
    } else {
      if (element.scrollIntoView) {
        element.scrollIntoView();
      }
    }
  }
  setTimeout(function() {
    var rect = element.getBoundingClientRect();
    var bounding = element.parentElement;
    for (; !rect.height && !rect.width && !rect.left && !rect.top && bounding;) {
      rect = bounding.getBoundingClientRect();
      false;
      bounding = bounding.parentElement;
    }
    if (bounding) {
      (rect = {
        left : rect.left,
        top : rect.top,
        bottom : rect.bottom,
        right : rect.right
      }).left = Math.min(window.innerWidth, rect.left);
      rect.right = Math.max(0, rect.right);
      rect.top = Math.min(window.innerHeight, rect.top);
      rect.bottom = Math.max(0, rect.bottom);
      if (!document.getElementById(imgElement.id)) {
        document.body.appendChild(imgElement);
      }
      imgElement.style.left = rect.left - 10 + "px";
      imgElement.style.width = rect.right - rect.left + 20 + "px";
      imgElement.style.top = rect.top - 10 + "px";
      imgElement.style.height = rect.bottom - rect.top + 20 + "px";
      imgElement.style.display = "block";
    }
  }, 100);
}
function register(t) {
  var init = function() {
    if (t.checked) {
      initFileListMenu();
    } else {
      handleInspectToggle();
    }
  };
  init();
  t.addEventListener("click", init);
}
function hide(time) {
  var args = doc.querySelectorAll("#headings a");
  var i = args.length - 1;
  for (; i >= 0; i--) {
    if (args[i] === time) {
      args[i].classList.add("is-active");
    } else {
      args[i].classList.remove("is-active");
    }
  }
}
function remove(evt) {
  var liTag = evt.target;
  var parentNode = document.body.querySelectorAll("*");
  var o = false;
  var parentFieldName = parentNode.length - 1;
  for (; parentFieldName >= 0; parentFieldName--) {
    var parentOfParent = parentNode[parentFieldName];
    if (o) {
      var i = result.length - 1;
      for (; i >= 0; i--) {
        if (result[i].el === parentOfParent && result[i].visible) {
          return init(result[i].el, true), void hide(doc.querySelector('#headings a[href="#' + i + '"]'));
        }
      }
    } else {
      if (parentOfParent === liTag) {
        o = true;
        parentFieldName++;
      }
    }
  }
  hide(null);
}
function initFileListMenu() {
  document.body.addEventListener("mouseover", remove);
}
function handleInspectToggle() {
  document.body.removeEventListener("mouseover", remove);
}
var containerId = "ec-heading-bookmarklet";
var shrinkChildStyle = "position:fixed;top:0;right:0;max-height:100%;box-shadow:0 0 80px rgba(0,0,0,0.3);width:20%;min-width:320px;max-width:450px;z-index:100001";
var imgElement = document.createElement("DIV");
imgElement.id = "h1-a11y-highlighterelement";
imgElement.style.cssText = "pointer-events:none;position:fixed;border:1px dashed #eed009;box-shadow: 0 0 9px 2px rgba(238,208,9,0.75);display:none;z-index: 100000;transition:all 200ms";
var container = document.getElementById(containerId);
if (container) {
  document.body.removeChild(container);
}
(container = document.createElement("DIV")).id = containerId;
container.style.cssText = shrinkChildStyle;
var iframe = document.createElement("IFRAME");
iframe.id = "wai-headers-check";
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.borderWidth = "0";
var doc;
var result = render();
container.appendChild(iframe);
iframe.onload = function() {
  function f(e, id) {
    var target = doc.getElementById(e);
    var prettyPrintButton = doc.querySelector(".result");
    if (target) {
      var render = function(matchesLookup) {
        if (target.checked) {
          prettyPrintButton.classList.add(id);
        } else {
          prettyPrintButton.classList.remove(id);
        }
        if (matchesLookup) {
          load();
        }
      };
      target.addEventListener("change", render, false);
      target.addEventListener("click", render, false);
      render();
    }
  }
  iframe.onload = function() {
  };
  (doc = iframe.contentWindow.document).open();
  doc.write('<html> <head> <meta name="viewport" content="width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes"><style>*{margin:0;padding:0;border:0}body{font:14px/1.6 sans;font-family:Noto Sans,Trebuchet MS,Helvetica Neue,Arial,sans-serif;color:#1d1d1d;background:rgba(255,255,255,0.95);}main{white-space:nowrap;overflow-x:hidden;text-overflow: ellipsis}ul{margin:0 0 0 -10px;padding:0}li{color:#1d1d1d;list-style:none;margin-left:20px;display:-webkit-box;display:-ms-flexbox;display:flex}main a{color:inherit;text-decoration:none;display:inline-block;max-width:30em;overflow:hidden;text-overflow:ellipsis;padding:2px 4px 2px 25px;position:relative;line-height: 1.3;border-radius:3px}main a>.level{display:inline-block;background-color:#003366;color:#FAFAFC;font-size:85%;font-weight:bold;width:2.7ex;height:2.7ex;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:2px;top:2px;padding-top:1px}li.hidden{color:black;text-decoration:line-through;opacity:0.5}.result:not(.show-hidden) li.hidden{display:none}.result.mark-visuallyhidden li.visuallyhidden .level:before{color:inherit}.result.mark-visuallyhidden li.visuallyhidden .level{border:1px dashed;background:white}.result.mark-visuallyhidden li.visuallyhidden:after{content:"(visually hidden)"}li.wrong-level{color:#AF3A37}a.is-active{-webkit-box-shadow:0 0 5px 1px #3CBEFF;box-shadow:0 0 5px 1px #3CBEFF}main a:hover{background-color:#003366}main a:hover>.text{color:#FAFAFC}main a:hover>.level{background-color:transparent}fieldset,main{padding: 5px 15px 15px 15px;margin-bottom:1em;border-bottom:1px solid #eee}footer{padding: 0 15px 15px 15px}legend{margin-right:1em;font-weight:bold}@media(min-width:340px){legend{float:left}}.options{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.options .input{margin-right:2em}.count{background:#ddd;border-radius:4px;padding:1px 3px}.tooltip{font-family:Trebuchet MS,Helvetica Neue,Arial,sans-serif;position:relative}.tooltip:before{content:\'\u2139\ufe0f\'}.tooltip:focus:after,.tooltip:hover:after{content:attr(title);position:absolute;background:white;padding:4px 10px;top:70%;left:70%;width:10em;-webkit-box-shadow:0 2px 20px rgba(0,0,0,0.3);box-shadow:0 2px 20px rgba(0,0,0,0.3);white-space:normal;border-radius:8px;border-top-left-radius:0;z-index:1;pointer-events:none}.button-close{position:absolute;top:15px;right:15px;padding:5px 10px;border-radius:5px;border:1px solid transparent;font-size:inherit;color:white;background-color:#003366;cursor:pointer}.button-close:hover{color:white;background-color:#003366}#wai-info-box header{font-weight:700;background-color:#f2f2f2;color:#005a6a;padding:8px 16px;}#wai-info-box header a{float:right;text-decoration:none}</style></head><body><aside id="wai-info-box" tabindex="-1"><header>Page headings<a href="" data-action="close" aria-label=\'dismiss\'>X</a></header><fieldset><legend>Options</legend><div class="options"><div class="input"><input type="checkbox" name="options" id="o-hidden"> <label for="o-hidden">Show hidden <span class="count" id="o-hidden-count"></span> <span class="tooltip" title="also hidden for screenreaders" tabindex="0"></span></label> </div> <div class="input"> <input type="checkbox" name="options" id="o-visuallyhidden"> <label for="o-visuallyhidden">Mark visually hidden <span class="count" id="o-visuallyhidden-count"></span> <span class="tooltip" title="only visible for screenreaders" tabindex="0"></span></label> </div> <div class="input"> <input type="checkbox" name="options" id="o-highlight"> <label for="o-highlight">Hover-Highlight <span class="tooltip" title="Highlight the corresponding heading when hovering over elements of the page" tabindex="0"></span></label></div></fieldset></div><main id="result" class="result"></main><footer>Find out more about <a href="/wai/easy-checks/headings/">Checking Headings</a></footer></body></html>');
  doc.close();
  var openLoginScreenBtn = doc.querySelector('[data-action="close"]');
  if (openLoginScreenBtn) {
    openLoginScreenBtn.addEventListener("click", function(canCreateDiscussions) {
      handleInspectToggle();
      window.removeEventListener("resize", load);
      document.body.removeChild(container);
      if (document.getElementById(imgElement.id)) {
        document.body.removeChild(imgElement);
      }
    });
  }
  var node = doc.querySelector("#result");
  if (node) {
    node.innerHTML = parse(result);
  }
  if (node = doc.querySelector("#o-hidden-count")) {
    node.innerText = result.length - check(result, "visible");
  }
  if (node = doc.querySelector("#o-visuallyhidden-count")) {
    node.innerText = check(result, "visuallyhidden");
  }
  f("o-hidden", "show-hidden");
  f("o-visuallyhidden", "mark-visuallyhidden");
  register(doc.getElementById("o-highlight"));
  load();
  doc.addEventListener("click", function(e) {
    var t;
    if ("A" === e.target.nodeName.toUpperCase() ? t = e.target : e.target.parentElement && "A" === e.target.parentElement.nodeName.toUpperCase() && (t = e.target.parentElement), t) {
      var j = parseInt(t.getAttribute("href").substr(1), 10);
      init(result[j].el);
    }
  }, false);
  window.addEventListener("resize", load);
};
document.body.appendChild(container);
iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
iframeDoc.getElementById("wai-info-box").focus();