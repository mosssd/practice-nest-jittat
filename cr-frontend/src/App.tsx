import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [courses, setcourses] = useState<any[]>([]);
  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(courses => {
        console.log(courses);
        setcourses(courses);
      })
  },[]);

  return(
    <div className='App'>
      <ul>
        {courses.map(item => (
          <li key={item.id}>{item.number}-{item.title}</li>
        ))}
      </ul>
      
    </div>
  );
}

// type AppState = {
//   massage:string;
// };

// class App extends React.Component<{}, AppState> {
//   state: AppState = { 
//     massage: 'default massage',
//   };

//   componentDidMount(){
//     fetch('http://localhost:3000/courses')
//       .then(res => res.json())
//       .then(obj => {
//         this.setState({massage: obj.massage})
//       })
//   };
  
//   render() {
//     return (
//       <div>
//         {this.state.massage}
//       </div>
//     );
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }

export default App;
