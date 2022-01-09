
The animation class is to animate ONE value  per animation class.
At the moment the **AniAbs** is a base class that exports the base animation obj and has the basic data that is required by all future AGFs (animation generating functions).
this.renderer = data.renderer;
this.comp = data.comp;
this.stage = data.stage;
this.begin = data.begin || 0;
this.final = data.final || 100;
this.increment = data.increment || 1;
//it can be changed to width,height,y etc
this.comp_target = data.comp_target || "x";
this.current = this.begin;
    //---and
this.agf_data = {};

- *To add an animation* we ask the batch to give us one and for that we give it the basic data:: The batch injects his own data into that and pass it on to **AniAbs** class that creates an animation class.
- The batch will add it to its own array and then return it.
- The composition script can further add remove it.
- If we want we can just get a default animation object from batch and later ammend it.

## Where are all the AGFs
- the agfs are now just functions, that it nothin more. if they need to store values that they can in agf_data inside AniAbs. If the need more values has to come from Batch.