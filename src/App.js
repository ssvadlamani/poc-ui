import React, { Component } from 'react';
import Header from './components/header/header';
import Search from './components/search/search';
import SearchList from './components/search/SearchList';
import SearchResults from './components/search/SearchResults';
import Details from './components/search/Details';
import { BrowserRouter,Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cust: "",
      data: []
    };
    this.searchResults = this.searchResults.bind(this)
    this.custDetails = this.custDetails.bind(this)
  }
  searchResults(val) {
    this.setState({
      data: val
    })
  }
  custDetails(val1) {
    this.setState({
      cust: val1
    })
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <BrowserRouter>
            <Route exact path="/" render={(props) => <Search {...this.props} {...props} results={this.searchResults.bind(this)} />} />
            <Route path="/home" render={(props) => <Details {...this.props} {...props} customerDetails={this.state.cust} />} />
            <Route path="/searchResults" render={(props) => <SearchResults {...this.props} {...props} custdetailsList={this.state.data} cdetails={this.custDetails} />} />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
export default App;
