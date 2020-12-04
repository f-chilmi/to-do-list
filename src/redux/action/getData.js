import http from '../../helpers/http'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getData: ()=>({
    type: 'GET_DATA',
    payload: http().get()
  }),
}