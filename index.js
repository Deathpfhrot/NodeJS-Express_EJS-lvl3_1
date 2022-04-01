const express = require("express")
const PORT = 1870
const newsJSON = require("./news.json")
console.log(newsJSON);

const app = express()

//configuration
app.set('view engine', 'ejs')



//middlewear
app.use((req, _, next) => {
    console.log("new request ", req.method, req.url);
    next()
})

app.use(express.static("public"))

//route
app.get("/", (req, res) => {
    res.render("news", { newsJSON })

})

app.listen(PORT, () => ("server is listing to port: ", PORT))