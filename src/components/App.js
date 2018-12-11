import React from "react";
import { Switch, Route } from 'react-router'
import HomeNotice from './homeNotice';
import AddNotice from './addNotice';
import EditNotice from './editNotice';

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomeNotice}/>
                    <Route exact path="/addNotice" component={AddNotice}/>
                    <Route path="/editNotice/:id" component={EditNotice}/>
                </Switch>
            </div>
        );
    }
}
export default App;
