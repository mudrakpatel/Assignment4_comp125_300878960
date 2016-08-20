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
    var AddText;
    var CanvasImage;

    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        AddText = new createjs.Text();
        AddText.text = "Online selfie spot";
        AddText.font = "bold 30px Arial";
        AddText.color = "#000000";
        AddText.x = 90;
        AddText.y = 215;
        // AddText.regX = stage.canvas.width * 2;
        // AddText.regY = stage.canvas.height * 2;
        stage.addChild(AddText);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        stage.update();
    }
    //Grabbing the body element and adding an event listener to it
    var body = document.getElementById("body");
    body.addEventListener("click", init());
    /**
     * @ function: gameLoop
     * @ void
     * @ purpose : To have a marquee effect for the text
     */
    function gameLoop() {
        console.log("Entered function gameLoop");
    }
}());