let User = require('../models/user');
let Quiz = require('../models/quiz');
let mongoose = require("../config/mongoConnection")

let newUser = new User({
    _id: "7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310",
    role: "student",
    sessionId: "b3988882-627f-4c59-8d5d-54b7a43b030e",
    hashPassword: "123",
    profile: {
        name: "rick",
        campusId: "123456"
    },
    grades :[]
});

let newStudent = new User({
    _id: "7b7997a2-c0d2-4f8c-b27a-6a1d4b5b8964",
    role: "student",
    sessionId: "b3988882-627f-4c59-8d5d-54b7a43b030e",
    hashPassword: "123",
    profile: {
        name: "john",
        campusId: "234567"
    },
    grades:[]
});

let newProfessor = new User({
    _id: "7b7997a2-c0d2-4f8c-b27a-6a1d4b5b8745",
    role: "teacher",
    sessionId: "b3988882-627f-4c59-8d5d-54b7a43b030e",
    hashPassword: "123456",
    profile: {
        name: "professor",
        campusId: "12345678"
    },
    grades: []
});


let newQuiz = new Quiz({
    _id: "b3988882-627f-4c59",
    name: "Midterm",
    totalScore: 100,
    questions: [
        {
            "id": "1",
            "content": "what is your favorite food?"
        },
        {
            "id": "2",
            "content": "what is your favorite movie?"
        }
    ]
});

let newQuiz2 = new Quiz({
    _id: "b3988882-627f-5d60",
    name: "Final",
    totalScore: 100,
    questions: [
        {
            "id": "1",
            "content": "Have you been to Canada?"
        },
        {
            "id": "2",
            "content": "Have you been to Mexico?"
        }
    ]
});

mongoose.connection.dropDatabase();

User.createUser(newUser, function (err, res) {
    if (err) {
        console.log("Error:" + err);
    }
    else {
        console.log("Create Student 1:" + res);
    }
});

User.createUser(newStudent, function (err, res) {
    if (err) {
        console.log("Error:" + err);
    }
    else {
        console.log("Create Student 2:" + res);
    }
});

User.createUser(newProfessor, function (err, res) {
    if (err) {
        console.log("Error:" + err);
    }
    else {
        console.log("Create Professor:" + res);
    }
});

Quiz.createQuiz(newQuiz, function (err, res) {

    if (err) {
        console.log("Error:" + err);
    }
    else {
        console.log("Res2:" + res);
    }

});

Quiz.createQuiz(newQuiz2, function (err, res) {
    
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res2:" + res);
        }
    
    });


    