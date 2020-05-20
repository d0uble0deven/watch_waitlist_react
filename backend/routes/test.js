const express = require('express');
const router = express.Router();
const testCtrl = require('../controllers/test')

router.get('/getData', testCtrl.index)
router.post('/putData', testCtrl.create)
router.delete('/deleteData', testCtrl.delete)
router.post('/updateData', testCtrl.update)

module.exports = router;