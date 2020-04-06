import { Query } from '../index';

const getBookTags = (pizza:number)=> Query (`CALL spGetBookTags(${pizza})`);





export default {
    getBookTags
}