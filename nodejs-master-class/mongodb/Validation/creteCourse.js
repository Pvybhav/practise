const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongodb", {
        useNewUrlParser: true
    })
    .then(() => console.log("connected to db..."))
    .catch(err => console.log("error while connecting", err));


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/
    },
    author: String,
    category: {
        type: String,
        enum: ['web', 'mobile', 'network'],
        // lowercase: true,
        uppercase: true,
        trim: true
    },
    // tags: [String],
    tags: {
        type: Array,

        // Custom validator ('message' is optional)
        
        // Synchronous validator
        // validate: {
        //     validator: function (v){
        //         return v && v.length > 0;
        //     },
        //     message: 'A course should have atlease one tag'
        // }

        // Asynchronous validator

        validate: {
            isAsync: true,
            validator: function(v, callback){
                setTimeout(()=>{
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000)
        },
        message: 'A course should have atlease one tag'
    }

    },
    date: {
        type: Date,
        default: Date.now,
        // min:
        // max:
    },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function(){return this.isPublished},
        min: 10,
        max: 100,
        set: v => Math.round(v), // used when the value is saving to db
        get: v => Math.round(v) // used when we read value from db
    }
});


const Course = mongoose.model('Course', courseSchema); // Class

async function createCourse(){
    const course = new Course({ // object
        // name: "Reactjs",
        author: 'vybhav',
        tags: [],
        isPublished: true,
        price: 20
    });
    try{
        const result = await course.save(); // returns a promise
        console.log(result);
    }
    catch(error){
        // console.log(error.message);
        for (field in error.errors) console.log(error.errors[field].message)

    }
}
createCourse();