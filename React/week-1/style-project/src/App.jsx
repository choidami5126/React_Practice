import React, { useState } from "react";
import './App.css';

const App = () => {

  const [users, setUsers] = useState([
    { id: 1, age: 30, name: '송중기' },
    { id: 2, age: 24, name: '송강' },
    { id: 3, age: 21, name: '김유정' },
    { id: 4, age: 29, name: '구교환' },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  const clickAddButtonHandler = () => {
    const addInfo = {
      id: users.length + 1,
      age,
      name,
    }

    setUsers([...users, {addInfo}])
  };

  return (
    <div>
      <div>
        이름 :&nbsp;
        <input
          value={name}
          onChange={nameChangeHandler}
        /> <br />
        나이 :&nbsp;
        <input
          value={age}
          onChange={ageChangeHandler}
        /> <br />
      </div>
      <div>
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>
      <div className="app-style">
        {
          users.map((item) => {
            return (
              <div key={item.id} className="component-style">
                {item.age} - {item.name}</div>
            )
          })
        }
      </div>
    </div>

  )
};

export default App;
