---
#permalink: /mystery/
title: "Are you ready?"
layout: single
---

Are you ready?

    <div class="row">
        <div class="leftcolumn">
            <div class="card">
                <img class="image curved" src="images/unsplash-hearts.jpg">
            </div>
        </div>


        <div class="rightcolumn">

            <div class="card" style="text-align:center;">
                <h2>000 Mission Begins...</h2>


                <p>Are you ready to play a game?!</p>
                <p><code>YES</code> or <code>NO</code></p>

                <form class="form1" onSubmit="checkCODE(); return false; ">
                    <input class="form1" type="text" id="enterCODE" required autofocus>
                </form>

                <p><button id="NEXT" class="button button-green" type="button" style="visibility:hidden" ; onclick="clickNEXT()">NEXT</button></p>
                <p id="checkCODE"></p>
                <p><button class="button button-blue" type="button" value="checkMyCode" onclick="checkCODE()">CHECK MY CODE</button></p>


            </div>
        </div>

    </div>



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
