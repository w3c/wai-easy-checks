---
title: "Keyboard Focus - Easy Checks"
permalink: /test-evaluate/easy-checks/keyboard-focus/
ref: /test-evaluate/easy-checks/keyboard-focus/
nav_title: "Keyboard Focus"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/keyboard-focus.md
---

## At a Glance

@@ side by side images of the same screen (or part of the screen) with no focus and with good focus

Many people cannot use a mouse and rely on the keyboard to interact with the Web and need to see where they are. 

## What is Keyboard Focus?

Keyboard focus is the ability to see which interactive element - link, button, form field - you might have moved to with the tab key. 

## Who depends on Keyboard Focus?

Many sighted users with physical disabilities will use the keyboard to navigate a web page, including:
* people with quadraplegia
* people with limited dexterity
* people with tremours such as Parkinson's Disease
* People who might have broken their hand or wrist

People who are blind also navigate the web with the keyboard, but they listen for cues about where they are.

## Checking Keyboard Focus

### Checking this page

This is just for practice. Also, you can see what the check will look like on an accessible page.

Simply click on the link below:

{::nomarkdown}
<p>
  <a class="button active" href="javascript:void%20function(){for(const%20b%20of%20document.querySelectorAll(%22a[href],button,select,input:not([type=\%22hidden\%22]),textarea,summary,details,area,[tabindex],[contenteditable]:not([contenteditable=\%22false\%22])%22)){let%20c=%22%22;b.style.transition=%22none%22,b.focus();let%20d=getComputedStyle(b);for(var%20a=0;a%3Cd.length;a++)c+=d[a]+%22:%22+d.getPropertyValue(d[a])+%22;%22;b.setAttribute(%22style%22,c)}}();">Check keyboard focus</a>
</p>
{:/}

The bookmarklet is based on the work by Ian Lloyd.

* [Ian Lloyd bookmarklet](https://a11y-tools.com/bookmarklets/#focusstyles)

## Learn more
