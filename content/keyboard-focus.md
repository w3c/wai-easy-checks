---
title: "Visible Keyboard Focus - Easy Checks"
permalink: /test-evaluate/easy-checks/keyboard-focus/
ref: /test-evaluate/easy-checks/keyboard-focus/
nav_title: "Visible Keyboard Focus"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/keyboard-focus.md

navigation:
  previous: /test-evaluate/easy-checks/skip-link/
  next: /test-evaluate/easy-checks/language/
---

## What is Keyboard Focus?

[TODO] side by side images of the same screen (or part of the screen) with no focus and with good focus

Visible keyboard focus indicates which interactive element - link, button, form field - you might have moved to using the tab key. 

## Who depends on Keyboard Focus?

Many people cannot use a mouse and rely on the keyboard to interact with the Web and need to see where they are. 

Many sighted users with physical disabilities will use the keyboard to navigate a web page, including:
* people with quadriplegia
* people with limited dexterity
* people with tremors such as Parkinson's Disease
* people who have broken their hand or wrist

People who are blind also navigate the web with the keyboard, but will use non-visual cues to determine where they are.

## Checking Keyboard Focus

### Checking this page

This is just for practice. Also, you can see what the check will look like on an accessible page.

Simply click on the link below:

{::nomarkdown}
<p>
  <a class="button active" href="javascript:void%20function(){document.querySelectorAll(%22%23wai-styles,%23wai-info-box%22).forEach(a=%3E{a.remove()}),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:fixed;bottom:5em;right:5em}}%3C/style%3E%22);for(const%20b%20of%20document.querySelectorAll(%22a[href],button,select,input:not([type=\%22hidden\%22]),textarea,summary,details,area,[tabindex],[contenteditable]:not([contenteditable=\%22false\%22])%22)){b.setAttribute(%22data-style%22,b.getAttribute(%22style%22));let%20c=%22%22;b.style.transition=%22none%22,b.focus();let%20d=getComputedStyle(b);for(var%20a=0;a%3Cd.length;a++)c+=d[a]+%22:%22+d.getPropertyValue(d[a])+%22;%22;b.setAttribute(%22style%22,c)}document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3Ca%20href='javascript:document.querySelectorAll(\%22%23wai-styles,%23wai-info-box\%22).forEach(function(el){el.remove()});document.querySelectorAll(\%22[data-style]\%22).forEach(function(el){el.setAttribute(\%22style\%22,el.getAttribute(\%22data-style\%22))});'%20aria-label='dismiss'%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/keyboard-focus/\%22%3EChecking%20Keyboard%20Focus%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Check keyboard focus on this page</a>
</p>
{:/}

### Checking other pages

To check other pages you need to add the check link as a bookmark.

1. Drag this link to your browser bookmarks bar: <a href="javascript:void%20function(){document.querySelectorAll(%22%23wai-styles,%23wai-info-box%22).forEach(a=%3E{a.remove()}),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:fixed;bottom:5em;right:5em}}%3C/style%3E%22);for(const%20b%20of%20document.querySelectorAll(%22a[href],button,select,input:not([type=\%22hidden\%22]),textarea,summary,details,area,[tabindex],[contenteditable]:not([contenteditable=\%22false\%22])%22)){b.setAttribute(%22data-style%22,b.getAttribute(%22style%22));let%20c=%22%22;b.style.transition=%22none%22,b.focus();let%20d=getComputedStyle(b);for(var%20a=0;a%3Cd.length;a++)c+=d[a]+%22:%22+d.getPropertyValue(d[a])+%22;%22;b.setAttribute(%22style%22,c)}document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3Ca%20href='javascript:document.querySelectorAll(\%22%23wai-styles,%23wai-info-box\%22).forEach(function(el){el.remove()});document.querySelectorAll(\%22[data-style]\%22).forEach(function(el){el.setAttribute(\%22style\%22,el.getAttribute(\%22data-style\%22))});'%20aria-label='dismiss'%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/keyboard-focus/\%22%3EChecking%20Keyboard%20Focus%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Check keyboard focus</a>
2. Visit the page you want to check
3. Click on the ‘Check keyboard focus’ link in your bookmarks

### What to look for

* Check that all interactive elements have an obvious visual styling

## Learn more

* [Functionality is available from a keyboard](https://www.w3.org/WAI/fundamentals/accessibility-principles/#keyboard)
* [Understanding 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)

### Acknowledgements

The bookmarklet is based on the work by Ian Lloyd.

* [Ian Lloyd bookmarklet](https://a11y-tools.com/bookmarklets/#focusstyles)
