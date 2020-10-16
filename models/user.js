const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const UserSchema = new Schema(
{
    name:
    {
        type: String,
        required: false
    },
    suite:
    [{
        type: Schema.ObjectId,
        ref: "Item"
    }],
    cabin:
    [{
        type: Schema.ObjectId,
        ref: "Item"
    }],
    //an array of posts passed by the reference to id
    diet: 
    [{
        type: Schema.ObjectId,
        ref: "Item"
    }],
    //an array of comments passed by the reference to id
    flightSchedule:
    [{
        type: String,
        required: true
    }],
    date:
    {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model("User", UserSchema);