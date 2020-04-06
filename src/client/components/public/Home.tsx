import * as React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    //this.state = { :  };
  }
  render() {
    return (
      <main>
        <h1 className="text-center">Welcome!</h1>
        <section>
          <Row></Row>
          <Row></Row>
          <Row>
            <Col md="4"></Col>
            <Col md="4">
            <Link to={"/register"} className="btn btn-primary">
            Register
          </Link>
          </Col>
          <Col md="4"></Col>
          
          </Row>
          <Row>
          <Col md="4"></Col>
          <Col md="4">
          <Link to={"/login"} className="btn btn-primary mt-4">
            Login
          </Link>
          </Col>
          <Col md="4"></Col>
          </Row>
        </section>
      </main>
    );
  }
}

export default Home;
