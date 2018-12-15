import http from '../utils/request'

/**
 * 根据code获取用户信息
 * @param code
 * @returns {Promise<*>}
 */
export function getUserByCode (code) {
  return http.get('user/getUserByCode', {code})
}

/**
 * 根据ID获取用户基本信息
 * @param id
 * @returns {Promise<*>}
 */
export function getUserById (id) {
  return http.get('user/getUserById', {id})
}

/**
 * 根据openId获取用户基本信息
 * @param openId
 * @returns {Promise<*>}
 */
export function getUserByOpenId (openId) {
  return http.get('user/getUserByOpenId', {openId})
}

/**
 * 获取当前登录用户线路
 * @param categoryId
 * @param pageNum
 * @returns {Promise<*>}
 */
export function getUserLines (categoryId, pageNum = 1) {
  return http.get('line/getUserLines', {
    categoryId,
    pageNum,
    pageSize: 10
  })
}

/**
 * 获取当前登录用户喜欢信息
 * @param fromType
 * @param pageNum
 * @returns {Promise<*>}
 */
export function getUserLikes (fromType, pageNum = 1) {
  return http.get('like/getUserLikes', {
    fromType,
    pageNum,
    pageSize: 10
  })
}

/**
 * 获取当前登录用户评价
 * @param fromType
 * @param pageNum
 * @returns {Promise<*>}
 */
export function getUserComments (fromType, pageNum = 1) {
  return http.get('comment/getUserComments', {
    fromType,
    pageNum,
    pageSize: 10
  })
}

/**
 * 新增评论
 * @param userComment
 * @returns {Promise<*>}
 */
export function addComment (userComment) {
  return http.post('comment/addComment', {userComment})
}

/**
 * 新增评论
 * @param id 评论编号
 * @returns {Promise<*>}
 */
export function deleteComment (id) {
  return http.post('comment/deleteComment', {id})
}

/**
 * 添加关注
 * @param attentionUserId 被关注人id
 * @returns {Promise<*>}
 */
export function addAttention (attentionUserId) {
  return http.post('attention/addAttention', {attentionUserId})
}

/**
 * 取消关注
 * @param attentionUserId 被关注人id
 * @returns {Promise<*>}
 */
export function cancelAttention (attentionUserId) {
  return http.get('attention/cancelAttention', {attentionUserId})
}

/**
 * 添加收藏
 * @param attentionUserId 被关注人id
 * @returns {Promise<*>}
 */
export function addAttention (attentionUserId) {
  return http.post('collection/addCollection', {attentionUserId})
}

/**
 * 取消关注
 * @param attentionUserId 被关注人id
 * @returns {Promise<*>}
 */
export function cancelAttention (attentionUserId) {
  return http.get('attention/cancelAttention', {attentionUserId})
}
