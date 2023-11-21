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
---

## What is Skip Link?

## Who depends on Skip Link?

Some test text

## Checking Skip Link

### Checking this page

This is just for practice. Also, you can see what the check will look like on an accessible page.

Simply click on the link below:

{::nomarkdown}
<p>
  <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23wai-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23wai-info-box%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:fixed;bottom:5em;right:5em}.wai-error{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25)}.skiplink-span{color:black;font-weight:bold;font-size:small;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;background-color:%23eed009;margin:0%202px;padding:2px;speak:literal-punctuation}%3C/style%3E%22);let%20a=%22%22;const%20b=document.querySelector(%22a[href^='%23']%22);if(b){if(b.offsetWidth||b.offsetHeight||b.getClientRects().length||%22hidden%22==window.getComputedStyle(b).visibility||%22absolute%22==window.getComputedStyle(b).position){let%20a=%22%22;b.style.transition=%22none%22,b.focus();let%20d=getComputedStyle(b);for(var%20c=0;c%3Cd.length;c++)a+=d[c]+%22:%22+d.getPropertyValue(d[c])+%22;%22;b.setAttribute(%22style%22,a)}const%20d=b.getAttribute(%22href%22).substring(1),e=document.querySelector(%22*[id=%22+d+%22]%22);e||(a=%22There%20is%20no%20target%20for%20the%20skip%20link%22),b.style.setProperty(%22outline%22,%22%23eed009%202px%20dashed%22),e.style.setProperty(%22border%22,%22%23eed009%202px%20dashed%22),b.insertAdjacentHTML(%22beforebegin%22,%22%3Cspan%20class=\%22skiplink-span\%22%3ESkip%20link%20connects%20to%20id=\%22%22+d+%22\%22%3C/span%3E%22),e.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class=\%22skiplink-span\%22%3ESkip%20link%20connects%20here%3C/span%3E%22)}else%20a=%22Unable%20to%20find%20any%20in%20page%20links%22;a%26%26document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Caside%20id=\%22wai-info-box\%22%20tabindex=\%22-1\%22%20class=\%22wai-error\%22%3E%3Cheader%3EMissing%20skip%20link%3F%3Ca%20href=\%22javascript:document.querySelector('%23wai-info-box').remove();\%22%20aria-label=\%22dismiss\%22%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%22+a+%22%3C/div%3E%3C/aside%3E%22),document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/skip-link/\%22%3EChecking%20Skip%20Links%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Check skip link</a>
</p>
{:/}

### Checking other pages

To check other pages you need to add the check link as a bookmark.

1. Drag the <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23wai-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23wai-info-box%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:fixed;bottom:5em;right:5em}.wai-error{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25)}.skiplink-span{color:black;font-weight:bold;font-size:small;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;background-color:%23eed009;margin:0%202px;padding:2px;speak:literal-punctuation}%3C/style%3E%22);let%20a=%22%22;const%20b=document.querySelector(%22a[href^='%23']%22);if(b){if(b.offsetWidth||b.offsetHeight||b.getClientRects().length||%22hidden%22==window.getComputedStyle(b).visibility||%22absolute%22==window.getComputedStyle(b).position){let%20a=%22%22;b.style.transition=%22none%22,b.focus();let%20d=getComputedStyle(b);for(var%20c=0;c%3Cd.length;c++)a+=d[c]+%22:%22+d.getPropertyValue(d[c])+%22;%22;b.setAttribute(%22style%22,a)}const%20d=b.getAttribute(%22href%22).substring(1),e=document.querySelector(%22*[id=%22+d+%22]%22);e||(a=%22There%20is%20no%20target%20for%20the%20skip%20link%22),b.style.setProperty(%22outline%22,%22%23eed009%202px%20dashed%22),e.style.setProperty(%22border%22,%22%23eed009%202px%20dashed%22),b.insertAdjacentHTML(%22beforebegin%22,%22%3Cspan%20class=\%22skiplink-span\%22%3ESkip%20link%20connects%20to%20id=\%22%22+d+%22\%22%3C/span%3E%22),e.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class=\%22skiplink-span\%22%3ESkip%20link%20connects%20here%3C/span%3E%22)}else%20a=%22Unable%20to%20find%20any%20in%20page%20links%22;a%26%26document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Caside%20id=\%22wai-info-box\%22%20tabindex=\%22-1\%22%20class=\%22wai-error\%22%3E%3Cheader%3EMissing%20skip%20link%3F%3Ca%20href=\%22javascript:document.querySelector('%23wai-info-box').remove();\%22%20aria-label=\%22dismiss\%22%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%22+a+%22%3C/div%3E%3C/aside%3E%22),document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/skip-link/\%22%3EChecking%20Skip%20Links%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Check skip link</a> link to your browser bookmarks
2. Visit the page you want to check
3. Click on the ‘Check skip link’ link in your bookmarks

### What to look for


## Learn more

## Acknowledgements

* [Jim Thatcher bookmarklet](https://jimthatcher.com/favelets/) - No jQuery