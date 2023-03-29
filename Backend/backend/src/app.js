// Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const errorHandler = require('./love/dMiddleware/aError');
const baseRoute = require('./love/aMCR/cRoute/base/aBaseRoute');
const userRoute = require('./love/aMCR/cRoute/aUserRoute');
const homeRoute = require('./love/aMCR/cRoute/bHomeRoute');
const aboutRoute = require('./love/aMCR/cRoute/cAboutRoute');
const experienceRoute = require('./love/aMCR/cRoute/dExperienceRoute');
const serviceRoute = require('./love/aMCR/cRoute/fServiceRoute');
const portfolioRoute = require('./love/aMCR/cRoute/hPortfolioRoute');
const portfolioCardRoute = require('./love/aMCR/cRoute/iPortfolioCardRoute');
const eventRoute = require('./love/aMCR/cRoute/jEventRoute');
const eventCardRoute = require('./love/aMCR/cRoute/kEventCardRoute');
const blogRoute = require('./love/aMCR/cRoute/lBlogRoute');
const blogCardRoute = require('./love/aMCR/cRoute/mBlogCardRoute');

// App
const app = express()

// Use
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(cors({ origin: ["http://localhost:3000", "http://localhost:3001"], credentials: true }))
app.use("/api/v1/base", baseRoute)
app.use("/api/v1/user", userRoute)
app.use("/api/v1/home", homeRoute)
app.use("/api/v1/about", aboutRoute)
app.use("/api/v1/experience", experienceRoute)
app.use("/api/v1/service", serviceRoute)
app.use("/api/v1/portfolio", portfolioRoute)
app.use("/api/v1/portfolio-card", portfolioCardRoute)
app.use("/api/v1/event", eventRoute)
app.use("/api/v1/event-card", eventCardRoute)
app.use("/api/v1/blog", blogRoute)
app.use("/api/v1/blog-card", blogCardRoute)

app.use(errorHandler)


module.exports = app
