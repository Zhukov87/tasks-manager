import React, { Component } from 'react';
import AddForm from './components/AddForm';
import { Provider } from 'react-redux';
import store from './store/store';
import TaskList from './components/TasksList';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <AddForm />
          <TaskList />
        </div>
      </Provider>
    );
  }
}

export default App;
