// aca se crean las funciones y se exportan  
const { response } = require('express')


const userGet = (req, res = response ) => {
    res.json({
        msg: 'get API - controller '
   })
  }

  userPut = (req, res = response ) => {
    res.json({
        msg: 'put API - controller'
   })
  }

 userPos =  (req, res = response ) => {

    const {name, old}= req.body;

    res.status(201).json({
        msg: 'post API  - controller ',
        name, old
   })
}

 userDelete = (req, res = response  ) => {
    res.json({
        msg: 'delete API  - controller'
   })
}
  userPath = (req, res = response  ) => {
    res.json({
        msg: 'patch API  - controller'
   })
}

module.exports = {
    userGet,
    userPut,
    userDelete,
    userPos,
    userPath

}