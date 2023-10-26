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

This is just for practice. Also, you can see what the check will look like on an accessible page.

Simply click on the link below:

{::nomarkdown}
<p>
  <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23language-check-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23language-check-message%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='language-check-styles'%3E%23language-check-message{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25);z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif}aside{border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23language-check-message%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23language-check-message%20header%20a{float:right;text-decoration:none}%23language-check-message%20div{padding:8px%2016px;}%23language-message%20div%20span{font-weight:500;}%3C/style%3E%22);let%20a=navigator.language||navigator.userLanguage,b=new%20Intl.DisplayNames([a],{type:%22language%22});var%20c=%22%22;let%20d=document.documentElement.lang||document.getElementsByTagName(%22html%22)[0].getAttribute(%22xml:lang%22);c+=d%3F%22Page%20langage%20is:%20%3Cspan%3E%22+d+%22%20(%22+b.of(d)+%22)%3C/span%3E%22:%22Page%20langage%20is%20not%20specified%22,document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Caside%20id=\%22language-check-message\%22%20tabindex=\%22-1\%22%3E%3Cheader%3EPage%20Language%3Ca%20href=\%22javascript:document.querySelector('%23language-check-message').remove();\%22%20aria-label=\%22dismiss\%22%3EX%3C/a%3E%3C/header%3E%3Cdiv%3E%22+c+%22%3C/div%3E%3C/aside%3E%22),document.getElementById(%22language-check-message%22).focus()}();">Check page language</a>
</p>
{:/}

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

The bookmarklet is based on the work by Paul Adam.

bookmarklets:
* [Paul Adam bookmarklet](javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/pauljadam/bookmarklets@master/lang.js';var iframes=document.getElementsByTagName('iframe');for(i=0;i<iframes.length;i++) {iframes[i].contentDocument.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/pauljadam/bookmarklets@master/lang.js';}})();) - Note, this is the actual bookmarklet. There is no demo page for this one. Uses jQuery

<script>
  
</script>
