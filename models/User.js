const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    Name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    Kudos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Kudo"
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;