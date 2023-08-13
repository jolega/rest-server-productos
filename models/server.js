
const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app  = express ()
        this.port = process.env.PORT

        // Middleware

        this.middleware();

        //routes
        this.routes();
    }




    middleware () {

        this.app.use( express.static('public'))

        this.app.use(cors())
    }

    routes(){

        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get API'
           })
          })

        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put API'
           })
          })

        this.app.post('/api', (req, res) => {
            res.status(201).json({
                msg: 'post API'
           })
          })

        
        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete API'
           })
          })

          this.app.patch('/api', (req, res) => {
            res.json({
                msg: 'patch API'
           })
          })

    }

    listen() {
        this.app.listen(  this.port, () => {
            console.log('Server running on the port',  this.port)
        })
    }


}

module.exports = Server ;