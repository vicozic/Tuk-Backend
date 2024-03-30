import mongoose from "mongoose";

const driverLocationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    licenseNo: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const DriverLocation = mongoose.model("DriverLocation", driverLocationSchema);
