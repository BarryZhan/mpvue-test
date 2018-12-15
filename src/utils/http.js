import Fly from 'flyio/dist/npm/wx'

const http = new Fly()

http.config.baseURL = 'http://112.74.40.0:9999/front/'
http.config.headers = {
  'Content-Type': 'application/json;charset=UTF-8'
}

http.interceptors.response.use(response => {
  const {code, data, message} = response.data
  if (Number(code) === 0) {
    console.log(data)
    return data
  } else {
    return Promise.reject(new Error(message))
  }
})

export default http
