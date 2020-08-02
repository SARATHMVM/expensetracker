import React  from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../App';
import ExpenseDetails from '../container/ExpenseDetails'; 
import Home from '../container/Home'; 

// redirect all unmatched routes to root / error page
const router = () => (

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*/myexpensedetails*" component={ExpenseDetails} />
      <Route path="*/expense*" component={App} />
      <Route path="*" component={Home} />
    </Switch>
 
  )
  
  export default router