import request from '@/utils/request'

export function getUserList(query) {
  return request({
    url: '/api/user/list',
    method: 'get',
    params: query
  })
}

export function getRoleList(query) {
  return request({
    url: '/api/user/role/list',
    method: 'get',
    params: query
  })
}

export function addRole(data) {
  return request({
    url: '/api/user/role/add',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: '/api/user/role/update',
    method: 'post',
    data
  })
}