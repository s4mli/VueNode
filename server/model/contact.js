const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        deliveryAddress: String,
        billingAddress: String
    },
    {
        timestamps: true,
        collection: 'contacts'
    }
);

module.exports = mongoose.model("Contact", ContactSchema);
