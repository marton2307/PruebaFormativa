const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./src/routes/rutaEvento');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.use('/api', eventRoutes);

mongoose.connect('mongodb://localhost:27017/eventdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
