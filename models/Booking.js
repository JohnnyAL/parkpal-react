const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    start_date: Date,
    end_date: Date,
    start_time: { type: Date, default: Date.now() },
    end_time: { type: Date, default: Date.now() },
    spot: {
      type: Schema.Types.ObjectId,
      ref: "Spot"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
