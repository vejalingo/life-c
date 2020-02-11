const express = require("express");
const mongoose = require("mongoose");
const Action = require("./action.model");

const router = express.Router();

// mongoose.connect("mongodb://mongodb:27017/lifeC", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   keepAlive: 1,
//   useUnifiedTopology: true
// });

mongoose.connect("mongodb://localhost:27017/lifeC", {
  useNewUrlParser: true,
  useCreateIndex: true,
  keepAlive: 1,
  useUnifiedTopology: true
});

router
  .route("/")
  /** Get All Actions */
  .get(async (req, res, next) => {
    try {
      const data = await Action.find({});
      data && res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  })

  /** Add New Action */
  .post(async (req, res, next) => {
    try {
      const data = new Action(req.body);
      const savedData = await data.save();

      if (savedData) {
        res.status(201).json({
          actionId: savedData._id
        });
      }
    } catch (error) {
      next(error);
    }
  });

router
  .route("/:actionId")

  /** GET Single Action */
  .get(async (req, res, next) => {
    try {
      const { actionId } = req.params;

      const data = await Action.find({ _id: actionId });

      res.status(200).json({
        data
      });
    } catch (error) {
      next(error);
    }
  })

  /** Update Single Action */
  .put(async (req, res, next) => {
    try {
      const {
        params: { actionId },
        body
      } = req;

      const updatedData = await Action.findOneAndUpdate({ _id: actionId });

      if (updatedData) {
        res.status(201);
      }
    } catch (error) {
      next(error);
    }
  })

  /** Delete Single Action */
  .delete(async (req, res, next) => {
    try {
      const { actionId } = req.params;
      const actionDeleted = await Action.findOneAndDelete({ _id: actionId });

      if (actionDeleted) {
        res.status(204);
      } else {
        res.send({ error: `Failed to delete Action with id: ${actionId}` });
      }
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
