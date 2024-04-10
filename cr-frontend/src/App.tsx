import React from 'react';
import './App.css';


type AppState = {
  massage:string;
};

class App extends React.Component<{}, AppState> {
  state: AppState = { 
    massage: 'default massage',
  };

  componentDidMount(){
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(obj => {
        this.setState({massage: obj.massage})
      })
  };
  
  render() {
    return (
      <div>
        {this.state.massage}
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }

export default App;
