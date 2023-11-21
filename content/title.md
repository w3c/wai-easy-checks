---
title: "Page Title - Easy Checks"
permalink: /test-evaluate/easy-checks/title/
ref: /test-evaluate/easy-checks/title/
nav_title: "Page Title"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/title.md
---

## What are page titles?

[TODO] Clean image of window chrome with title in it

Page titles are:
*   shown in the window title bar in some browsers
*   shown in browsers' tabs when there are multiple web pages open
*   shown in search engine results
*   used for browser bookmarks/favorites
*   read by screen readers

## Who depends on good page titles?

People who are blind need good page titles. The first thing screen readers say when the user goes to a different web page is the page title.

Good page titles are particularly important for orientation — to help people know where they are and move between pages open in their browser.

## Checking page titles

### Checking this page

This is just for practice. Also, you can see what the check will look like on an accessible page.

Simply click on the link below:

{::nomarkdown}
<p>
  <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23wai-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23wai-info-box%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25);z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif}aside{border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}%23wai-info-box%20div%20span{font-weight:700;}%3C/style%3E%22);var%20a=%22%22;a+=document.title%3F%22\%22%3Cspan%3E%22+document.title+%22%3C/span%3E\%22%22:%22Page%20title%20is%20missing%22,document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Caside%20id=\%22wai-info-box\%22%20tabindex=\%22-1\%22%3E%3Cheader%3EPage%20Title%3Ca%20href=\%22javascript:document.querySelector('%23wai-info-box').remove();\%22%20aria-label=\%22dismiss\%22%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%22+a+%22%3Cp%3EFind%20out%20more%20about%20%3Ca%20href=\%22https://www.w3.org/wai/easy-checks/title/\%22%3EChecking%20Page%20Title%3C/a%3E%3C/div%3E%3C/aside%3E%22),document.getElementById(%22wai-info-box%22).focus()}();">Check page title</a>
</p>
{:/}

### Checking other pages

To check other pages you need to add the check link as a bookmark.

1. Drag the <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23wai-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23wai-info-box%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25);z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif}aside{border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}%23wai-info-box%20div%20span{font-weight:700;}%3C/style%3E%22);var%20a=%22%22;a+=document.title%3F%22\%22%3Cspan%3E%22+document.title+%22%3C/span%3E\%22%22:%22Page%20title%20is%20missing%22,document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Caside%20id=\%22wai-info-box\%22%20tabindex=\%22-1\%22%3E%3Cheader%3EPage%20Title%3Ca%20href=\%22javascript:document.querySelector('%23wai-info-box').remove();\%22%20aria-label=\%22dismiss\%22%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%22+a+%22%3Cp%3EFind%20out%20more%20about%20%3Ca%20href=\%22https://www.w3.org/wai/easy-checks/title/\%22%3EChecking%20Page%20Title%3C/a%3E%3C/div%3E%3C/aside%3E%22),document.getElementById(%22wai-info-box%22).focus()}();">Check page title</a> link to your browser bookmarks
2. Visit the page you want to check
3. Click on the ‘Check page title’ link in your bookmarks

### What to look for

* Check that there is a title that adequately and briefly describes the content of the page
* Check that the title on the page your are checking is different from other pages on the website

### Tips

There is flexibility on what makes a good page title. However best practice is for the important and unique information to come first. This is called "front-loading".

For example:

* Poor titles:
  * Welcome to home page of Acme Web Solutions, Inc.
  * Acme Web Solutions, Inc. - About Us
  * Acme Web Solutions, Inc. - Contact Us
  * Acme Web Solutions, Inc. - History
* Better page titles:
  * Acme Web Solutions home page
  * About Acme Web Solutions
  * Contact Acme Web Solutions
  * History of Acme Web Solutions

## Learn more

* [Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html) - Understanding Success Criterion 2.4.2 for WCAG (Level A)