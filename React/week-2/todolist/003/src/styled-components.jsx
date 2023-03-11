import styled from 'styled-components'

export const Box = styled.div`
  width: 300px;
  height: 300px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
`

export const Box_Area = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;

  width: 1000px;

  gap: 10px;
  margin: 10px 20px 10px 20px;
`

export const Main_Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 1200px;
  min-width: 800px;

  border: 1px solid black;
  border-radius: 15px;
  margin: 20px auto 20px auto;
`
