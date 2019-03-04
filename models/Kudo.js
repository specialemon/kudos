const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KudoSchema = new Schema ({
    title:{
        type: String,
        required: "Title is required"
    },
    body: {
        type: String,
        required: "Body is required"
    },
    sender:[
        {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    receiver:[
        {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    ]
});

const Kudo = mongoose.model("Kudo", KudoSchema);

module.exports = Kudo;