import React from 'react'



function Child({age, name, children}) {
    console.log(age)
    console.log(name)
    console.log(children)
    // console.log(children)
  return <div>Child</div>
}

Child.defaultProps = {
    age : '기본 나이',
};

export default Child