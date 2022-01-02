import Wiz from "./wiz/wiz.js";

let wiz= new Wiz();
console.log("wiz",wiz);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let i = setInterval(()=>{
    wiz.update(1);
   //-------------------------------------
},100);

     // Create the application helper and add its render target to the page
     let app = wiz.app;
     document.body.appendChild(app.view);

     // Create the sprite and add it to the stage
     let sprite = PIXI.Sprite.from('/assets/branch.png');
     app.stage.addChild(sprite);
     let components = wiz.components;
     components.forEach(c =>{
        //--there r 3 items in component struct
        // the comp is actual pixi component 
        app.stage.addChild(c.comp);
     });

     // Add a ticker callback to move the sprite back and forth
     let elapsed = 0.0;
     app.ticker.add((delta) => {
       elapsed += delta;
       sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;

       components.forEach(c =>{
        c.comp.y += 1;
        //--there r 3 items in component struct
        // the comp is actual pixi component 
        //app.stage.addChild(c.comp);
     });




     });