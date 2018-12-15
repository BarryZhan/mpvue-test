import http from '../utils/http'

// export default function service (config) {
//   const func = {}
//   for (let item of config) {
//     const url = item.url
//     const urlPart = item.split('/')
//     const name = item.name || urlPart[urlPart.length - 1]
//     func[name] = function () {
//       http[item.method || 'get'](url, item.data, item.params)()
//     }
//   }
//   return func
// }

/**
 * 获取首页所有信息
 * @returns {Promise<*>}
 */
export function getIndexInfo () {
  return http.get('index/getIndexInfo', {pageSize: 10}).then((data) => {
    const {banner: {imgPath, videoPath}, supers: originalSupers, lines: originalLines} = data
    const supers = originalSupers.splice(0, 4).map(({id, userId, nickname, headImg}) => ({
      id,
      userId,
      nickname,
      headImg
    }))
    const lines = originalLines.map(({id, background, name}) => ({id, background, name}))
    return {
      banner: {imgPath, videoPath},
      supers,
      lines
    }
  })
}
