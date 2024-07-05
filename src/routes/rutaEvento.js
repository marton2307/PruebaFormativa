const express = require('express');
const {
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/eventControl')

const router = express.Router();

router.get('/eventos', getAllEvents);
router.post('/create', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
