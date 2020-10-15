const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const ItemSchema = new Schema(
{
    name:
    {
        type: String
    },
    name:
    {
        type: String
    },

});

module.exports = Item = mongoose.model("Item", ItemSchema);