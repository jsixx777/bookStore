import React from 'react';
import {render} from 'react-dom';

import App from './App';
import {StripeProvider} from "react-stripe-elements";

render(<StripeProvider apiKey="pk_test_12345">
        <App/>
    </StripeProvider>, document.getElementById("root"));