import React from "react";
import './App.css'

function App() {

  const testArry = ['감자', '고구마', '오이', '가지', '옥수수']

  return (
    <div className='app-style'>
      {testArry.filter(function (item) {
        return item !== '오이';
      })
      .map(function(item) {
        return <div className="component-style">{item}</div>;
      })}
    </div>
  );
}

export default App;
