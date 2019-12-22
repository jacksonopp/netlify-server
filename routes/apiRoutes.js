module.exports = (app) => {
  app.get("/api/test", (req, res) => {
    console.log("something happened &!@^%#&!@^%#&!@^%#&!@^%#&!@^%#@&!^%")
    res.json({ message: "test connected" })
  })
}
