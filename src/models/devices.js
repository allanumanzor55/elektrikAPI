const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema({
  deviceName: { type: String, required: true },
  power: { type: Number, required: true },
  dailyUse: { type: Number, required: true },
  weekUse: { type: Number, required: true },
  KWhDay: { type: Number, required: true },
  KWhMonth: { type: Number, required: true },
  cost: { type: Number, required: true },
  userID: { type: String, required: true },
});

module.exports = mongoose.model("Devices",deviceSchema)
