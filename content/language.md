---
title: "Language - Easy Checks"
permalink: /test-evaluate/easy-checks/language/
ref: /test-evaluate/easy-checks/language/
nav_title: "Language"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/language.md
---

## What is language identified?

[TODO] Image showing sample of page with differing languages

Web pages should identify the primary language of the page. If there is any content in a different language, that language should be also be identified.

## Who depends on language being identified?

People who use screen readers or other technologies that convert text into synthetic speech, including people who are blind and people with certain cognitive, language, and learning disabilities depend on the language being identified. When language is identified, then the synthetic speech can use the proper pronunciation.

## Checking Language

This is just for practice. Also, you can see what the check will look like on an accessible page.

Simply click on the link below:

{::nomarkdown}
<p>
  <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23wai-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23wai-info-box%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25);z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif}%23wai-info-box{border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}%23wai-info-box%20div%20span{font-weight:700;}%3C/style%3E%22);let%20a=navigator.language||navigator.userLanguage,b=new%20Intl.DisplayNames([a],{type:%22language%22});var%20c=%22%22;let%20d=document.documentElement.lang||document.getElementsByTagName(%22html%22)[0].getAttribute(%22xml:lang%22);c+=d%3F%22%3Cspan%3E%22+d+%22%20(%22+b.of(d)+%22)%3C/span%3E%22:%22Page%20langage%20is%20not%20specified%22,document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Caside%20id=\%22wai-info-box\%22%20tabindex=\%22-1\%22%3E%3Cheader%3EPage%20Language%3Ca%20href=\%22javascript:document.querySelector('%23wai-info-box').remove();\%22%20aria-label=\%22dismiss\%22%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%22+c+%22%3Cp%3EFind%20out%20more%20about%20%3Ca%20href=\%22https://www.w3.org/wai/easy-checks/language/\%22%3EChecking%20Page%20Language%3C/a%3E%3C/div%3E%3C/aside%3E%22),document.getElementById(%22wai-info-box%22).focus()}();">Check page language</a>
</p>
{:/}

### Checking other pages

To check other pages you need to add the check link as a bookmark.

1. Drag the <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23wai-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23wai-info-box%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25);z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif}%23wai-info-box{border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}%23wai-info-box%20div%20span{font-weight:700;}%3C/style%3E%22);let%20a=navigator.language||navigator.userLanguage,b=new%20Intl.DisplayNames([a],{type:%22language%22});var%20c=%22%22;let%20d=document.documentElement.lang||document.getElementsByTagName(%22html%22)[0].getAttribute(%22xml:lang%22);c+=d%3F%22%3Cspan%3E%22+d+%22%20(%22+b.of(d)+%22)%3C/span%3E%22:%22Page%20langage%20is%20not%20specified%22,document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Caside%20id=\%22wai-info-box\%22%20tabindex=\%22-1\%22%3E%3Cheader%3EPage%20Language%3Ca%20href=\%22javascript:document.querySelector('%23wai-info-box').remove();\%22%20aria-label=\%22dismiss\%22%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%22+c+%22%3Cp%3EFind%20out%20more%20about%20%3Ca%20href=\%22https://www.w3.org/wai/easy-checks/language/\%22%3EChecking%20Page%20Language%3C/a%3E%3C/div%3E%3C/aside%3E%22),document.getElementById(%22wai-info-box%22).focus()}();">Check page language</a> link to your browser bookmarks
2. Visit the page you want to check
3. Click on the ‘Check page language’ link in your bookmarks

### What to look for

* Check that the primary language is identified correctly
* If there is no page language set, it will display: "Page langage is not specified"

## Learn more

* [Understanding 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
* [Understanding 3.1.2: Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts)

## Acknowledgements

The bookmarklet is based on the work by Paul Adam.

bookmarklets:
* [Paul Adam bookmarklet](javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/pauljadam/bookmarklets@master/lang.js';var iframes=document.getElementsByTagName('iframe');for(i=0;i<iframes.length;i++) {iframes[i].contentDocument.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/pauljadam/bookmarklets@master/lang.js';}})();) - Note, this is the actual bookmarklet. There is no demo page for this one. Uses jQuery