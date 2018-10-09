const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vidly', {
        useNewUrlParser: true
    })
    .then(() => console.log("connected to MONGODB....!!!"))
    .catch(err => console.error("Could not connect to MONGODB", err));

const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        id: 'Author'
    }
}));

async function createAuthor(name, bio, website){
    const author = new Author({
        name,
        bio,
        website
    });
    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });
    const result = await course.save();
    console.log(result);
}
async function listCourses() {
    const courses = await Course
        .find()
        .populate('author -_id')
        .select('name');
    console.log(courses);
}

createAuthor('vybhav', 'my bio', 'my website');
// createCourse('Node', 'id');
// listCourses();