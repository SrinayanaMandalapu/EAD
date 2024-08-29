const express = require('express')
const router = express.Router()
const Student = require('./model/studentModel')


router.get('/', async(req,res) => 
{
    try
    {
           const students = await Student.find()
           res.json(students)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
    {
        try
        {
               const student = await Student.findById(req.params.id)
               res.json(student)
        }
    
    catch(err)
    {
            res.send('Error ' + err)
        }
    })
    

router.post('/', async(req,res) => 
    {
        const student = new Student
       ({
            name: req.body.name,
            rollno: req.body.rollno,
            branch: req.body.branch,
            mobile: req.body.mobile,
            feeReimbersement: req.body.feeReimbersement
        })
    
        try
       {
            const s1 =  await student.save() 
            res.json(s1)
        }
    catch(err)
       {
            res.send('Error')
        }
    })

router.patch('/:id',async(req,res)=> 
    {
        try
       {
            const student = await Student.findById(req.params.id) 
            student.sub = req.body.sub
            const a1 = await student.save()
            res.json(a1)   
        }
    catch(err)
       {
            res.send('Error')
        }
    
    })
    
module.exports = route
