const express = require('express');
const app = express();

const { projects } = require('./data.json');

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});


app.get('/project/:id', (req, res) => {
    const projectId = req.params.id;

    if (projectId < projects.length) {
        const project = projects.find( ({ id }) => id === +projectId );
        res.render('project', { project });
    } else {
        res.sendStatus(404);
    }
});


//error handling

//exceeds expectations

//readme


app.listen(3000, () => {
    console.log('The app is running on localhost:3000!')
});