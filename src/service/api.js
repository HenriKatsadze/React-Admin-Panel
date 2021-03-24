import axios from 'axios'
// import isObject from 'lodash/isObject'
// import isBoolean from 'lodash/isBoolean'
import constants from '../constants'

// axios.interceptors.request.use(
//   config => {
//     bus.$emit('als-before-request', config)

//     return config
//   },
// )

// axios.interceptors.response.use(
//   response => {
//     bus.$emit('als-after-response', response)

//     return response
//   },
//   error => {
//     bus.$emit('als-after-error', error)

//     return Promise.reject(error)
//   }
// )

function callApi (config) {
  const transformedConfig = { ...config }

  transformedConfig.url = constants.API_PREFIX + config.url
  // console.log(55555)
  return axios.request(transformedConfig)
    .then(response => {
      const { data } = response
      // console.log(6666,data)
      // if (isString(data) && ((data.includes('DOCTYPE') || data.includes('doctype')) && data.includes('<'))) {
      //   window.location.replace(response.request.responseURL)

      //   return Promise.reject(response)
      // }
      // if (isObject(data)) {
      //   if (isBoolean(data.isSuccess)) {
      //     if (data.isSuccess && transformedConfig.method !== 'get') {
      //       Vue.notify({
      //         title: 'წარმატებით დასრულდა.',
      //         text: '', // data.message
      //         type: 'success',
      //       })
      //     } else if (!data.isSuccess) {
      //       Vue.modalNotify(data.message)
      //     }

      //     if (!data.isSuccess) {
      //       return Promise.reject(response)
      //     }
      //   }
      // }

      return response
    })
    .then(({ data }) => (data))
    .catch(error => {
      console.log('errorerrorerrorerror')
      if (error.response.status === 401) { // response
        if (process.env.NODE_ENV === 'production') {
          window.location.replace('' + constants.API_PREFIX)
        } else if (process.env.NODE_ENV === 'development') {
          window.location.replace('http://localhost:52659')
        }
      }

      return Promise.reject(error)
    })
}

export default callApi
