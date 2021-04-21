---
#permalink: /mystery/
title: "Are you ready?"
layout: default
---

Are you ready?

![unsplash-hearts](images/unsplash-hearts.jpg)

## Are you ready?

YES / NO

<form class="form1" onSubmit="checkCODE(); return false; ">
    <input class="form1" type="text" id="enterCODE" required autofocus>
</form>

<button id="NEXT" class="button button-green" type="button" style="visibility:hidden" ; onclick="clickNEXT()">NEXT</button>

<p id="checkCODE"></p>

<button class="button button-blue" type="button" value="checkMyCode" onclick="checkCODE()">CHECK MY CODE</button>

<script src="js/000-mission-begins.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WSPWTG9RX7"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-WSPWTG9RX7');
</script>
