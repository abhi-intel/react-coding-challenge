import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react'

import { fetchAPIData } from '../actions';
import DisplayAllShows from './DisplayAllShows';


class CarMakeList extends React.Component {
  componentDidMount() {
    this.props.fetchAPIData();
  }

  renderList() {

    // To check whether API returned any data or not
    if(Object.keys( this.props.apidata ).length === 0){
      return <div> <i> No data fetched from API. Refresh the page to try again.</i> </div>
    }

    return this.props.apidata.map(data => {
      return (
        <div className="item" key={data.key}>
          <List>
            <List.Item>
              <List.Icon name='caret right' />
              <List.Content>
                <List.Header>{data.key}</List.Header>                  
                <DisplayAllShows data={ data.values} />
              </List.Content>
            </List.Item>                
          </List>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { apidata: state.reducerData };
};

export default connect(
  mapStateToProps,
  { fetchAPIData }
)(CarMakeList);
