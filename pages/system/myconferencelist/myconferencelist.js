Page({
  data: {
    reservelist:[]
  },
  onLoad: function () {
    this.fetchData();
  },
  fetchData:function(){
    this.setData({
      reservelist:[
        {
          "id": 1,
          "name": "张江第一会议室摄像头",
          "time": "2016/08/25 13:00",
          "reserver": "张先生",
          "imgurl": "http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"
        },
        {
          "id": 2,
          "name": "方糖小镇会议室温度传感器",
          "time": "2016/08/25 13:00",
          "reserver": "张先生",
          "imgurl": "http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"
        },
        {
          "id": 3,
          "name": "盛大研发中心会议室烟雾报警器",
          "time": "2016/08/25 13:00",
          "reserver": "张先生",
          "imgurl": "http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"
        },
        {
          "id": 4,
          "name": "科创中心会议室电子眼",
          "time": "2016/08/25 13:00",
          "reserver": "张先生",
          "imgurl": "http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"
        },
        {
          "id": 5,
          "name": "长三角创业会会议室门窗压力传感器",
          "time": "2016/08/25 13:00",
          "reserver": "张先生",
          "imgurl": "http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"
        },
        {
          "id": 6,
          "name": "长阳谷优客工场会议室智慧电表",
          "time": "2016/08/25 13:00",
          "reserver": "张先生",
          "imgurl": "http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"
        }
      ]
    })
  }
})
