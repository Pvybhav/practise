const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vidly', {
        useNewUrlParser: true
    })
    .then(() => console.log("connected to MONGODB....!!!"))
    .catch(err => console.error("Could not connect to MONGODB", err));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: authorSchema,
        required: true
    }
}));

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}

async function updateAuthor(courseID) {
    // const course = await Course.findById(courseID);
    const course = await Course.update({_id: courseID}, {
        $set: {
            'author.name': 'vy'
        },
        // $unset:{
        //     'author': ''
        // } // to remove field from db
    });
    // course.author.name = 'vaibhav';
    // course.save();
}
createCourse('Node', new Author({
    name: 'vybhav'
}));

updateAuthor('ID')