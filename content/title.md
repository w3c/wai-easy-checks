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

## ~~At a Glance~~

[@@ updated image without browser identification like <img src="https://www.w3.org/WAI/content-images/preliminary/page-title.png"> <br>The image below shows the page title "Easy Checks - A First Review of Web Accessibility" in the title bar, and the titles of 4 pages in the tabs. Note that in the tabs, only the first part of the page title is shown.]

## What are page titles?

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
  <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23title-check-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23title-check-message%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='title-check-styles'%3E%23title-check-message{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25);z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif}aside{border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23title-check-message%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23title-check-message%20header%20a{float:right;text-decoration:none}%23title-check-message%20div{padding:8px%2016px;}%23title-message%20div%20span{font-weight:500;}%3C/style%3E%22);var%20a=%22%22;a+=document.title%3F%22Page%20title%20is:%20%3Cspan%3E%22+document.title+%22%3C/span%3E%22:%22Page%20title%20is%20missing%22,document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Caside%20id=\%22title-check-message\%22%20tabindex=\%22-1\%22%3E%3Cheader%3EPage%20Title%3Ca%20href=\%22javascript:document.querySelector('%23title-check-message').remove();\%22%20aria-label=\%22dismiss\%22%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%22+a+%22%3C/div%3E%3C/aside%3E%22),document.getElementById(%22title-check-message%22).focus()}();">Check page title</a>
</p>
{:/}

### Checking other pages

To check other pages you need to add the check link as a bookmark.

1. Drag the [Page Title](@@) link to your browser bookmarks
2. Visit the page you want to check
3. Click on the ‘Page Title’ link in your bookmarks

* Bookmark tool: [Page Title ](@@) [(i)]



### What to look for

* Check that there is a title that adequately and briefly describes the content of the page.
* Check that the title on the page your are checking is different from other pages on the website, and adequately distinguishes the page from other web pages.

### Tips

There is flexibility on what makes a good page title, howeverb est practice is for the important and unique identifying information first (called "front-loading").  
    For example:
    *   Poor titles:
        *   Welcome to home page of Acme Web Solutions, Inc.
        *   Acme Web Solutions, Inc. | About Us
        *   Acme Web Solutions, Inc. | Contact Us
        *   Acme Web Solutions, Inc. | History
    *   Better page titles:
        *   Acme Web Solutions home page
        *   About Acme Web Solutions
        *   Contact Acme Web Solutions
        *   History of Acme Web Solutions

## Learn more

In the web page markup the page title is the text between the <title> </title> element within the <head> </head> element.

* [Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html) - Understanding Success Criterion 2.4.2 for WCAG (Level A)
