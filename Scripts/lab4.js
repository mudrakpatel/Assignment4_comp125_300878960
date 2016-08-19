/**
 * @ author Mudrak Patel
 * @ student id: 300878960
 * @ fileName: lab4.js
 * @ purpose: To read data from-> paragraphs.json and to show the data in index.html page
 */
var xhr_AboutMeParagraph;
window.addEventListener("load", readParagraph);



function readParagraph() {
    xhr_AboutMeParagraph = new XMLHttpRequest();
    xhr_AboutMeParagraph.open("GET", "Scripts/paragraphs.json", true);
    xhr_AboutMeParagraph.send(null);
    xhr_AboutMeParagraph.addEventListener("readystatechange", function() {
        var myData = JSON.parse(xhr_AboutMeParagraph.responseText);
        if ((xhr_AboutMeParagraph.readyState === 4) && (xhr_AboutMeParagraph.status === 200)) {
            document.getElementById("AboutMeParagraph").innerHTML = myData.paragraph;
        }
    }, this);
}