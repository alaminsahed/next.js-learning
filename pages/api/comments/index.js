import { comments } from "../../../data/comment"

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comments)

    }
    else if (req.method === 'POST') {
        const data = req.body.comment;

        const newComment = {
            id: Date.now(),
            text: data
        }
        comments.push(newComment);
        res.status(201).json(comments);
    }
}