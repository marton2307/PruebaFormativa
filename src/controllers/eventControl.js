
const Event = require('../modules/event');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEvent = async (req, res) => {
    const event = new Event({
        name: req.body.name,
        ubicacion: req.body.ubicacion,
        description: req.body.description,
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Evento no encontrado' });

        event.name = req.body.name || event.name;
        event.ubicacion = req.body.ubicacion || event.ubicacion;
        event.description = req.body.description || event.description;

        const updatedEvent = await event.save();
        res.json(updatedEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Evento encontrado' });

        await Event.deleteOne({ _id: req.params.id });
        res.json({ message: 'Evento eliminado correctamete' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
