import express from "express";
import  db  from "../mockdb";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;
    if (id){
        data = await db.getOne(id)
    }
    else{
        data = await db.getAll();
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // TODO
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    // TODO
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    // TODO
  } catch (error) {
    next(error);
  }
});

export default router;