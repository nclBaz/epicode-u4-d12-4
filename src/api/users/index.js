import express from "express"

const usersRouter = express.Router()

usersRouter.post("/", async (req, res, next) => {
  try {
    /*
    100 lines of code which are using things coming from req.body
    101 --> u save in db
    */
  } catch (error) {
    next(error)
  }
})

usersRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.get("/:userId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.put("/:userId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

usersRouter.delete("/:userId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
})

export default usersRouter
