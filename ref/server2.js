const funk =()=>{
    var date_ob = new Date();
    var date = (date_ob.getMinutes())
    if (date > 59) {
        for (let i = 0; i < 11; i++) {
            fs.unlink(path.join(__dirname, '../containers', `container${i}.js`),
                (err) => {
                    if (err) throw new Error(err)
                }
            )
        }
        //failery jnjelu hamar
    } else {
        for (let i = 1; i < 11; i++) {
            fs.writeFile(path.join(__dirname, '../containers', `container${i}.js`),
                `dsadas`,
                (err) => {
                    if (err) throw err
                }
            )
        }
        // failer sarqelu hamar
    }
}
module.exports = funk