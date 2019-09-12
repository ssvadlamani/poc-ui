import axios from 'axios';
import React, { Component } from 'react';
import { Button, Card, Col, Form, FormControl, ListGroup, Row } from 'react-bootstrap';
import './../search/search.css';
import { APIURL } from '../../config.env';
import { FaUser } from 'react-icons/fa';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            isSearchResNull: false,
            data: []
        };
        this.searchChange = this.searchChange.bind(this)
        this.loadUser = this.loadUser.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.change = this.change.bind(this)
    }

    componentWillMount() {
        this.setState({
            data: this.props.custdetailsList
        }
        )
    }
    searchChange(event) {
        this.setState({
            searchInput: event.target.value
        })
    }
    loadUser(e) {
        this.props.results(e.target.value);
        this.props.history.push('/home');
    }

    handleClick(e) {
        axios.get(APIURL+'/api/findOne/' + e.currentTarget.dataset.id).then(resp => {
            this.props.cdetails(resp.data);
            this.props.history.push('/home');
        }).catch(console.log("error"));
    }
    change(e) {
        let vm = this;
        this.setState({ searchStatus: true })
        let data = { "q": this.state.searchInput };
        let url = APIURL+"/api/contactSearch";
        fetch(url, {
            method: 'POST',
            data
        }).then(function (response) {
                return response.json()
            }).then((body) => {
                vm.setState({
                    data: body.data
                })
                if (body.data && body.data.length == 0) {
                    vm.setState({
                        isSearchResNull: true
                    })
                }
            });
    }

    render() {
        let searchTemp = <div>   <Form inline  style={{ marginBottom: '10px'}}>
            <FormControl type="text" placeholder="Search" onChange={this.searchChange} className="mr-sm-2" style={{ marginTop: '10px', marginLeft: '30px', marginRight: '100px', width: '650px' }} />
            <Button variant="outline-primary" onClick={this.change} style={{ marginTop: '10px', marginLeft: '-10px', marginRight: '100px' }}>Search</Button>
            {this.state.isSearchResNull ? <h6 style={{ color: 'red', marginLeft: '277px', marginRight: '100px', width: '650px' }}>No Match found for search criteria</h6> : <div />}
            <br/>
            <div style={{ marginTop: '20px', marginLeft: '30px', marginRight: '100px', width: '650px' }}>showing 100 results for <strong><span style={{ color: 'blue'}}> {this.state.searchInput}</span></strong>
                <br/>
                We've included results that are incomplete and possibily out of data.<br/>
                <span style={{ color: 'blue'}}>Show 4 results insted</span>
                </div>

        </Form>
            <Row style={{ marginLeft: '1px', marginTop: "0px", width: '100%' }}>
                <Col xs={12}
                    md={12}
                    style={{ border: "1px solid #CCD1D1", padding: "2px" }} >
                    <Row style={{ marginLeft:'70px', marginRight:'70px',marginBottom: '20px' }}>
                      {this.state.data.length >0 ? this.state.data.map((i, index) => (
                            <Col md={{ span: 4, offset: 0 }} key={index}>

                                <Card bg="light" style={{ width: '20rem',marginBottom: '10px',padding:'1px' }}>

                                    <ListGroup variant="flush">
                                        <ListGroup.Item> <Card.Title>
                                            <Row>
                                                <Col xs={4}
                                                    md={4}><FaUser style={{ marginTop:"40px",height: '75px', width: '75px', borderRadius: '70%',color:'grey' , borderWidth:"2px",borderColor:"red"}} /></Col>
                                                <Col xs={8}
                                                    md={8}><h4 onClick={this.handleClick} data-id={i._id} key={i}><h4>{i.firstname}</h4> <h4> {i.lastname}</h4> </h4>
                                                    <h6><span>{i.designation}</span>  {i.dept} </h6>
                                                    <h6><strong>Company </strong><span style={{marginTop:"40px",color:'blue'}}>{i.address}</span></h6>
                                                </Col>
                                            </Row>

                                        </Card.Title></ListGroup.Item>
                                        <ListGroup.Item><Card.Body>
                                            <Card.Text>
                                               <strong>Email  </strong><span>{i.emailid}</span>
                                               <br/>
                                                <strong>Contact </strong><span>{i.contactno}</span>
                                            </Card.Text>
                                            <Card.Text style={{marginTop:"40px",marginLeft: '97px',color:'blue'}} onClick={this.handleClick} data-id={i._id} key={i}>
     <small>View All touchpoints --></small> 
    </Card.Text>
                                        </Card.Body></ListGroup.Item>
                                    </ListGroup>

                                </Card>
                            </Col>
                        )) : <div> No Match records found</div> }</Row>

                    
                </Col>
            </Row>
        </div>

        return searchTemp
    }
}

export default SearchResults;


