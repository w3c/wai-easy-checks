---
title: "Easy Checks – A First Review of Web Accessibility"
permalink: /test-evaluate/easy-checks/
ref: /test-evaluate/easy-checks/
nav_title: "Overview"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/index.md

footer: >
  <p>Note about video description: The video on this page does not include synchronized audio description because the visuals only illustrate the audio and do not provide additional information. In this case, audio description would be more distracting than useful to most people, including people who cannot see the visuals. Description of visual information is integrated in the Text Transcript with Description of Visuals (“descriptive transcript”).</p>
  <p><strong>Date: </strong>Minor content update 31 January 2023. [<a href="https://www.w3.org/WAI/EO/wiki/Easy_Checks_changelog">changelog</a>] Major revision planned for late 2023.<br>
  History: Easy Checks - A First Review of Web Accessibility was first published as a draft in June 2013. It replaces Preliminary Review of Web Sites for Accessibility that was first published September 2005 and edited by Shadi Abou-Zahra. It was originally one section of Evaluating Web Sites for Accessibility that was first published in October 2001 and edited by Judy Brewer and Chuck Letourneau.</p>
  <p><strong>Editor:</strong> <a href="https://www.w3.org/People/Shawn/">Shawn Lawton Henry</a>. Contributors: Sharron Rush, Caleb Watson, Suzette Keith, Anna Belle Leiserson, Andrew Arch, Wayne Dick, Vicki Menezes Miller, Jennifer Sutton, Ian Pouncey, Denis Boudreau, Tom Jewett, and <a href="https://www.w3.org/WAI/EO/EOWG-members">EOWG Participants</a>.</p>
  <p>Developed by the Education and Outreach Working Group (<a href="http://www.w3.org/WAI/EO/">EOWG</a>). Video developed with support from the <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide</a> project funded by the European Commission (EC) under the Horizon 2020 program (Grant Agreement 822245). <a href="/WAI/test-evaluate/acknowledgements">Acknowledgments for video</a>.</p>
---

{::nomarkdown}

<style>
  #summary {
    display: flex;
  }
  
  #summary p:first-of-type {
    font-size:120%;
    margin-top: 0.5em;
  }
  
  .video-card {
    margin: 1em;
    float: none !important;
    max-width: inherit !important;
    width: 100% !important;
    flex-grow: 1;
  }
  
  img.video {
    border-radius: 5px;
    width: 300px;
    max-width: 300px;
  }
  
  .video-card .play-button {
    position: relative;
    top: -120px;
    left: 120px;
    width: 60px;
    height: 60px;
  }
  
  .icon {
    width: 1em;
    height: 1em;
  }
  
  .box-sections {
    margin-top: 3em;
  }
  .box-sections .box-i {
    padding: 0;
  }
  .box-sections .box-i div {
    clear: left;
    padding: 8px 16px;
    border-bottom: solid 1px var(--line-grey);
  }
  
  .box-sections .splash {
    float: left;
    padding-right: 1em;
  }
  .box-sections h3 {
    margin: 0;
  }
  </style>

<aside id="summary" class="box box-i box-simple">
  <div>
    <p>This page helps you start to assess the accessibility of a web page. With these simple checks, you can find out whether or not accessibility is addressed in even the most basic way.</p>
    <nav aria-labelledby="tocheading" id="toc">
      <header id="tocheading" class="box-h box-h-simple">Page Contents</header>
      <ul id="markdown-toc">
        <li><a href="#introduction" id="markdown-toc-introduction">Introduction</a></li>
        <li><a href="#common" id="markdown-toc-common-checks">Common Checks</a></li>
        <li><a href="#audio-visual" id="markdown-toc-audio-visual-checks">Audio/Visual Checks</a></li>
        <li><a href="#forms" id="markdown-toc-forms-checks">Form Checks</a></li>
      </ul>
    </nav>
  </div>
  <div class="video-card">
      <img class="video" src="https://i.ytimg.com/vi_webp/IZp8eUAu450/maxresdefault.webp">
      <img class="play-button" src="https://www.starpng.com/public/uploads/preview/red-play-button-png-101576847279kuxmycuxzj.png">
  </div>
</aside>

{:/}

{::nomarkdown}
{% include box.html type="start" title="Disclaimer" icon="warning" %}
{:/}

<p>These checks cover just a few accessibility issues and are designed to be quick and easy, rather than exhaustive. A web page could seem to pass these checks, yet still have significant accessibility barriers. More extensive assessment is needed to evaluate accessibility comprehensively.</p>

<p>This page provides checks for the following specific aspects of a web page. It also provides guidance on <span class="ptoc"><a href="#next">Next Steps</a></span> and links to more <a href="#evalresources">evaluation resources</a>.</p>

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Introduction

You will be able to perform any of the following checks on any web page. The results will give you a basic idea of how accessible the page is. Each check explains briefly what it is checking for and why this matters. THe checks also tell you what you should be looking for.

{::nomarkdown}
{% include box.html type="start" id="common" class="sections" h="2" title="Common checks" %}
<div>
{:/}

![]({{ "/content/splash-headings.png" | relative_url }}){:.splash}

### [Image Alternative Text](/test-evaluate/easy-checks/image-alt/)

Image alternative text ("alt text") is a short description that conveys the purpose of an image. Alternative text is used by people who do not see the image. For example, people who are blind and use screen readers can hear the alt text read out.

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Page Title](/test-evaluate/easy-checks/title/)

Page titles are shown in the window title bar or tab in browsers. They are the first thing read by screen readers and help people know where they are. 

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Heading Structure](/test-evaluate/easy-checks/heading-structure/)

Headings communicate the organization of the content on the page, like a table of contents. Screen reader users often use page headings as a way to navigate a web page.

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Color Contrast](/test-evaluate/easy-checks/color-contrast/)

Color contrast refers to the difference between adjacent colors. Typically this is the text and background color. It also includes interactive elements and their background, and parts of graphs or charts. Some people cannot read text or find elements if there is insufficient contrast between colors.

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Skip Link](/test-evaluate/easy-checks/skip-link/)

A skip link is the first interactive element on a page. People using keyboards, screen readers and other assistive technologies can use skip links to quickly and easily reach the main page content.

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Keyboard Focus](/test-evaluate/easy-checks/keyboard-focus/)

For people who rely on a keyboard to navigate it is important that they know which link or form control has focus. Keyboard focus is a visible indicator that identifies the element with focus and moves as your tab through a page.

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Langage of Page](/test-evaluate/easy-checks/language/)

Specifying the language of the page means that assistive technology that speaks content can correctly pronounce words.

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Zoom](/test-evaluate/easy-checks/zoom-levels/)

Some people need to enlarge content in order to read it. When content is zoomed it still needs to legible and usable.

{::nomarkdown}
</div>
{:/}

{::nomarkdown}
{% include box.html type="end" %}
{:/}


{::nomarkdown}
{% include box.html type="start" id="audio-visual" class="sections" h="2" title="Audio/Visual Checks" %}
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Captions](/test-evaluate/easy-checks/captions/)

The audio in video content needs to be available to people who are dead or hard of hearing. Captions are a text version of the speech and non-speech audio information needed to understand the video.

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Transcripts](/test-evaluate/easy-checks/transcripts/)

Transcripts are a text version of the speech and non-speech information in audio content. They are used by people who are Deaf, hard of hearing or who have difficulty processing audio information.

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Audio Description](/test-evaluate/easy-checks/description/)

Audio description provides content to people who are blind and others who cannot see the video adequately. It describes visual information needed to understand the content, including text displayed in the video.

{::nomarkdown}
</div>
{:/}

{::nomarkdown}
{% include box.html type="end" %}
{:/}


{::nomarkdown}
{% include box.html type="start" id="forms" class="sections" h="2" title="Form Checks" %}
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Labels](/test-evaluate/easy-checks/form-field-labels/)

Labels should identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. Labels need to describe the purpose of the form control. 

{::nomarkdown}
</div>
<div>
{:/}

![]({{ "/content/splash-blank.png" | relative_url }}){:.splash}

### [Required Fields](/test-evaluate/easy-checks/required-fields/)

Marking which fields are required makes it easier for people to complete forms.

{::nomarkdown}
</div>
{:/}

{::nomarkdown}
{% include box.html type="end" %}
{:/}