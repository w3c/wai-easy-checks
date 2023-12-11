---
title: "Color Contrast - Easy Checks"
permalink: /test-evaluate/easy-checks/color-contrast/
ref: /test-evaluate/easy-checks/color-contrast/
nav_title: "Color Contrast"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/color-contrast.md
---

## What is Color Contrast?

[TODO] image of a screen with low contrast beside a screen with good contrast

Color contrast refers to the contrast between:
* text and the background color
* interactive elements such as [focus indicators](/test-evaluate/easy-checks/keyboard-focus/) and their background
* elements in a graph, chart of map that need to be understood

Technically, color contrast is the relative luminance of two or more colors to each other, particularly between text and it's background. The tools we can use to measure this take care of the math and make checking that we have enough contrast easy. 

## Who depends on Color Contrast?

* Many people with low vision need high contrast
* Many people with color deficient vision (color blind) need high contrast
* Many others need high contrast when in bright situations such being outdoors
* Many people use colored filters or overlays on their screens or devices so need good color contrast

## Checking Color Contrast

### Quick check

Simply click on the link below:

{::nomarkdown}
<p>
  <a class="button active" href="javascript:void%20function(){document.querySelectorAll(%22%23wai-styles,%23wai-info-box%22).forEach(a=%3E{a.remove()}),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:sticky;width:25%25;margin-left:70%25;bottom:5em;}body{filter:grayscale(1)}%3C/style%3E%22),document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3Ca%20href='javascript:document.querySelectorAll(\%22%23wai-styles,%23wai-info-box\%22).forEach(function(el){el.remove()});'%20aria-label='dismiss'%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/color-contrast/\%22%3EChecking%20Color%20Contrast%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Check grayscale on this page</a>
</p>
{:/}

This gives a rough check as to whether the text on the page is easily read or needs increased  contrast.

### Checking other pages

To check other pages you need to add the check link as a bookmark.

1. Drag this link to your browser bookmarks bar: <a href="javascript:void%20function(){document.querySelectorAll(%22%23wai-styles,%23wai-info-box%22).forEach(a=%3E{a.remove()}),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:sticky;width:25%25;margin-left:70%25;bottom:5em;}body{filter:grayscale(1)}%3C/style%3E%22),document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3Ca%20href='javascript:document.querySelectorAll(\%22%23wai-styles,%23wai-info-box\%22).forEach(function(el){el.remove()});'%20aria-label='dismiss'%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/color-contrast/\%22%3EChecking%20Color%20Contrast%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Covert to grayscale</a>
2. Visit the page you want to check
3. Click on the 'Covert to grayscale' link in your bookmarks 

### Accurate check

You can use tools to test more thoroughly. These will do the math and then tell you whether there is sufficient contrast.

There are many tools out there to help check the contrast between your text and the background. Some tools allow you to sample the colors directly. Other tools need you to know what the code is for the colors being checked.

To find tools that will help, search the [Evaluation Tools List](https://www.w3.org/WAI/ER/tools/) for 'color' or 'colour'.

## Learn more

* [How a user with “color blindness” experiences the Web](https://www.w3.org/WAI/people-use-web/user-stories/#shopper)
* [Understanding 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)
* [Understanding 1.4.6: Contrast (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced)
* [Understanding 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

## Acknowledgements

* [Paul Adam bookmarklet to convert to greyscale](https://pauljadam.com/demos/svg-line-chart.html) - No jQuery