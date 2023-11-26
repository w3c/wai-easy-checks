---
title: "Form Field Labels - Easy Checks"
permalink: /test-evaluate/easy-checks/form-field-labels/
ref: /test-evaluate/easy-checks/form-field-labels/
nav_title: "Form Field Labels"

lang: en
layout: default

github:
  repository: w3c/wai-easy-checks
  path: content/form-field-labels.md
---

## At a Glance

@@ sample image for a for such as the sign-in form from https://auth.w3.org/login

## What are Form Field Labels?

Form field labels are the text we see adjacent to form text fields telling us what information to enter. they also identify other form controls, including checkboxes, radio buttons, and drop-down choices. 

## Who depends on Form Field Labels?

We all depend on form field labels to understand how to interact with a web form. However, some users need the labels to be associated in code to be able to easily interact with the form. In particular:
* screen readers users need codified labels in order to have the form labels and control read out with each form element
* people with poor dexterity need the visual label to be associated with the form field to create a larger clickable area, especially for radio buttons and check boxes

## Checking Form Field Labels

### Sample Form

@@ create a simple form like:
```
<label for="name">Name:</label>
<input id="name" type="text">
<fieldset>
<legend>Which flowers do you like:</legend>
<input id="Rose" type="checkbox" name="flower" value="rose">
<label for="ham">Ham</label><br>
<input id="pepperoni" type="checkbox" name="flower" value="poppy">
<label for="Poppy">Poppy</label><br>
</fieldset>
<button type="submit">Submit</button>
```

### Checking this page
This is just for practice. Also, you can see what the check will look like on an accessible page.

Simply click on the link below:

* [Paul Adam bookmarklet](https://pauljadam.com/bookmarklets/forms.html) - Uses jQuery
* [Pixo and DRES bookmarklets](https://accessibility-bookmarklets.org/install.html) - No jQuery
* [Jim Thatcher bookmarklet](https://jimthatcher.com/favelets/) - No jQuery

### Checking other pages
To check other pages you need to add the check link as a bookmark.

1. Drag the Check Labels link to your browser bookmarks
2. Visit the page you want to check
3. Click on the ‘Check Labels’ link in your bookmarks

### What to look for

While there are many ways to provide a label for screen reader users, only the association between the visual label and the form control asists the low dexterity mouse user and  that is what we've checked for with this bookmark, specifically:
* Did the visual labels get outlined?

You can also try clicking the visual label and checking if it moved the cursor into the text box or activated the check box or radio button.

## Learn more
* [Understanding WCAG 2.2 - Success Criteria 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
* [Associate a label with every form control](https://www.w3.org/WAI/tips/developing/#associate-a-label-with-every-form-control) in the Tips for Developers page
* [Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/) in the Forms tutorial
