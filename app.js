console.log("server will run here");
const app = require('express')();
app.get('/',(req,res) => {
    req.json({message : "server on aws running"})
})
app.listen(7000,()=>{
    console.log("server on port 7000");
})
// console.log(new Date());

//create a new repo
// add .readme .gitignore files
// git clone url of repo
// open project in vscode (cd repoFolder)
// npm init -y
// add new file app.js with some console statements
// npm i
// git add .
// git commit -m "message to add file"
// git push 
