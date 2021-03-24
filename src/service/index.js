// import qs from 'qs'
import callApi from './api'

// const getPosts = (identifier = 'getPosts') => callApi({
//   url: '/posts',
//   method: 'get',
//   identifier,
// })


// export default  function getPosts1 = () => callApi({
//   url: '/posts',
//   method: 'get',
// })

// // export default  function getPosts() {
// //    (callApi({
// //     url: '/posts',
// //     method: 'get',
// //   }))
// // }

// export default async function getPosts() {
//    callApi({
//     url: '/posts',
//     method: 'get',
//   })
// }
// // export default {
// //   getPosts
// // }


const getPosts = () =>  callApi({
  url: '/posts',
  method: 'get',
});
export default getPosts;