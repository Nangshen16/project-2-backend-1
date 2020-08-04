const express = require('express');
const router =  express.Router();
const {findAllStudents, createStudent, updateStudent, deleteStudent, 
    findAllGuardians, findGuardianByID, createGuardian} = require('../controllers/index');

//test conneciton
// router.get('/', (req,res) => {
//     res.send('routes working');
// })

//STUDENT ROUTERS

router.get('/students',findAllStudents);

router.post('/students', createStudent);

router.put('/students/:id', updateStudent);

router.delete('/students/:id', deleteStudent);

//GUARDIAN ROUTERS
router.get('/guardians', findAllGuardians);
router.get('/guardians/:id', findGuardianByID);


router.post('/guardians', createGuardian);


module.exports = router;