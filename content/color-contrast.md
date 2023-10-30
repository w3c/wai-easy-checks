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

## At a Glance

@@ image of a screen with low contast beside a screen with good contrast

Ensuring good contrast is essential to ensure that people with low vision and those with 'colour blindness' read your page.

## What is Color Contrast?

Colour contrast is the contrast between your:
* text and the background colour
* interactive elements such as [focus indicators]([url](https://github.com/w3c/wai-easy-checks/blob/2023-update/content/keyboard-focus.md)) and their background
* elements in a graph, chart of map that need to be understood

Technically, colour contrast is the relative luminance of 2 or more colours to each other, particularly between text and it's background. The tools we can use to measure this relative luminance take care of the math and make checking that we have enough contrast easy. 

## Who depends on Color Contrast?

* Many people with low vision need high contrast
* Many people with colour deficient vision (colour blind) need high contrast
* Many others need high contrast when in bright situations such being outdoors
* Some people need lower contrast as the highest contrast (black on white) might be too glary

## Checking Color Contrast

### Quick check

Simply click on the link below:

[Grey Scale page](@@)

This gives a rough check as to whether the text on the page is eastily read or needs increased  contrast. 

To do a rough check on other pages:

1. Drag the [Grey Scale page](@@) to your bookmarks
2. Visit the page you want to check
3. Click on the 'Check headings' link in your bookmarks 

### Accurate check

To test more thoroughly, you need to find out what the text or other element and background colours are and then get a contrast analyser to do the math and tell you if there is enough or not.

There are many tools out there to help check the contrast between your text and the background. Some tools will even help you sample the colours if you're not sure how to check the HTML or CSS to find what colour is being used. Start by searching the [Evaluation Tools List](https://www.w3.org/WAI/ER/tools/) for 'color' or 'colour'.

@@ should we specify regular text / high text / non-text requirements?

* [Paul Adam bookmarklet to convert to greyscale](https://pauljadam.com/demos/svg-line-chart.html) - No jQuery
* Link to [Evaluation Tools List](https://www.w3.org/WAI/ER/tools/)

## Learn more

* [How a user with “color blindness” experiences the Web](https://www.w3.org/WAI/people-use-web/user-stories/#shopper)
* [Contrast (Minimum) - Understanding Success Criterion 1.4.3 for WCAG (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
* [Contrast (Enhanced) - Understanding Success Criterion 1.4.6 for WCAG (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced)
* [Non-text Contrast - Understanding Success Criterion 4.1.1 for WCAG (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
