const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("pie-order", (size, topping)=>{
    console.log(`Baking a ${size} pie with ${topping}`)
});
emitter.on("pie-order", (size, topping)=>{
    if(topping==="mushrooms"){
        console.log("Serving pie with coca cola");
    }
})
//emitter.on("pie-order", (size,topping))
emitter.emit("pie-order", "large", "mushrooms");