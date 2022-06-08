import { comments } from "../../../data/comment";

export default function handler(req, res) {
    const { commentId } = req.query;
    const commentInfo = comments.find(comment => comment.id === parseInt(commentId));
    res.status(200).json(commentInfo);
}