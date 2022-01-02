import Wiz from "./wiz/wiz.js";

let wiz= new Wiz();
console.log("wiz",wiz);
let batch_number = 1;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

     // Create the application helper and add its render target to the page
     let app = wiz.app;
     document.body.appendChild(app.view);

    
     let components = wiz.components;
     components.forEach(c =>{
        app.stage.addChild(c.comp);
     });

     // Add a ticker callback to move the sprite back and forth
     let elapsed = 0.0;
     app.ticker.add((delta) => {
     
    components.forEach(component =>{
        component.agfs.forEach(agf =>{
            if (agf.batch_number == batch_number){
                let u = agf.run();
                component.comp[agf.component_target] = u;
            }
        });
    });




     });