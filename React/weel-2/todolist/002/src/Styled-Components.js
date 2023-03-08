// styled-components를 모아둔 파일
import styled from 'styled-components'

export const Main_Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  min-width: 800px;
  min-height: none;
  margin: 30px auto 30px auto;

  border: 1px solid black;
  border-radius: 15px;
`

export const Info = styled.div`
  height: 50px;
  width: 1000px;
  max-width: 1200px;
  min-width: none;
  margin-top: 20px;

  border: 1px solid black;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const MyTodoList = styled.div`
  text-align: left;
`

export const MadebyRecat = styled.div`
  text-align: right;
`

export const Inputbar = styled.div`
  width: 400px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px auto 20px auto;
  padding: 20px;

  border: 1px solid black;
  border-radius: 15px;
`
export const Box = styled.div`
  width: 200px;
  height: 200px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 15px;
`

export const Box_area = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  justify-content: center;

  width: 1000px;

  gap: 10px;
`
