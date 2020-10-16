const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const ItemSchema = new Schema(
{
    name:
    {
        type: String
    },
    imgUrl:
    {
        type: String
    },
    category:
    {
        type: String
    },
    size:
    {
        type: String
    },
    time:
    {
        type: String
    }
});

module.exports = Item = mongoose.model("Item", ItemSchema);