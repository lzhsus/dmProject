module.exports = function () {
  return {
    "success": "string",
    "errorCode": "string",
    "msg": "",
    "data|6-6": [{
      "id": '@string("number", 2)',
      "titName": '@开心麻花2019爆笑贺岁舞台剧 《窗前不止明月光》',
      "imgUrl": 'https://pimg.dmcdn.cn/perform/project/1381/138121_n.jpg',
      "areaId": '@string("number", 3)',
      "areaName": '@province',
      "address": '@county(true)',
      "startDate": '@datetime("yyyy-MM-dd")',
      "endDate": '@datetime("yyyy-MM-dd")',
      "minPrice": '@integer(60, 100)'
    }]
  }
}
