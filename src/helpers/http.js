import {default as axios} from 'axios'

const http = (token=false)=>{
  return axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list',
  })
}

export default http