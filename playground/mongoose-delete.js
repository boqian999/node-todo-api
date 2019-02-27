const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.deleteMany({}).then((result) => {
    console.log(result);
})

Todo.findOneAndDelete({_id:'5c75c2bf854dd52a46b8a3b0' }).then((result) => {
    console.log(result);
})

Todo.findByIdAndDelete('5c75c2bf854dd52a46b8a3b0').then((result) => {
    console.log(result);
})
