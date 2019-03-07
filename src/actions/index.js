import _ from 'lodash';
import * as d3 from "d3";

import eaapi from '../apis/API';

export const fetchAPIData = () => async dispatch => {
  await eaapi.get('/cars')
  .then((response) => {

    // Flattening the API data using the lodash library, so that it can further be processed with d3 library
    const result = _.flatMap(response.data, ({ name, cars }) =>
                                      _.map(cars, tag => ({ name, ...tag }))
                                      );  


    // Grouping / Nesting the data as per make and model using the d3 library
    const entries = d3.nest()
                          .key(function(d) { return d.make; }).sortKeys(d3.ascending)
                          .key(function(d) { return d.model; }).sortKeys(d3.ascending)
                          .entries(result);


    // Dispatching the data to reducers
    dispatch({ type: 'FETCH_API_DATA', payload: entries });
  }).catch((error) => {

    // printing the error to console
    // console.log (error.response)
    console.log (error.response.status)
    console.log (error.response.data)

  });

  
};
