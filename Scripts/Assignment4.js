/**
 * @Author : Mudrak Patel
 * @ course : COMP125
 * @ Assignment : 4 i.e. banner add
 */

//Creating an IFEE
(function() {
    //Grabbing the required elements present on index page
    var canvas;
    //Script for declaring variables of canvas
    var stage;

    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        var AddText = new createjs.Text();
        AddText.text = "Online selfie spot";
        AddText.font = "bold 30px Arial";
        AddText.color = "#000000";
        AddText.x = 10;
        AddText.y = 165;
        stage.addChild(AddText);
        stage.update();
    }
    //Grabbing the body element and adding an event listener to it
    var body = document.getElementById("body");
    body.addEventListener("click", init());
}());