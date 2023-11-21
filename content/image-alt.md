---
title: "Image Alternative Text - Easy Checks"
permalink: /test-evaluate/easy-checks/image-alt/
ref: /test-evaluate/easy-checks/image-alt/
nav_title: "Image Alternative Text"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/image-alt.md
---

## At a Glance

@@ side by side images of the same page - left with an image on the page, right with the image replaced with it's alt-text

Image alternative text is the text alternative for an image.

## What is Image Alternative Text?

Image alternative text (“alt text”) is a short description that conveys the purpose of an image. 

## Who depends on Image Alternative Text?

The alternative text for an image is essential for many people to help them understand the information on a page including:
* People who can't see the image or see it clearly due to blindness or low vision
* People who might be having the page read to them as result of learning disabilities or low literacy
* People who might have very low internet connection speeds, or low download limits, and turn images off

## Checking Image Alternative Text

### Checking this page

This is just for practice. Also, you can see what the check will look like on an accessible page.

Simply click on the link below:

{::nomarkdown}
<p>
  <a class="button active" href="javascript:void%20function(){for(const%20a%20of%20document.querySelectorAll(%22span%22))a.matches(%22.altSpan,%20.inputSpan%22)%26%26a.remove();(el=document.querySelector(%22%23img-check-styles%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='img-check-styles'%3E.altSpan,.inputSpan,%23failure,%23success%20{color:black;font-weight:bold;font-size:small;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;background-color:%23eed009;margin:0%202px;padding:2px;speak:literal-punctuation}%23success{position:absolute;width:0;height:0;clip:rect(0,0,0,0);}%23wai-info-box{border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:fixed;z-index:1000;bottom:5em;right:5em}%3C/style%3E%22),document.querySelectorAll(%22img,%20[role=img]%22).forEach(function(a){var%20b=%22%22;if(a.hasAttribute(%22role%22)%26%26(b+=%22Role=\%22%22+a.getAttribute(%22role%22)+%22\%22%3Cbr%3E%22),a.hasAttribute(%22aria-label%22)%26%26(b+=%22\u2753aria-label=\%22%22+a.getAttribute(%22aria-label%22)+%22\%22%3Cbr%3E%22),a.hasAttribute(%22aria-describedby%22)){b+=%22Described%20by%20ID(s)=%22;var%20c=a.getAttribute(%22aria-describedby%22),d=c.split(%22%20%22);for(i=0;i%3Cd.length;i++){var%20e=document.querySelector(%22[id=\%22%22+d[i]+%22\%22]%22);b+=%22%3Ca%20href=\%22%23%22+d[i]+%22\%22%3E%22+d[i]+%22%3C/a%3E%22,i%3Cd.length-1%26%26(b+=%22,%20%22),e%26%26(e.style.setProperty(%22outline%22,%22orange%202px%20dashed%22),e.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class=\%22inputSpan\%22%3Eid=\%22%22+d[i]+%22\%22%3C/span%3E%22))}}if(a.hasAttribute(%22aria-labelledby%22)){b+=%22Labelled%20by%20ID(s)=%22;var%20f=a.getAttribute(%22aria-labelledby%22),g=f.split(%22%20%22);for(i=0;i%3Cg.length;i++){var%20h=document.querySelector(%22[id=\%22%22+g[i]+%22\%22]%22);b+=%22%3Ca%20href=\%22%23%22+g[i]+%22\%22%3E%22+g[i]+%22%3C/a%3E%22,i%3Cg.length-1%26%26(b+=%22,%20%22),h%26%26(h.style.setProperty(%22outline%22,%22orange%202px%20dashed%22),h.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class=\%22inputSpan\%22%3Eid=\%22%22+g[i]+%22\%22%3C/span%3E%22))}}a.style.setProperty(%22outline%22,%22%2300818d%205px%20solid%22),a.style.setProperty(%22padding%22,%222px;%22),a.hasAttribute(%22alt%22)%3F(a.style.setProperty(%22outline%22,%22%2300818d%205px%20solid%22),a.style.setProperty(%22padding%22,%222px;%22),b+=%22A%22==a.parentNode.nodeName%3F%22%22==a.getAttribute(%22alt%22)%3F%22%3Cspan%20style=\%22border-bottom:2px%20solid%20%23003366;\%22%3E\u2753Empty%20link%20alt%20text.%20Ok%3F%3C/span%3E%22:%22%3Cspan%20style=\%22border-bottom:2px%20solid%20%23003366;\%22%3E\u2713%20Link%20alt%20text=\%22%22+a.getAttribute(%22alt%22)+%22\%22.%20Suitable%3F%3C/span%3E%22:%22\u2713%20Alt%20text=\%22%22+a.getAttribute(%22alt%22)+%22\%22.%20Suitable%3F%22):%22A%22==a.parentNode.nodeName%3F!a.hasAttribute(%22aria-label%22)%26%26!a.hasAttribute(%22aria-labelledby%22)%26%26!a.hasAttribute(%22aria-describedby%22)%26%26!a.hasAttribute(%22title%22)%26%26(b+=%22%3Cspan%20style=\%22border-bottom:2px%20solid%20%23003366;\%22%3E\u274C%20Link%20image%20missing%20alt%20text%3C/span%3E%22):!a.hasAttribute(%22aria-label%22)%26%26!a.hasAttribute(%22aria-labelledby%22)%26%26!a.hasAttribute(%22aria-describedby%22)%26%26!a.hasAttribute(%22title%22)%26%26(a.style.setProperty(%22outline%22,%22%23c0272d%205px%20solid%22),a.style.setProperty(%22padding%22,%222px;%22),b+=%22\u274C%20Image%20missing%20alt%20text%22),a.hasAttribute(%22title%22)%26%26(b+=%22\u2753Image%20has%20title=\%22%22+a.getAttribute(%22title%22)+%22\%22%22),a.hasAttribute(%22longdesc%22)%26%26(b+=%22\u2753Image%20linked%20to%20a%20long%20description=\%22%22+a.getAttribute(%22longdesc%22)+%22\%22%22),b%26%26a.insertAdjacentHTML(%22afterend%22,%22%3Cspan%20class=\%22altSpan\%22%3E%22+b+%22%3C/span%3E%22)}),document.querySelectorAll(%22img,%20[role=img]%22).length%3F(document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Cdiv%20id=\%22success\%22%20role=\%22alert\%22%3ESuccess!%20Images%20Found%20on%20Page:%20%22+document.title+%22%3C/div%3E%22),setTimeout(function(){document.querySelector(%22%23success%22).remove()},3e3)):(document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstrong%20id=\%22failure\%22%20role=\%22alert\%22%3ENo%20Images%20Found%20on%20Page:%20%22+document.title+%22%3C/strong%3E%22),setTimeout(function(){document.querySelector(%22%23failure%22).remove()},6e3)),document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/image-alt/\%22%3EChecking%20Image%20Alternative%20Text%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Check images</a>
</p>
{:/}

### Checking other pages

To check other pages you need to add the check link as a bookmark.

1. Drag the <a class="button active" href="javascript:void%20function(){for(const%20a%20of%20document.querySelectorAll(%22span%22))a.matches(%22.altSpan,%20.inputSpan%22)%26%26a.remove();(el=document.querySelector(%22%23img-check-styles%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='img-check-styles'%3E.altSpan,.inputSpan,%23failure,%23success%20{color:black;font-weight:bold;font-size:small;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;background-color:%23eed009;margin:0%202px;padding:2px;speak:literal-punctuation}%23success{position:absolute;width:0;height:0;clip:rect(0,0,0,0);}%23wai-info-box{border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:fixed;z-index:1000;bottom:5em;right:5em}%3C/style%3E%22),document.querySelectorAll(%22img,%20[role=img]%22).forEach(function(a){var%20b=%22%22;if(a.hasAttribute(%22role%22)%26%26(b+=%22Role=\%22%22+a.getAttribute(%22role%22)+%22\%22%3Cbr%3E%22),a.hasAttribute(%22aria-label%22)%26%26(b+=%22\u2753aria-label=\%22%22+a.getAttribute(%22aria-label%22)+%22\%22%3Cbr%3E%22),a.hasAttribute(%22aria-describedby%22)){b+=%22Described%20by%20ID(s)=%22;var%20c=a.getAttribute(%22aria-describedby%22),d=c.split(%22%20%22);for(i=0;i%3Cd.length;i++){var%20e=document.querySelector(%22[id=\%22%22+d[i]+%22\%22]%22);b+=%22%3Ca%20href=\%22%23%22+d[i]+%22\%22%3E%22+d[i]+%22%3C/a%3E%22,i%3Cd.length-1%26%26(b+=%22,%20%22),e%26%26(e.style.setProperty(%22outline%22,%22orange%202px%20dashed%22),e.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class=\%22inputSpan\%22%3Eid=\%22%22+d[i]+%22\%22%3C/span%3E%22))}}if(a.hasAttribute(%22aria-labelledby%22)){b+=%22Labelled%20by%20ID(s)=%22;var%20f=a.getAttribute(%22aria-labelledby%22),g=f.split(%22%20%22);for(i=0;i%3Cg.length;i++){var%20h=document.querySelector(%22[id=\%22%22+g[i]+%22\%22]%22);b+=%22%3Ca%20href=\%22%23%22+g[i]+%22\%22%3E%22+g[i]+%22%3C/a%3E%22,i%3Cg.length-1%26%26(b+=%22,%20%22),h%26%26(h.style.setProperty(%22outline%22,%22orange%202px%20dashed%22),h.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class=\%22inputSpan\%22%3Eid=\%22%22+g[i]+%22\%22%3C/span%3E%22))}}a.style.setProperty(%22outline%22,%22%2300818d%205px%20solid%22),a.style.setProperty(%22padding%22,%222px;%22),a.hasAttribute(%22alt%22)%3F(a.style.setProperty(%22outline%22,%22%2300818d%205px%20solid%22),a.style.setProperty(%22padding%22,%222px;%22),b+=%22A%22==a.parentNode.nodeName%3F%22%22==a.getAttribute(%22alt%22)%3F%22%3Cspan%20style=\%22border-bottom:2px%20solid%20%23003366;\%22%3E\u2753Empty%20link%20alt%20text.%20Ok%3F%3C/span%3E%22:%22%3Cspan%20style=\%22border-bottom:2px%20solid%20%23003366;\%22%3E\u2713%20Link%20alt%20text=\%22%22+a.getAttribute(%22alt%22)+%22\%22.%20Suitable%3F%3C/span%3E%22:%22\u2713%20Alt%20text=\%22%22+a.getAttribute(%22alt%22)+%22\%22.%20Suitable%3F%22):%22A%22==a.parentNode.nodeName%3F!a.hasAttribute(%22aria-label%22)%26%26!a.hasAttribute(%22aria-labelledby%22)%26%26!a.hasAttribute(%22aria-describedby%22)%26%26!a.hasAttribute(%22title%22)%26%26(b+=%22%3Cspan%20style=\%22border-bottom:2px%20solid%20%23003366;\%22%3E\u274C%20Link%20image%20missing%20alt%20text%3C/span%3E%22):!a.hasAttribute(%22aria-label%22)%26%26!a.hasAttribute(%22aria-labelledby%22)%26%26!a.hasAttribute(%22aria-describedby%22)%26%26!a.hasAttribute(%22title%22)%26%26(a.style.setProperty(%22outline%22,%22%23c0272d%205px%20solid%22),a.style.setProperty(%22padding%22,%222px;%22),b+=%22\u274C%20Image%20missing%20alt%20text%22),a.hasAttribute(%22title%22)%26%26(b+=%22\u2753Image%20has%20title=\%22%22+a.getAttribute(%22title%22)+%22\%22%22),a.hasAttribute(%22longdesc%22)%26%26(b+=%22\u2753Image%20linked%20to%20a%20long%20description=\%22%22+a.getAttribute(%22longdesc%22)+%22\%22%22),b%26%26a.insertAdjacentHTML(%22afterend%22,%22%3Cspan%20class=\%22altSpan\%22%3E%22+b+%22%3C/span%3E%22)}),document.querySelectorAll(%22img,%20[role=img]%22).length%3F(document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Cdiv%20id=\%22success\%22%20role=\%22alert\%22%3ESuccess!%20Images%20Found%20on%20Page:%20%22+document.title+%22%3C/div%3E%22),setTimeout(function(){document.querySelector(%22%23success%22).remove()},3e3)):(document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstrong%20id=\%22failure\%22%20role=\%22alert\%22%3ENo%20Images%20Found%20on%20Page:%20%22+document.title+%22%3C/strong%3E%22),setTimeout(function(){document.querySelector(%22%23failure%22).remove()},6e3)),document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/image-alt/\%22%3EChecking%20Image%20Alternative%20Text%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Check images</a> link to your browser bookmarks
2. Visit the page you want to check
3. Click on the ‘Check Images’ link in your bookmarks

### What to look for

* Images with information relevant to the page's content have alternative text that decribes that important information
* Images with text should have the text in the alternative text
* Images that appear to be just to be 'pretty' should be marked with 'Alt text = "". Suitable?'
* Images that are functional, like a link or a button, should have alternative text that describes the destination page or the function of the button
* Complex images like graphs and charts have short alternative text that describes the type of image and a short summary of the key point
  * Complex images should have the detail described elsewhere on the page or on a separate page with a link

## Bookmarklet used

The bookmarklet is based on the work by Paul Adam.

* [Paul Adam bookmarklet](https://pauljadam.com/bookmarklets/images.html) - Uses jQuery 

## Learn more

* [User story of someone relyng on image alternative text to understand the page information](https://www.w3.org/WAI/people-use-web/user-stories/#accountant)
* [Images Tutorial in Tutorials](https://www.w3.org/WAI/tutorials/images/)
* [Non-text Content - Understanding WCAG Success Criterion 1.1.1 Level A](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)