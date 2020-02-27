const mongoose = require("mongoose");
const { Schema } = mongoose;

const spotSchema = new Schema(
  {
    name: String,
    description: String,
    address: {
      street_address: String,
      city: String,
      state: String,
      zip_code: String,
      country: String
    },
    geolocation: {
      type: {
        type: String,
        enum: ["Point"],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    type: {
      type: String,
      enum: ["Driveway", "Street", "Parking lot", "Garage"]
    },
    size: {
      type: String,
      enum: ["Compact", "Midsized", "Large"]
    },
    start_date: Date,
    end_date: Date,
    start_time: { type: Date, default: Date.now() },
    end_time: { type: Date, default: Date.now() },
    price: Number,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Spot = mongoose.model("Spot", spotSchema);
spotSchema.index({ geoLocation: "2dsphere" });

module.exports = Spot;
