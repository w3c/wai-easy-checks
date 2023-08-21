---
title: "Image Alternative Text - Easy Checks"
permalink: /test-evaluate/easy-checks/image-alt/
ref: /test-evaluate/easy-checks/image-alt/

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/image-alt.md
---

## At a Glance

@@ side by side images of the same page - left with an image on the page, right with the image replaced with it's alt-text

Image alternative text is the text alternative for an image.

## What is Image Alternative Text?

Image alternative text is a short description of the image, or rather the important aspects of an image that led to it being included on a page. Image alternative text is often refered to just as alt-text.

## Who depends on Image Alternative Text?

The alternative text for an image is crucial for many people to help them understand the information on a page including:
* People who can't see the image or see it clearly due to blindness or low vision
* People who might be having the page read to them as result of learning disabilities or low literacy
* People who might have very low internet connection speeds, or low download limits, and turn images off

## Checking Image Alternative Text

On the web page you're checking the image alternative text for, click the [[name of bookmarklet]]. The page should now display the image with it's alt-text adjacent @@ add image like <img src="https://www.dropbox.com/scl/fi/x47gntly6ngkpz3qnbeyk/AltText-null.png?rlkey=i8ju3o6gkuxarneb58tc2lmph&dl=0)g">. Check for:
* Images with information relevant to the page's content have alt-text that decribes that important information
* Complex images like graphs and charts have short alt-text that describes the type of image and a short summary of the key point
  ** Complex images should have the detail decribed elsewhere on the page (or on a separate page with a link within the current page)
* Images with text should have the text in the alt-text
* Images that appear to be just to be 'pretty' should display as alt=""
* Images that are functional, like a link or a button, should have alt-text that described the destination page or the function of the button

@@ bookmarklet options:
* [Paul Adam bookmarklet](https://pauljadam.com/bookmarklets/images.html) - Uses jQuery 
* [Pixo and DRES bookmarklets](https://accessibility-bookmarklets.org/install.html) - No jQuery
* [Ian Lloyd bookmarklet](https://a11y-tools.com/bookmarklets/#listimages) - No jQuery (I think)

## Learn more

* [User story of someone relyng on image alternative text to understand the page information](https://www.w3.org/WAI/people-use-web/user-stories/#accountant)
* [Images Tutorial in Tutorials](https://www.w3.org/WAI/tutorials/images/)
* [Non-text Content - Understanding WCAG Success Criterion 1.1.1 Level A](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
