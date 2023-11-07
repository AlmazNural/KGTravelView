import express from 'express'
import { deleteUser,
     getAllUser,
     getSingleUser, 
     updateUser} 
from './../controllers/userControllers.js';

import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router()

// update user
router.put('/:id', updateUser);

// delete user
router.delete('/:id', verifyUser, deleteUser);

// get single user
router.get('/:id', verifyUser, getSingleUser);

// get all user
router.get('/', getAllUser);

export default router;