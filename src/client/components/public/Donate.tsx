import * as React from "react"
import { StripeProvider, Elements } from "react-stripe-elements"
import Form from "./Form"

export interface DonateProps {
    
}
 
export interface DonateState {
    
}
 
class Donate extends React.Component<DonateProps, DonateState> {
    constructor(props: DonateProps){
        super(props)
        this.state = {
            
        }
    }
    render() { 
        return ( 
            <StripeProvider apiKey = "pk_test_VepXAyvslMybXOCKA2mtcGCP">
            <Elements>
              <Form />
              </Elements>
              </StripeProvider>
         )
    }
}
 
export default Donate;