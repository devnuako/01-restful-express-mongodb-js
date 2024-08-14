const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World vs Express! & nodemon')
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getXYZ = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getXYZ
}
