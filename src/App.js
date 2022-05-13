import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import CakeContainer from './react-redux-recapcompo/cakeContainer';
import Hookscakecontainer from './react-redux-recapcompo/hookscakecontainer';
import IceCreamContainer from './react-redux-recapcompo/IceCreamContainer';
import NewCakeContainer from './react-redux-recapcompo/NewCakeContainer';
import ItemContainer from './react-redux-recapcompo/ItemContainer';
import UserContainer from './react-redux-recapcompo/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer cake/>
      <ItemContainer />
      <Hookscakecontainer />
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainer /> */}

      <UserContainer />

     </div>
     </Provider>
    
  );
}

export default App;
