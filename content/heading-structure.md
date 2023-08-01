---
title: "Heading Structure - Easy Checks"
permalink: /test-evaluate/easy-checks/heading-structure/
ref: /test-evaluate/easy-checks/heading-structure/

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/heading-structure.md
---

## At a Glance

* Headings are the signposts to different sections on a web page
* Sub-headings signal topics within the main topic
* Screen reader users rely on headings to navigate the web poage
* Heading levels should be differentiated in the code not just visually

## What is Heading Structure?

Headings create a structure for a web page and are like a table of contents for a page. Headings introduce the content that follows and thus helps people to decide if they want to read the following paragraphs or move on further. 

Good structure indicates the relationship between the heading levels. Headings can have 1 of 6 levels assigned and should be nested by their heading level. The main heading on a page should be at level 1 [h1]; subsequent headings should be at levels 2 to 6 - [h2] to [h6]. Levels should not be skipped as sub-headings are created, just like the table-of-contents in a book.

## Who depends on Heading Structure?

Heading struture is a key way people using screen reader users in particular navigate a web page. Screen readers allow the users to jump from heading to heading with the heading text and the heading level being anounced. Many screen readers also allow a list of headings to be generated for a quick overview of the page structure and for quick navigation. \[possible image from NVDA?\]

However, lots of other low vision and sighted people rely on the visual heading structure to understand the topics and subtopics on a web page and move quickly to the section they are interested in. Headings can also form the basis of an 'in-page' table of contents on a long web page such the chapter in a report.

## Checking Heading Structure

On the web page you're checking the heading structure for, click the [[_name of bookmarklet_]]. It will look at all the headings present on a page and create the table-of-contents-like structure tree of the headings based on the level each heading has been assigned. \[possible image of structure tree of a WAI page?\]

Check the structure tree for missing heading levels, for example an [h4] directly after an [h2] - there shouldn't be any, although this is not an absolute requriement. Check the page visually for all text that looks like a heading - do they all appear in the structure tree? Sometimes pages use headings level for styling purposes - look for headings in the structure tree that aren't really headings. 

* [Paul Adam bookmarklet](https://pauljadam.com/bookmarklets/headings.html) - Uses jQuery
* [Pixo and DRES bookmarklets](https://accessibility-bookmarklets.org/install.html) - No jQuery
* [Jim Thatcher bookmarklet](https://jimthatcher.com/favelets/) - No jQuery
* [Ian Lloyd bookmarklet](https://a11y-tools.com/bookmarklets/#checkheadings) - No jQuery (I think) **preferred**
* [Hinderlink Volkart bookmarklet](https://hinderlingvolkart.github.io/h123/)

## Learn more

* [Headings tutorial](https://www.w3.org/WAI/tutorials/page-structure/headings/) in the W3C Page Structure tutorial
* [Use headings to convey meaning and structure](https://www.w3.org/WAI/tips/writing/#use-headings-to-convey-meaning-and-structure) in the W3C Writing for Web Accessibility page
