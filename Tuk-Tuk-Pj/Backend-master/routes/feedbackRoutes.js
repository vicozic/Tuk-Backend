import express, { request, response } from "express";
import { Feedback } from "../models/feedback.js";

const feedbackRouter = express.Router();

feedbackRouter.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.feedback ||
      !req.body.suggestion ||
      !req.body.how_know ||
      !Array.isArray(req.body.how_know) // Ensure "how_know" is an array
    ) {
      res.status(400).send({ message: "Send all required fields!" });
    } else {
      const newFeedback = {
        name: req.body.name,
        feedback: req.body.feedback,
        suggestion: req.body.suggestion,
        how_know: req.body.how_know,
      };
      const feedback = await Feedback.create(newFeedback);
      res.status(201).send(feedback);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


feedbackRouter.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find({});
    return res.status(200).json({
      count: feedback.length,
      data: feedback,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

feedbackRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findById(id);
    res.status(200).json(feedback);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

feedbackRouter.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.feedback ||
      !request.body.suggestion ||
      !request.body.how_know ||
      !Array.isArray(request.body.how_know) // Ensure "how_know" is an array
    ) {
      response.status(400).send({ message: "Send all required fields!" });
    } else {
      const newFeedback = {
        name: request.body.name,
        feedback: request.body.feedback,
        suggestion: request.body.suggestion,
        how_know: request.body.how_know,
      };
      const { id } = request.params;
      const feedback = await Feedback.findByIdAndUpdate(id, newFeedback);
      response.status(200).send(feedback);
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send(error.message);
  }
});


export default feedbackRouter;
