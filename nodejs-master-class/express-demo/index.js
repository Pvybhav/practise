const express = require('express');
const app = express();
const Joi = require('joi');
const port = process.env.PORT || 3000;
const courses = [
    {
        id: 1,
        name: "course-1"
    },
    {
        id: 2,
        name: "course-2"
    },
    {
        id: 3,
        name: "course-3"
    }
];

app.use(express.json()); // acts as a middleware

const validateCourse = (course) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(course, schema);
    return result;
}

// GET REQUEST //

app.get('/', (req, res)=>{
    res.send("Hello");
});

app.get('/api/courses/', (req, res) =>{
    res.send(courses);
});

// app.get('/api/courses/:year/:month', (req, res) =>{
//     console.log("Year received from req params : "+req.params.year);
//     console.log("Month received from req params : " + req.params.month);
//     res.send(req.params);
// });

app.get('/api/courses/:id', (req, res) =>{
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The requested course was not found");
    }
    res.send(course);
});

// POST REQUEST //

app.post('/api/courses/',(req, res)=>{
    const { error } = validateCourse(req.body);
    
    // 400 --> Bad Request  
    if(error) return res.status(400).send(error.details[0].message);
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    
    courses.push(course);
    res.send(course);
});

// PUT REQUEST //
app.put('/api/courses/:id', (req, res) =>{

    const course = courses.find(course => course.id === parseInt(req.params.id));
    
    // 404 --> not found
    if (!course) return res.status(404).send("The requested course was not found");

    const { error } = validateCourse(req.body);

    // 400 --> Bad Request  
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res)=>{
    const course = courses.find(course => course.id === parseInt(req.params.id));

    // 404 --> not found
    if (!course) return res.status(404).send("The requested course was not found");

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(courses);
})
app.listen(port, ()=>{
    console.log(`Listening on Port ${port}, run http://localhost:${port} in browser`);
});

