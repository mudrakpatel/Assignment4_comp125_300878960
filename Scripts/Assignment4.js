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
        AddText.font = "bold 35px Arial";
        AddText.color = "#000000";
        AddText.x = 100;
        AddText.y = 100;
        stage.addChild(AddText);
        stage.update();
    }

}());