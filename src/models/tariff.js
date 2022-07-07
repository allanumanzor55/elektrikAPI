const mongoose = require("mongoose");

const tariffSchema = mongoose.Schema({
    cost: { type: Number, required: true },
});

module.exports = mongoose.model("Tariff", tariffSchema);
