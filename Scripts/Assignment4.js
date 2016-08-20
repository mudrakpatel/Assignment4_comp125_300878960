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
        CanvasImage = new createjs.Bitmap("../Assets/camera.png");
        AddText = new createjs.Text();
        AddText.text = "Online selfie spot";
        AddText.font = "bold 30px Verdana";
        AddText.color = "#000000";
        AddText.regX = 250 * 0.5;
        AddText.regY = 250 * 0.5;
        AddText.x = 125;
        AddText.y = 340;
        stage.addChild(AddText);
        stage.addChild(CanvasImage);
        CanvasImage.x = 15;
        createjs.Ticker.framerate = 47;
        createjs.Ticker.addEventListener("tick", gameLoop);
        AddText.addEventListener("click", goURL, false);

    }
    //Grabbing the body element and adding an event listener to it
    var body = document.getElementById("body");
    body.addEventListener("load", init());
    /**
     *@ function: gameLoop
     @ purpose: To handle Ticker event
     @ void 
     */
    function gameLoop() {
        AddText.x += 3;
        if (AddText.x > 385) {
            AddText.x = 0;
        }
        stage.update();
    }
    /**
     * @ function: goURL
     * @ purpose: to send user to a particular website when the canvas text is clicked
     * @ void
     */
    function goURL() {
        window.open("http://www.cameroid.com/snap.php");
    }
}());