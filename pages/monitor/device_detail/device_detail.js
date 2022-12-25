const app = getApp();
Page({
  data: {
    spacedata:{},
    spaceimgs:[],
    currentIndex:1
  },
  onLoad: function (option) {
    console.log(option);
    this.getDeviceList(option.id);
  },
  getDeviceList:function(id) {
    console.log(id);
    let that = this;
    wx.request({
      url: 'https://www.ylxteach.net/teach-demo/device_file_servlet_action?action=get_device_record',
      data: {"device_id": id},
      method: 'POST',
      header: {"content-type": "application/x-www-form-urlencoded", "x-requested-with": "XMLHttpRequest", "Cookie": "JSESSIONID=" + app.globalData.sessionId},
      success: function(res) {
        console.log("[onDeviceListTap]查询成功：" + JSON.stringify(res));
        that.handleDeviceRecord(res.data);
      },
      fail: function(res) {
        console.log("[onDeviceListTap]查询失败：" + JSON.stringify(res));
      }
    })
  },
  handleDeviceRecord: function(data) {
    this.setData({
      spacedata: {
        "deviceId":data.aaData[0].device_id,
        "deviceName":data.aaData[0].device_name,
        "createTime":data.aaData[0].create_time,
        "deviceType":data.aaData[0].device_type,
      }
    });
  },
  setCurrent: function(e){  //当前图片索引
    this.setData({
      currentIndex:e.detail.current+1
    })
  },
  imgPreview: function(){ //图片预览
    const imgs = this.data.spaceimgs;
    wx.previewImage({
      current: imgs[this.data.currentIndex-1], // 当前显示图片的http链接
      urls: imgs // 需要预览的图片http链接列表
    })
  },
  getAddress:function(e){
    const d = e.currentTarget.dataset;
    const address = d.address;
    const latitude = d.latitude;
    const longitude = d.longitude;
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 18,
      // name: address,
      address: address,
      success:function(res){
        console.log(res);
      },
      fail:function(res){
        console.log(res);
      }
    })
  },
  reserveHandle: function(){
    wx.navigateTo({
      url: '../spacereserve/spacereserve'
    })
  },
  goApply: function(){
    wx.navigateTo({
      url: '../apply/apply'
    })
  }
  // formateNumber:function(n){
  //   return n>9?n:'0'+n
  // }
})
