import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import config from '../../config';
import DB from '../../db';

export const CreateToken = async (payload:IPayload) =>{
    //console.log(payload);
    let tokenid:any= await DB.AccessTokens.insert(payload.userid);
    payload.accesstokenid = tokenid.insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload, config.auth.secret);
    //console.log('token');
    await DB.AccessTokens.update(payload.accesstokenid, token);
    return token;
};

export const ValidateToken = async (token: string) => {
    let payload: IPayload = <IPayload>jwt.verify(token, config.auth.secret);
    let [accesstokenid] = await DB.AccessTokens.findOne(payload.accesstokenid, token);
    if (!accesstokenid) {
        throw new Error('Invalid Token!');
    } else {
        return payload;
    }
};

export interface IPayload {
    [key:string]:any;
    userid:number;
    unique?:string;
}
