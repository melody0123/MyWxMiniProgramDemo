Page({
  data: {
    servicedetail:{},
  },
  onLoad: function (options) {
    const i = options.id;
    this.setData({
      servicedetail:{
        "name":"高速公路测速仪"+i,
        "city":"成都",
        "tag":"测速设备",
        "imgurl":"http://img.mukewang.com/57fdecf80001fb0406000338-240-135.jpg"
      }
    })
    wx.setNavigationBarTitle({
      title: this.data.servicedetail.name
    })
  }
})
