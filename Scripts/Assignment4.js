/**
 * @Author : Mudrak Patel
 * @ course : COMP125
 * @ Assignment : 4 i.e. banner add
 */

//Creating an IFEE
(function() {
    //Grabbing the required elements present on index page
    var canvas = document.getElementById("canvas");
    //Script for declaring variables of canvas
    var stage = new createjs.Stage("canvas");
    var AddText = new createjs.Text("Online selfie spot", "bold 86px Arial", "black");
    var AddText_X = AddText.x;
    var AddText_Y = AddText.y;
    /**
     * @ function: 
     * @ purpose:
     */
    function Refresher() {
        AddText_X += 3;
        if (AddText_X > stage.canvas.width) {
            AddText_X = 0;
        }
        stage.update();
    }
}());