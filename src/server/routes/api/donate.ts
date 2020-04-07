import * as express from 'express';
import DB from '../../db';
import * as stripeLoader from 'stripe';
import config from '../../config';

const router = express.Router();


const stripe = new stripeLoader(config.apiKeys.stripe);
const charge = (token: string, amt: number) => {
	console.log('if this works ill be surprised')
	return stripe.charges.create({
		amount: amt * 100,
		currency: 'usd',
		source: token,
		description: 'striping it good'
	})
}

router.post('/', async (req,res,next) => {
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