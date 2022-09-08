import request from '@/utils/request'

// 事件曝光
export const exposure = () => request({
  url: '/api/event?page=0&size=10&sort=id%2Cdesc',
})
// 产业助农 
export const agriculture = () => request({
  url: "https://api.zjylsz.com/api/products?page=1&limit=5&keyword=&sid=0&news=0&priceOrder=&salesOrder=&isIntegral=0"
})
// 社区服务
export const server = () => request({
  url: '/api/userWork?page=0&size=1000000'
})
// 共富分排行
export const score = () => request({
  url: '/api/tbUsers?page=' + 0 + '&size=' + 15 + '&sort=scores,desc'
})
// 志愿者活动
export const activity = ({
  volunteerType
}) => request({
  url: '/api/volunteerActivity?page=0&size=10&sort=id%2Cdesc' + '&volunteerType=' + volunteerType
})
// 人户数量关系
export const household = () => request({
  url: '/api/tbUsers/house-hold'
})
// 男女人数
export const sex = () => request({
  url: '/api/tbUsers/sex'
})
// 人员统计
export const typecount = () => request({
  url: '/api/tbUsers/type/count'
})
// 村集体收入
export const collectiveIncomee = () => request({
  url: '/api/collectiveIncome/getIncome'
})
// 人员统计
// 审核 
export const Init = ({
  houseHold,
  page,
  size,
}) => request({
  url: 'api/tbUsers?page=' + page + '&size=' + size + '&houseHold=' + houseHold,
})
// 核酸检测统计

 export const Nucleic = ()=>request({
  url:'/api/tbUsers/count/checked-in-5day'
 })

