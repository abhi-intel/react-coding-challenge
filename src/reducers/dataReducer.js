export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_API_DATA':
      return action.payload;
    default:
      return state;
  }
};
