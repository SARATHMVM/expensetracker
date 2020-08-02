import { withRouter }  from 'react-router-dom';
import React from 'react';

const Home = withRouter(({history, ...props}) => (
    <h1
      {...props}
      onClick={() => {history.push('/expense')}}>
      <button>Let's track the expense!</button>
    </h1>
  ));

  export default Home;