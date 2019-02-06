import React, { Component } from 'react'; 
import './App.css';
import Header from './Components/Layout/Header'
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
     {  
        id: uuid.v4(),
        title: 'Jeans',
        completed: false
    },
    {  
      id: uuid.v4(),
      title: 'Jacket',
      completed: false
  },
  {  
    id: uuid.v4(),
    title: 'Sunglasses',
    completed: false
},

{  
  id: uuid.v4(),
  title: 'morning meds',
  completed: false
},
{  
  id: uuid.v4(),
  title: 'Afternoon meds',
  completed: false
},
{  
  id: uuid.v4(),
  title: 'Evening meds',
  completed: false
}




    ]




  }

  // Toggle complete
  markComplete = (id) => {
     this.setState({ todos: this.state.todos.map(todo => {
       if(todo.id === id) {
         todo.completed = !todo.completed
       }
       return todo;
      }) })
  }

// Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

// Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
     this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
       return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete=
          {this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
