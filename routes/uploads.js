const express = require("express");
const router = express.Router();
const {
  uploadFile,
  getFile,
  handleDownload,
} = require("../controllers/uploads");

router.route("/").post(uploadFile);
router.route("/file/:id").get(getFile);
router.route("/file/:id").get(handleDownload).post(handleDownload);

module.exports = router;
