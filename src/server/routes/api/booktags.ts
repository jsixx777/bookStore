import{ Router } from 'express';
import DB from '../../db';

const router = Router()



router.get('/:bookid',  async(req, res, next) =>{
    let id = req.params.blogid;
    try{
        let [tagNames] = await DB.BookTags.getBookTags(id);
        res.send(tagNames);
    }catch(e){
        console.log(e);
        res.sendStatus(500);  
    };
    
})

export default router