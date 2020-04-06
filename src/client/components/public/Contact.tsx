import * as React from "react";

export interface HomeProps {}

export interface HomeState {}

class Contact extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    //this.state = { :  };
  }
  render() {
    return (
      <main>
        <h1 className="text-center">Welcome!</h1>
        <section>
          
        </section>
      </main>
    );
  }
}




export default Contact;