import { getConfig } from '@testing-library/react'
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.React_APP_SERVER_URL,
  timeout: 1,
})

// 요청할 때 content 타입에 대해서 지정하거나
// 토큰과 관련된 인증을 삽입하거나
// 서버 응답코드에 대한 오류 처리를 하거나
// 통신에 시작과 종료에 대한 전역 상태를 관리해 스피너, 프로그래서 바 등을 구현할 수 있다

instance.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    console.log('인터셉터 요청 성공')
    return config
  },

  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    console.log('인터셉터 요청 오류')
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function (response) {
    console.log('인터셉터 응답 받았습니다')
    return response
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    console.log('인터셉터 오류 발생')
    return Promise.reject(error)
  }
)

export default instance
