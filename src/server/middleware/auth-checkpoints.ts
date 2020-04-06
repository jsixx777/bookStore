import * as passport from 'passport';
import { RequestHandler, Request } from 'express';
import { UsersTable } from '../db/tables';

export const tokenCheckpoint: RequestHandler = (req, res, next) => {
	return passport.authenticate('bearer', { session: false }, (err, user, info) => {
		if (user) req.user = user;
		return next();
	})(req, res, next);
};

export const isAdmin: RequestHandler = (req: RequestUser, res, next) => {
	if ( req.user && req.user.role === 'admin') {
		return next();
	} else {
		return res.sendStatus(401);
	}
};

export interface RequestUser extends Request {
	user: UsersTable,

}

export const isEmployer: RequestHandler = (req: RequestUser, res, next) => {
	if (req.user && req.user.role === 'employer') {
		return next();
	} else {
		return res.sendStatus(401);
	}
};