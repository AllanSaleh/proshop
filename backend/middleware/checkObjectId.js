import { isValidObjectId } from 'mongoose';

function checkObjectId(req, res, next) {
  if (!isValidObjectId(req, res, next)) {
    res.status(404);
    throw new Error(`Invalid ObjectId of: ${req.params.id}`);
  }
  next();
}

export default checkObjectId;
