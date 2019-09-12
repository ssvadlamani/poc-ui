import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './../search/search.css';
import { APIURL } from '../../config.env';

class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            searchInput: '',
            isSearchResNull: false,
            data: []
        };
        this.search = this.search.bind(this);
        this.searchChange = this.searchChange.bind(this)
        this.loadUser = this.loadUser.bind(this)
    }
    search(event) {
        let vm = this;
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
                if (body.data) {
                    vm.props.results(body.data);
                    vm.props.history.push('/searchResults');
                } else {
                    vm.setState({
                        isSearchResNull: true
                    })
                }
            });

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

    render() {
        let searchTemp = <div><Form inline>
            <div style={{ marginTop: '180px' }}>
            <h1 style={{ marginLeft: '285px',color:'blue'}}>Welcome to Athena</h1>
                <div style={{width:'657px',marginLeft: '285px'}} >Use the search bar below to find historical touchpoints with your contacts. You'll be searching a list that we've compiled 
                from both internal sources and third party tools</div>
                {this.state.isSearchResNull ? 
                <p style={{ color: 'red', marginLeft: '277px', marginRight: '100px', width: '650px' }}>No Match found for search criteria</p> : <div />}
                <FormControl type="text" placeholder="Search for a contact ,company or email address" className="mr-sm-2" onChange={this.searchChange} style={{ marginTop: '5px', marginLeft: '280px', marginRight: '100px', width: '650px' }} />
                <Button variant="outline-primary" onClick={this.search} style={{ marginTop: '5px', marginLeft: '-10px', marginRight: '100px' }}>Search</Button>
            </div>
        </Form>

        </div>
        return searchTemp
    }
}
export default Search;