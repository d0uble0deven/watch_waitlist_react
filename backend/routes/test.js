const express = require('express');
const router = express.Router();
const testCtrl = require('../controllers/test')

// console.log(testCtrl)
router.get('/getData', testCtrl.index)
router.post('/putData', testCtrl.create)
router.delete('/deleteData', testCtrl.delete)
router.post('/updateData', testCtrl.update)


// this is our get method
// this method fetches all available data in our database
// router.get('/getData', );

// this is our update method
// this method overwrites existing data in our database
// router.post('/updateData',);

// this is our delete method
// this method removes existing data in our database
// router.delete('/deleteData', );

// this is our create method
// this method adds new data in our database
// router.post('/putData',);


module.exports = router;