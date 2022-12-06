const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.get('/', getGoals);

// router.post('/',setGoal);

// router.put('/:id', updateGoals);

// router.delete('/:id', deletegoals);

module.exports = router