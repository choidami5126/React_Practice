import React from 'react'

// props를 통해 부모 > 자식 데이터가 전달됨.
function Son (props) {
  console.log("props", props);
  return <div>나는 최다현이다. 나는 {props.mamaName}의 아들이에요. 그리고 {props.gpapaName}의 손자이기도 합니다.</div>;
}

// 부모 > 자식 정보를 전달했다.
function Mama (props) {
  const name = '최부인';
  const gpapaName = GpapaName;
  return <Son mamaName = {name} />;
}

function Gpapa () {
  const name = '최덕배';
  return <Mama GpapaName={name}/>;
}

const App = () => {
  return <Gpapa />;
}

export default App