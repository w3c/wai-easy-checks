---
title: "Moving, Flashing, or Blinking - Easy Checks"
permalink: /test-evaluate/easy-checks/moving/
ref: /test-evaluate/easy-checks/moving/

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/moving.md
---

## ~~At a Glance~~

{::nomarkdown}
{% include_cached box.html type="start" title="Example: Show play/stop and selection controls in carousel design" class="example" %}
{:/}

<div class="autoplay">
  <figure>
    <div>
      {% include_cached img.html src="carousel_controls.png" alt="Example of carousel with play and slide selection controls" %}
    </div>
  </figure>
</div>

{::nomarkdown}
{% include_cached box.html type="end" %}
{:/}

## What is moving, flashing, or blinking content?

Moving, flashing, or blinking content includes carousels (like the example above), ads, videos, auto-updating stock tickers, scrolling news feeds, and more.

## Who depends on controlling moving, flashing, or blinking content?

Some people with visual processing disorders or attention deficit disorder need to be able to control moving content.

Flashing or blinking content can cause seizures in people with photosensitive epilepsy, particularly if it:
1.  flashes more than three times in one second,
2.  covers a large enough area of the screen, and
3.  is bright enough.

Potential accessibility problems with moving, flashing, or blinking content include:
1.  Understanding moving information — Some people read and process information slowly. The content may disappear before people have time to read it. Some people have difficulty tracking moving objects.
2.  Distraction from moving content — Moving content can make focusing and reading elsewhere difficult; that is, people cannot focus on some content because the movement in another area of the web page grabs their attention.

## Checking it

*   Check if there is any **moving, blinking, or scrolling information** that starts automatically and lasts more than five seconds. If there is, check that there is a way for the user to pause, stop, or hide the movement.
*   Check if there is any **auto-updated information** (such as stock price). If there is, check that there is a way for the user to pause, stop, or hide the updated information, or for the user to control the frequency of the update.
*   Check that **no content flashes or blinks** more than three times in one second. If it does, further evaluation is needed as explained in [Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold).

## Learn more

* [Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide) – Understanding Success Criterion 2.2.2 for WCAG (Level A)
* [Carousel Animations](https://www.w3.org/WAI/tutorials/carousels/animations/) – WAI Web Accessibility Tutorial
* [Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold) Understanding Success Criterion 2.3.1 for WCAG (Level A)

## _editor notes_

@@ EOWG - maybe at the top have the image from [Provide controls for content that starts automatically](https://www.w3.org/WAI/tips/designing/#provide-controls-for-content-that-starts-automatically)
