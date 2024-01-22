import request from '@/utils/request'

export function getHeroName(params) {
  return request({
    url: '/example/cats/hero_name',
    method: 'get',
    params
  })
}