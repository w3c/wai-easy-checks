---
title: "Heading Structure - Easy Checks"
permalink: /test-evaluate/easy-checks/heading-structure/
ref: /test-evaluate/easy-checks/heading-structure/
nav_title: "Heading Structure"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/heading-structure.md
  
navigation:
  previous: /test-evaluate/easy-checks/form-field-labels/
  next: /test-evaluate/easy-checks/image-alt/
---

{::nomarkdown}
{% include box.html type="start" title="At a Glance" h="2" %}
{:/}

* Headings and sub-headings signpost different sections on a web page
* People using screen readers often use headings to navigate the web page
* headings help people who become distracted or with impaired memory and attention by clarifying the content on a page and providing a focus
* Heading levels should be differentiated in the code not just visually

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## What is Heading Structure?

Headings communicate the organization of the content on the page, like a table of contents. They are nested by their rank or level. They help provide a summary of the structure and content of a page. For example:

```
  <h1> Popular games
    <h2> Card games
      <h3> Solitaire games
      <h3> Trick-taking games
    <h2> Board games
      <h3> Abstract
      <h3> Deckbuilder
```

Headings can have 1 of 6 levels assigned and should be nested by that level. The main heading on a page is level 1; `<h1>`. Subsequent headings should be at levels 2 to 6; `<h2>` to `<h6>`. Levels should not be skipped as sub-headings are created, just like the table-of-contents in a book.
  
@@Headings should be succinct and describe the section or text of the page that follows.@@

## Who depends on Headings?

Screen reader users often use page headings as a way to navigate a web page. Screen readers allow the users to jump from heading to heading with the heading text and the heading level being announced. Many screen readers also provide a list of headings in a dialog as an overview of the page structure.

{% include image.html src="heading-structure-example-1.png" alt="Example of screen reader generated list of headings" %}

Lots of other low vision and sighted people rely on the visual heading structure to understand the topics and subtopics on a web page and move quickly to the section they are interested in. Headings can also form the basis of an 'in-page' table of contents on a long web page such the chapter in a report.

@@Something about benefit to people with cognitive impairments and conditions@@ 

## Checking Headings

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
