const express = require('express');
const isAuth = require('../middleware/isAuth');
const { getShowsMeta, addShowsMeta, deleteShowMeta } = require('../controllers/showsDetails.controllers');
const showsRouter = express.Router();


showsRouter.get("/", isAuth(), getShowsMeta);
showsRouter.post("/", isAuth(), addShowsMeta);
showsRouter.post("/:showId", isAuth(), getShowsMeta);
showsRouter.delete("/:showId", isAuth("Admin"), deleteShowMeta);


module.exports = showsRouter;