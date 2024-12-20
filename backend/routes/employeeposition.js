const express = require('express')
const {
  getEmployees, 
  getEmployee, 
  createEmployee, 
  deleteEmployee, 
  updateEmployee
} = require('../controllers/employeepositionController')

const router = express.Router()

// GET all employees position
router.get('/', getEmployees)

// GET a single employee position
router.get('/:id', getEmployee)

// POST a new employee position
router.post('/', createEmployee)

// DELETE a employee position
router.delete('/:id', deleteEmployee)

// UPDATE a employee position
router.patch('/:id', updateEmployee)

module.exports = router