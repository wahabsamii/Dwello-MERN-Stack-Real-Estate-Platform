import express from 'express';
import { create, DeleteProperty, getAll, getById, userProperty } from '../controllers/propertyController.js';
import upload from '../middlewares/multer.js';
const router = express.Router();

router.post('/create',upload.single('image'), create);
router.get('/all', getAll);
router.get('/:slug', getById);
router.post('/my', userProperty);
router.delete('/:id', DeleteProperty);

export default router;

// fields([
//     {name: 'image', maxCount: 1},
//     {name: 'gallery', maxCount: 10}
// ])