import * as express from 'express';
import DB from '../../db';
import * as stripeLoader from 'stripe';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		let users = await DB.Users.getAll();
		res.json(users);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

const stripe = new stripeLoader('sk_test_YrIudsUINNjIc7SBC4jgvKKH00X8xEMyfa');
const charge = (token: string, amt: number) => {
	console.log('if this works ill be surprised')
	return stripe.charges.create({
		amount: amt * 100,
		currency: 'usd',
		source: token,
		description: 'striping it good'
	})
}

router.post('/form', async (req,res,next) => {
	try {
		let data = await charge(req.body.token.id, req.body.amount);
		console.log(data);
		res.send("Charge Successful")
	} catch(e) {
		console.log(e);
		res.status(500);
	}
	
})


export default router;