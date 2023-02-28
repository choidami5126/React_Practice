import React, { useState } from "react";
import './App.css'
import Button from "./component/Button";
import User from "./component/User";

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
    setName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  const clickAddButtonHandler = () => {
    const addInfo = {
      id: users.length + 1,
      age,
      name,
    }
    setUsers([...users, addInfo])
  };

  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers)
  }

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
        <Button clickAddButtonHandler={clickAddButtonHandler}/>
      </div>
      <div className="app-style">
        {
          users.map((item) => {
            return (
              <User
              item={item}
              removeFunction={clickRemoveButtonHandler}
              />
            )
          })
        }
      </div>
    </div>

  )
};

export default App;
