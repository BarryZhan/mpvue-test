import http from '../utils/request'

/**
 * 获取商圈活动/热门分享
 * @param aricle 文章类型（1:商圈活动，2:热门分享）
 * @param pageNum
 * @returns {Promise<*>}
 */
export function getAricles (aricle = 1, pageNum = 1) {
  return http.get('aricle/getAricles', {pageNum, pageSize: 10, aricle})
}

/**
 * 获取商圈活动/热门分享详情
 * @param id
 * @returns {Promise<*>}
 */
export function getAricleDetail (id) {
  return http.get('aricle/getAricleDetail', {id})
}
