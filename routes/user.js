
const { Router } = require('express')

const { 
  userGet, 
  userPut, 
  userPos, 
  userDelete, 
  userPath 
} = require('../controllers/users')

const router = Router ();

router.get('/',  userGet)
router.put('/:id',  userPut)
router.post('/', userPos)
router.delete('/', userDelete )
router.patch('/',  userPath )


module.exports = router ;