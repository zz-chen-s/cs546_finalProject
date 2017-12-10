let User = require('../models/user');
let Quiz = require('../models/quiz');
let mongoose = require("../config/mongoConnection")

let newUser = new User({
    _id: "7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310",
    role:"student",
    sessionId: "b3988882-627f-4c59-8d5d-54b7a43b030e",
    hashPassword: "123456",
    profile:{
        name:"Rick",
        campusId: "123456"
    },
    grades:[{
        quizId:"1",
        score: 99
        },
        {
        quizId:"2",
        score: 98
        }]
});


let newQuiz = new Quiz({
    _id:"b3988882-627f-4c59",
    name: "Midterm",
    totalScore: 100,
    questions:[
        {
        "content":"what is your favorite food?"
        },
        {
        "content":"what is your favorite movie?"
        }
    ]
});

mongoose.connection.dropDatabase();

User.createUser(newUser, function(err, res){
    if (err) {
        console.log("Error:" + err);
    }
    else {
        console.log("Res1:" + res);
    }
});

Quiz.createQuiz(newQuiz,function (err, res) {
    
            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res2:" + res);
            }
    
        });
