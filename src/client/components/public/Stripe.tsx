import * as React from 'react';

export interface StripeProps {
    
}
 
export interface StripeState {
    
}
 
class Stripe extends React.Component<StripeProps, StripeState> {
    constructor(props: StripeProps) {
        super(props);
        this.state = {

         };
    }
    render() { 
        return (
            <h1 className="text center">Stripe it</h1>
          );
    }
}
 
export default Stripe;