import * as express from 'express';
import booksRouter from './books';
import * as passport from 'passport';
import bookTagsRouter from './booktags';
import usersRouter from './users';
import { tokenCheckpoint } from '../../middleware/auth-checkpoints';


const router = express.Router();

router.use((req,res, next) => {
    passport.authenticate('bearer', {session: false}, (err,user,info) =>{
        if(user) req.user = user;
        return next();
    })(req, res, next);
})
router.use(tokenCheckpoint);
router.use('/books', booksRouter);
router.use('/booktags', bookTagsRouter )
router.use('/users', usersRouter)

  
export default router;