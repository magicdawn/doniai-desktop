import request from './request'
const querystring = require('querystring')
const ApiVersion = '/api/api'

export async function getVideos(params) {
  return request('get', `${ApiVersion}/live?${querystring.stringify(params)}`)
}

export async function getVideo(video_id) {
  return request('get', `${ApiVersion}/live/detail?video_id=${video_id}`)
}

export async function getCategories() {
  return request('get', `${ApiVersion}/live/categories`)
}

export async function getHotVideos(video_id) {
  return request('get', `${ApiVersion}/live/hot?video_id=${video_id}`)
}
