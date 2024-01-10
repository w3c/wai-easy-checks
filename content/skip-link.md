---
title: "Skip Link - Easy Checks"
permalink: /test-evaluate/easy-checks/skip-link/
ref: /test-evaluate/easy-checks/skip-link/
nav_title: "Skip Link"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/skip-link.md

navigation:
  previous: /test-evaluate/easy-checks/color-contrast/
  next: /test-evaluate/easy-checks/keyboard-focus/
  
bookmarklet: javascript:void%20function(){document.querySelectorAll(%22%23wai-styles,%23wai-info-box,.skiplink-span%22).forEach(a=%3E{a.remove()}),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:fixed;bottom:5em;right:5em}.wai-error{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25)}.skiplink-span{color:black;font-weight:bold;font-size:small;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;background-color:%23eed009;margin:0%202px;padding:2px;speak:literal-punctuation}.wai-highlight{outline:%23eed009%202px%20dashed}%3C/style%3E%22);let%20a=%22%22;const%20b=document.querySelector(%22a[href^='%23']%22);if(b){if(b.offsetWidth||b.offsetHeight||b.getClientRects().length||%22hidden%22==window.getComputedStyle(b).visibility||%22absolute%22==window.getComputedStyle(b).position){b.setAttribute(%22data-style%22,b.getAttribute(%22style%22));let%20a=%22%22;b.style.transition=%22none%22,b.focus();let%20d=getComputedStyle(b);for(var%20c=0;c%3Cd.length;c++)a+=d[c]+%22:%22+d.getPropertyValue(d[c])+%22;%22;b.setAttribute(%22style%22,a)}const%20d=b.getAttribute(%22href%22).substring(1),e=document.querySelector(%22%23%22+d);e||(a=%22There%20is%20no%20target%20for%20the%20skip%20link%22),b.classList.add(%22wai-highlight%22),e.classList.add(%22wai-highlight%22),b.insertAdjacentHTML(%22beforebegin%22,%22%3Cspan%20class=\%22skiplink-span\%22%3ESkip%20link%20connects%20to%20id=\%22%22+d+%22\%22%3C/span%3E%22),e.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class=\%22skiplink-span\%22%3ESkip%20link%20connects%20here%3C/span%3E%22)}else%20a=%22Unable%20to%20find%20any%20in%20page%20links%22;a%26%26document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Caside%20id=\%22wai-info-box\%22%20tabindex=\%22-1\%22%20class=\%22wai-error\%22%3E%3Cheader%3EMissing%20skip%20link%3F%3Ca%20href=\%22javascript:document.querySelector('%23wai-info-box').remove();\%22%20aria-label=\%22dismiss\%22%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%22+a+%22%3C/div%3E%3C/aside%3E%22),document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3Ca%20href='javascript:document.querySelectorAll(\%22%23wai-styles,%23wai-info-box,.skiplink-span\%22).forEach(function(el){el.remove()});document.querySelectorAll(\%22[data-style]\%22).forEach(function(el){el.setAttribute(\%22style\%22,el.getAttribute(\%22data-style\%22))});'%20aria-label='dismiss'%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/skip-link/\%22%3EChecking%20Skip%20Links%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();
---

## What is a Skip Link? 

<img src="{{ "/content-images/example-skip-link.png" | relative_url }}" alt="Example of a skip link" class="normal right">

[TODO] [[alternatively, two image of the W3C home page - with and without the 'skip to content' link showing - add an arrow on the show page]]

A skip navigation link is a link at the start of a page that allows keyboard users to move straight to the main content on a page. It allows them to bypass the common content at the start of the pages. For example, search and navigation. 

Ideally it should be visible as the first link on the page. However, some designers like to hide it from view until it receives keyboard focus and this is acceptable as long as it becomes highly visible on focus.

## Who depends on a Skip Link?

Anyone who uses the tab key to navigate rather than using a regular or virtual mouse. This includes:

* screen reader users
* people with poor dexterity
* people with various motor disabilities
* people using mouth sticks or head pointers
* people using switch devices

## Checking Skip Link

### Checking this page

This is just for practice. Also, you can see what the check will look like on an accessible page.

Click on the button below:

{::nomarkdown}
<p>
  <a class="button active" href="{{ page.bookmarklet }}">Check skip link on this page</a>
</p>
{:/}

### Checking other pages

To check other pages you need to add the check link as a bookmark.

1. Make sure your browser bookmarks/favorites bar is open
2. Drag this link to the bookmarks/favorites bar: <a href="{{ page.bookmarklet }}">Check skip link</a>
3. Visit the page you want to check
4. Click on the ‘Check skip link’ link in your bookmarks

{% include excol.html type="start" %}
#### Add bookmark using keyboard only
{% include excol.html type="middle" %}
Common keystrokes are included in the instructions below. If these don't work then you can find the keystrokes for your browser by searching for "(browser name) keyboard shortcuts".

1. <button onclick="copyBookmarklet()">Copy script to clipboard</button>
2. Make sure your browser bookmarks/favorites bar is open. Ctrl/CMD+Shift+B will usually toggle the bar
3. Create a bookmark to this page using Ctrl/CMD+D
4. Edit your bookmarks - this varies depending on browser and operating system. There is usually a menu option to manage your bookmarks
5. Edit the newly added bookmark to this page
6. Paste the script copied into the URL or Link field
{% include excol.html type="end" %}

### What to look for

Sometimes the skip link is not the first link on a page. The checking tool provided here only checks for the first link that skips down the current page. It is possible that this link is not one that skips to the main content but just a normal in-page link. This means there is a problem with the skip link.

The wording of the link doesn't matter too much as long as the purpose is clear. Common wording includes:

* Skip navigation
* Skip to content
* Skip to main content

## Learn more

* [Understanding 2.4.1: Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)

## Acknowledgements

* [Jim Thatcher bookmarklet](https://jimthatcher.com/favelets/) - No jQuery

<script>
  function copyBookmarklet() {
    navigator.clipboard.writeText("{{page.bookmarklet}}").then(
      () => {
        alert("Check copied");        
      },
      () => {
        alert("Unable to copy the check");
      },
    );
  }
</script>