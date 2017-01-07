

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: false
    };
  }

   onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render(){

    var style = {
      'fontWeight': this.state.done ? 'bold' : 'none'
    };

    // return (<TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>);
    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{['Learn React', 'Crush Recast.ly', 'Maybe sleep']}</li>
    ); 
  }

}

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo => {
      return <li key={todo}> {todo}
              </li>
    }
    )}
  </ul>
);

ReactDOM.render(<App/>, document.getElementById('app'));




// var TodoList = (props) => {

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }


// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// )