import express from "express";
import {
  createComment,
  getPostComments,
  getComments,
  deleteComment,
} from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/createComment", verifyToken, createComment);
router.get("/getCommentPosts/:postId", getPostComments);
router.get("/getComments", verifyToken, getComments);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);

export default router;
