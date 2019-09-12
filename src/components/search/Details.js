import React, { Component } from 'react';
import './../search/search.css'
import { Form, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            searchStatus: false,
            data: []
        };
        this.searchChange = this.searchChange.bind(this)
    }
    searchChange(event) {
        this.setState({
            searchInput: event.target.value
        })
    }
    componentWillMount() {
        if (!this.props.customerDetails) {
            this.props.history.push("/");
        }

    }
    render() {
        return (
            <Row style={{ marginLeft: '1px', marginTop: "5px" }}>
                <Col xs={12}
                    md={12}
                    style={{ border: "1px solid #CCD1D1", padding: "2px" }} >
                    <Card>
                        <Card.Header>
                            <IoMdArrowRoundBack style={{ marginTop: "0px", height: '25px', width: '25px', borderRadius: '70%', color: 'blue' }} />Profile
      </Card.Header>
                        <Card.Body>
                            <Card style={{ width: '18rem', border: "1px solid #CCD1D1", padding: "2px", width: '600' }}>
                                <Card.Body>
                                    <Card.Title>
                                        {this.props.customerDetails ? <Row>
                                            <Col xs={4}
                                                md={0}><FaUser style={{ marginTop: "40px", height: '75px', width: '75px', borderRadius: '70%', color: 'grey', borderWidth: "2px", borderColor: "red" }} /></Col>
                                            <Col xs={4}
                                                md={0}> {this.props.customerDetails.data[0].firstname}
                                                {this.props.customerDetails.data[0].designation}
                                            </Col>
                                        </Row>
                                            :
                                            <div />
                                        }
                                    </Card.Title>
                                    {this.props.customerDetails ?
                                        <Card.Subtitle className="mb-2 text-muted">{this.props.customerDetails.data[0].designation}</Card.Subtitle>
                                        : <div />}
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
    </Card.Text>
                                    <Card.Link href="#">Sample Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Details;