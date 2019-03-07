import React from 'react';

class Item extends React.Component {
	render() {
  	return <li>
        <strong>{ this.props.name }</strong>
        { this.props.children }<br></br>
    </li>
  }
}

class DisplayAllShows extends React.Component {	
  
  list(data) {

    const children = (items) => {

    	if (items) {
        return items.map((items) => {

          return <ul><li>{ items.name }</li></ul>
        })
      }
    }

    return data.map((show) => {
      this.name = show.key

      if(this.name.length===0)
        {this.name = "**Not Available**"}
      
      return <Item name={ this.name }>
      { children(show.values) }
      </Item>
    })
  }
  
  render() {
  	return <ul>
    	{ this.list(this.props.data) }
    </ul>
  }
}

export default DisplayAllShows;