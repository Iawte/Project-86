var canvas = new fabric.Canvas("myCanvas");
var heroWidth = 30;
var heroHeight = 30;
var hero1 = "";
var hero2 = "";

function heroImage() {
    fabric.Image.fromURL("mBBQzTW.jpg", function (Img) {
        hero1 = Img;
        hero1.scaleToWidth(150);
       hero1.scaleToHeight(140);
       hero1.set({
        });
        canvas.add(hero1);
    });
}


