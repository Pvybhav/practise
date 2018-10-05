const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongodb", { useNewUrlParser: true })
    .then(() => console.log("connected to db..."))
    .catch(err => console.log("error while connecting", err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// types of schma available in mongoose

// String
// Number
// Date
// Buffer
// Boolean
// ObjectID
// Array

// pascal case to name classes and camel case for objects

const Course = mongoose.model('Course', courseSchema); // Class

// CREATING DOCUMENTS

// await should place inside async function //
// async function createCourse(){
//     const course = new Course({ // object
//         name: "Reactjs",
//         author: 'vybhav',
//         tags: ['reactjs', 'frontend'],
//         isPublished: true
//     });
//     const result = await course.save(); // returns a promise
//     console.log(result);
// }
// createCourse();

// FINDING THE RECORDS

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
        .find({ author: 'vybhav', isPublished: true }) // the matched records will come
        .limit(10) // to limit no.of records from db
        .skip((pageNumber - 1) * pageSize) // --> for pagination 
        // --> if pageNumber is 1, it wont skip any records and 
        // if pageNumber is 3 then it will skip 20 records
        .sort({ name: 1 }) // 1 is for ascending and -1 is for descending order
        .sort('name') // for ascending order
        .sort('-name') // for descending order
        
        .find({isPublished: true, tags : { $in : ['frontend', 'backend'] }}) // find tags in frontend and backend 
        // Breaking the above line into two lines
        .find({isPublished: true})
        .or([{tags: 'frontend'}, {tags: 'backend'}]) // alternate for the above line 
        
        .select({name: 1, tags: 1}) // returns only name and tags columns
        .select('name author') // returns only the name and author from collection
        .count(); // returns the no.of documents exists after applying all filters
    console.log(courses);
}

getCourses();


// COMPARISION OPERATORS

// eq
    // .price({price: {$eq: 1000}})
// ne
// lt
    // .price({price: {$lt: 1000}})
// gt
    // .price({price: {$gt: 1000}})
// gte
// lte
    // .price({price: {$lte: 10000, $gte: 2000}})
// in
    // .price({price: {$in: [1000, 2000, 2500]}})
// nin
    // .price({price: {$nin: [1000, 2000, 2500]}})

// LOGICAL OPERATORS

    // .or([{author: 'vybhav'}, {ispublished: true}])  // returns courses authored by vybhav or ispublished is true
    // .and([{author: 'vybhav'}, {ispublished: true}])  // returns courses authored by vybhav and ispublished is true


// REGULAR EXPRESSIONS
// ^ --> represents a string that starts with some string
// $ --> represents a string that ends with some string
    // .find({author: /^vybhav/}) --> case sensitive
    // .find({author: /podala$/i}) --> case in-sensitive
    // .find({author: /.*bhav.*}) --> checks for zero or more characters before or after 'bhav'


// CMD FOR IMPORTING DATA FROM JSON FILE

// mongoimport --db <database-name> --collection courses --file <filename>.json --jsonArray


// UPDATING DOCUMENTS

// Update Operators
// $currentDate
// $inc
// $min
// $max
// $mul
// $rename
// $set
// $setOnInsert
// $unset


async function updateCourse(id){

    // Approach - 1 --> Query first
    const course = await Course.findById(id);

    if(!course) return;

    course.isPublished = false;
    course.author = "another author"
    // OR
    course.set({
        isPublished: false,
        authour: 'Another Author'
    });

    const result = await course.save()


    // Approach - 2 --> update first

    // first argument is query object
    const result = await Course.update({_id: id}, { 
        $set:{
            author: 'vybhav',
            isPublished: false
        }
    });

    // first argument is id 
    const courseObject = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'vybhav',
            isPublished: false
        }
    }, {new: true}); // without '{new: true}', it will return the original object befor updating

    console.log(result);

}

updateCourse("id");


// delteOne --> finds the first one and deletes it 

async function removeCourse(id) { 
    // const result = await Course.deleteOne({_id: id});
    const course = await Course.findByIdAndRemove(id); // returns course document and deletes it
    console.log(result);
 }
removeCourse(id);