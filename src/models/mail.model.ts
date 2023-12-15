import mongoose from "mongoose";

interface EmailModel extends mongoose.Document {
  name: string;
  email: string;
  profession: string;
  contact: number;
  message: string;
}

const mailSchema = new mongoose.Schema<EmailModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Mail =
  mongoose.models.Mail ?? mongoose.model<EmailModel>("Mail", mailSchema);
export default Mail;
