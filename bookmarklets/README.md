# Considerations in Javascript

Quotes are tricky to deal with particularly multiple embedded quotes.

Avoid using quotes like:

  ```link.insertAdjacentHTML("beforebegin", '<span class=\'skiplink-span\'>Skip link connects to id=\'' + anchorHash + '\'</span>');```

Instead use:

  ```link.insertAdjacentHTML("beforebegin", '<span class="skiplink-span">Skip link connects to id="' + anchorHash + '"</span>');```
  
One situation where this is unavoidable is where you have 

  ```document.querySelector('body').insertAdjacentHTML('afterbegin','<aside id="wai-info-box" tabindex="-1" class="wai-error"><header>Missing skip link?<a href="javascript:document.querySelector("#wai-info-box").remove();" aria-label="dismiss">X</a></header><div>' + error + '</div></aside>');```
# Creating bookmarklets from Javascript

1. Copy Javascript to [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/#1)
2. Copy encoded Bookmarklet from the above and paste into a text file
3. Search for \%22 and replace with %27 - the minifier converts "\'" to "\"" which causes problems when the code is copied into the 