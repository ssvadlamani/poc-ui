import Search from 'react-search'
import React, { Component, PropTypes } from 'react'
import { Redirect, BrowserRouter } from "react-router-dom";
    import { Form,  Row, Col, Alert,  Nav,Card, Button} from "react-bootstrap";

//Temporarily store data here
const PostsData = [
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    }
  ]
  
  
  // Start App
  
  export default class SearchList extends React.Component { 
    HiItems(items) {
        console.log(items)
      }
    
      render () {
        let items = [
          { id: 0, value: 'ruby' },
          { id: 1, value: 'javascript' },
          { id: 2, value: 'lua' },
          { id: 3, value: 'go' },
          { id: 4, value: 'julia' }
        ]
    
        return (
          <div>
            <Search items={items}
                    placeholder='Pick your language'
                    maxSelected={3}
                    multiple={true}
                    onItemsChanged={this.HiItems.bind(this)} />
          </div>
        )
      }
}
  
  
  
  