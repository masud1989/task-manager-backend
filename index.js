const app = require('./app');
const PORT = process.env.PORT || 5000;




app.listen(PORT, ()=>{
    console.log(`App Run on Port:${PORT}`);
})

// const app = require("./app")
// app.listen(5000, ()=>{
//     console.log('App is run on port:5000');
// })