---
title: "Required Fields - Easy Checks"
permalink: /test-evaluate/easy-checks/required-fields/
ref: /test-evaluate/easy-checks/required-fields/
nav_title: "Required Fields"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/required-fields.md
---

@@ lets put a couple of variations of indicating 'required' fields at the top this page.
* using the word 'required' and
* indicating required via a red asterisk.

## What is a Required Field?

A required form field is one that must be competed before you Submit the form or you will get an error mesage of some sort indicating the form isn't complete.

The best way to indicate visually (and via the form field label) is to include the word 'required' as part of the label. However, many forms rely on a small red asterisk '\*' adjacent to the form field label to indicate a required field. Unfortunately the asterisk is often not announced to screen reader users as it's considered punctuation by them. People with low vision can ofetn miss the '\*' too due to it's small size.

Some forms, especially Government forms, are starting to state that all fields are required unless marked 'optional'.

A required field can also be flagged as required in the HTML code, but if it's not indicated visually and aurally, then everyone is like to receive an error message that the required fields haven't been completed.

## Who depends on Required Fields?

All of us need to know which form fields are required as we fill in a form on the web. If you're blind and rely on a screen reader then you need to have the required fields indicated aurally by your screen reader.

## Checking for Required Fields

@@ checks still to be confirmed and competed [AA]

### Checking this page

This is just for practice. Also, you can see what the check will look like on an accessible page.

Simply click on the link below:

{::nomarkdown}
<p>
  <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23wai-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23wai-info-box%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:fixed;bottom:5em;right:5em}.wai-error{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25)}.required-span{display:block;width:fit-content;color:black;font-weight:bold;font-size:small;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;background-color:%23eed009;padding:4px;speak:literal-punctuation}%3C/style%3E%22);const%20a=Array.prototype.slice.call(document.querySelectorAll(%22label%22)),b=[],c=[];if(a){for(let%20d,e=0;e%3Ca.length;e++){d=%22%22,(d=a[e].querySelector(%22input,select,textarea%22))%3F(d.required||a[e].innerText.search(/\*/))%26%26b.push({labelText:a[e].innerText,label:a[e],field:d}):a[e].getAttribute(%22for%22)%26%26(d=document.getElementById(a[e].getAttribute(%22for%22)),(d.required||0%3C=a[e].innerText.search(/\*/))%26%26b.push({labelText:a[e].innerText,label:a[e],field:d}));let%20f=[...a[e].innerText.matchAll(/\w{2,}/g)];f.forEach(a=%3E{c[a[0]]%3Fc[a[0]]++:c[a[0]]=1})}for(let%20d%20in%20c)if(2%3Cc[d]){let%20c=a.filter(function(a){return%200%3C=a.textContent.search(d)});if(0%3Cc.length)for(let%20a=0;a%3Cc.length;a++)b[c[a].innerText]||b.push({labelText:c[a].innerText,label:c[a],requiredText:d})}for(let%20a,c=0;c%3Cb.length;c++)a=b[c],a.requiredText%3F(a.label.style.setProperty(%22outline%22,%22%23eed009%202px%20dashed%22),a.label.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class='required-span'%3ECorrectly%20marked%20with%20'%22+a.requiredText+%22'%3F%3C/span%3E%22)):(a.label.style.setProperty(%22outline%22,%22%23eed009%202px%20dashed%22),a.label.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class='required-span'%3ERequired%20field%3C/span%3E%22))}document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/required-fields/\%22%3EChecking%20Required%20Fields%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Check required fields</a>
</p>
{:/}

### Checking other pages

To check other pages you need to add the check link as a bookmark.

1. Drag the <a class="button active" href="javascript:void%20function(){(el=document.querySelector(%22%23wai-styles%22))%26%26el.remove(),(el=document.querySelector(%22%23wai-info-box%22))%26%26el.remove(),document.querySelector(%22body%22).insertAdjacentHTML(%22afterbegin%22,%22%3Cstyle%20id='wai-styles'%3E%23wai-info-box{z-index:1000;color:black;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;border:solid%201px%20%23ddd;background-color:%23fff;box-shadow:0%204px%208px%200%20rgba(0,0,0,0.2),0%206px%2020px%200%20rgba(0,0,0,0.19);}%23wai-info-box%20header{font-weight:700;background-color:%23f2f2f2;color:%23005a6a;padding:8px%2016px;}%23wai-info-box%20header%20a{float:right;text-decoration:none}%23wai-info-box%20div{padding:8px%2016px;}.wai-more-info{position:fixed;bottom:5em;right:5em}.wai-error{position:fixed;width:40%25;top:40%25;left:50%25;transform:translate(-50%25,-50%25)}.required-span{display:block;width:fit-content;color:black;font-weight:bold;font-size:small;font-family:Noto%20Sans,Trebuchet%20MS,Helvetica%20Neue,Arial,sans-serif;background-color:%23eed009;padding:4px;speak:literal-punctuation}%3C/style%3E%22);const%20a=Array.prototype.slice.call(document.querySelectorAll(%22label%22)),b=[],c=[];if(a){for(let%20d,e=0;e%3Ca.length;e++){d=%22%22,(d=a[e].querySelector(%22input,select,textarea%22))%3F(d.required||a[e].innerText.search(/\*/))%26%26b.push({labelText:a[e].innerText,label:a[e],field:d}):a[e].getAttribute(%22for%22)%26%26(d=document.getElementById(a[e].getAttribute(%22for%22)),(d.required||0%3C=a[e].innerText.search(/\*/))%26%26b.push({labelText:a[e].innerText,label:a[e],field:d}));let%20f=[...a[e].innerText.matchAll(/\w{2,}/g)];f.forEach(a=%3E{c[a[0]]%3Fc[a[0]]++:c[a[0]]=1})}for(let%20d%20in%20c)if(2%3Cc[d]){let%20c=a.filter(function(a){return%200%3C=a.textContent.search(d)});if(0%3Cc.length)for(let%20a=0;a%3Cc.length;a++)b[c[a].innerText]||b.push({labelText:c[a].innerText,label:c[a],requiredText:d})}for(let%20a,c=0;c%3Cb.length;c++)a=b[c],a.requiredText%3F(a.label.style.setProperty(%22outline%22,%22%23eed009%202px%20dashed%22),a.label.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class='required-span'%3ECorrectly%20marked%20with%20'%22+a.requiredText+%22'%3F%3C/span%3E%22)):(a.label.style.setProperty(%22outline%22,%22%23eed009%202px%20dashed%22),a.label.insertAdjacentHTML(%22afterbegin%22,%22%3Cspan%20class='required-span'%3ERequired%20field%3C/span%3E%22))}document.querySelector(%22body%22).insertAdjacentHTML(%22beforeend%22,%22%3Caside%20id=\%22wai-info-box\%22%20class=\%22wai-more-info\%22%3E%3Cheader%3EFind%20out%20more%3C/header%3E%3Cdiv%3E%3Ca%20href=\%22https://w3.org/wai/easy-checks/required-fields/\%22%3EChecking%20Required%20Fields%3C/a%3E%3C/div%3E%3C/aside%3E%22)}();">Check required fields</a> link to your browser bookmarks
2. Visit the page you want to check
3. Click on the ‘Check required fields’ link in your bookmarks

### What to look for

<form>
  <p>
    <label for="name1">First name</label>
    <input id="name1" required="required">
  </p>
  <p>
    <label for="name2">Surname *</label>
    <input id="name2">
  </p>
  <p>
    <label for="name3">Location <span class="marker">*</span></label>
    <input id="name3">
  </p>
  <p>
    <label>ZIP
      <input required="required">
    </label>
  </p>
  <p>
    <label>Country *
      <input>
    </label>
  </p>
  <p>
    <label for="not-required">Favorite color</label>
    <input id="not-required">
  </p>
  
  <p>
    <label>Month (required)</label>
    <input>
  </p>
  <p>
    <label>Day (required)</label>
    <input>
  </p>
  <p>
    <label>Year (required)</label>
    <input>
  </p>
</form>

## Learn more
