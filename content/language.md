---
title: "Language - Easy Checks"
permalink: /test-evaluate/easy-checks/language/
ref: /test-evaluate/easy-checks/language/
nav_title: "Language"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/language.md
---

## ~~At a Glance~~

@@ screen grab showing bookmarklet result with html language at the top, a word in a sentence in a different language, and a blockquote in another language.

## What is language identified?

Web pages should identify the primary language of the page in the website markup. If there is any content in a different language, that language should be identified.

## Who depends on language being identified?

People who use screen readers or other technologies that convert text into synthetic speech, including people who are blind and people with certain cognitive, language, and learning disabilities depend on the language being identified. When language is identified, then the synthetic speech can use the proper pronunciation.

## Checking Language

Bookmark tool: Language [(i)]

1. From the web page you’re checking, select the “Language” tool in your browser bookmarks.
2. Check that the primary language is identified correctly.
   * If the language is not identified at all, it will display: "HTML document has no lang or xml:lang attributes on page titled..."
   * If the language is identified, it will display something like: "HTML document has lang="en" AND? xml:lang="en" on page titled..."
3. If the page has words in another language, make sure next to it is something like: ```lang="xx"```.

If you want to confirm that the language identified is correct,
* Note the text in quotes after ```lang=```. It's usually two letters.
* Go to the [IANA registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry). Do an in-page search for ```Subtag: ``` with a space before and after the letters.

{::nomarkdown}
{% include box.html type="start" title="Example language look-up" class="" %}
{:/}

The page you're checking has: ```lang=jp```

IANA registry in-page search for: ```Subtag: jp ``` (make sure you have Match Case unchecked)

Shows: ```Description: Japan```

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Learn more

* [Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html) Understanding WCAG Success Criterion 3.1.1
* [Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) Understanding WCAG Success Criterion 3.1.2

## _editor notes_

bookmarklets:
* [Paul Adam bookmarklet](javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/pauljadam/bookmarklets@master/lang.js';var iframes=document.getElementsByTagName('iframe');for(i=0;i<iframes.length;i++) {iframes[i].contentDocument.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/pauljadam/bookmarklets@master/lang.js';}})();) - Note, this is the actual bookmarklet. There is no demo page for this one. Uses jQuery
