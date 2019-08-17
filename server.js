const connect = "Hello from node.js!!!";
// console.log(connect);

// testing for function basics
((err, next)=>{
    if(err) return next(err);
    console.log(connect); 
})();