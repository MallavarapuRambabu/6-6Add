import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { Add } from '.';
function App() {
  const [inputs, setInputs] = useState({});
  let dispatch = useDispatch()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type:Add,payload:inputs})
    console.log(inputs);
  }
  let location = useSelector(s=>s)
  console.log(location.details)
  return (
    <div className="App">
   <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your phone:
        <input 
          type="number" 
          name="phone" 
          value={inputs.phone || ""} 
          onChange={handleChange}
        />
        <label>Enter your email:
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        </label>
        <input type="submit" />
    </form>
    </div>
  );
}

export default App;
