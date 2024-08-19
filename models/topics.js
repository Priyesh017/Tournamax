import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true, // Ensures the title is required
    },
    description: {
      type: String,
      required: true, // Ensures the description is required
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
