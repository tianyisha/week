import Mock from 'mockjs'
export default Mock.mock({
    "list|10-20": [{
        "title": '@ctitle(2, 5)',
        "info": '@ctitle(10,15)',
        'time': '@ctime(yyyy - mm - dd)',
        "type|0-3": 1,
        "bool": "@boolean"
    }]
})