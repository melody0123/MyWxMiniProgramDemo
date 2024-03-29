//index.js
//获取应用实例
// var app = getApp();
Page({
  data: {
    indexmenu:[],
    imgUrls: []
  },
  onLoad:function(){
    //生命周期函数--监听页面加载
    this.fetchData();
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  fetchData:function(){
    this.setData({
      indexmenu:[
        {
          'icon':'./../../images/icon_03.png',
          'text':'设备查询',
          'url':'/pages/monitor/device/device'
        },
        {
          'icon':'./../../images/icon_09.png',
          'text':'问题反馈',
          'url':'/pages/user/question/question'
        },
        {
          'icon':'./../../images/icon_11.png',
          'text':'设备保修',
          'url':'/pages/device/request_for_maintain/request_for_maintain'
        },
        {
          'icon':'./../../images/icon_13.png',
          'text':'添加设备',
          'url':'/pages/device/add_device/add_device'
        },
        {
          'icon':'./../../images/icon_01.png',
          'text':'电子木鱼',
          'url':'/pages/user/wooden_fish/wooden_fish'
        }
      ],
      imgUrls: [
        '../../images/banner_02.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    })
  },
  changeRoute:function(url){
    wx.navigateTo({
      url: `../${url}/${url}`
    })
  },
  onReady:function(){
    //生命周期函数--监听页面初次渲染完成
    // console.log('onReady');
  },
  onShow :function(){
    //生命周期函数--监听页面显示
    // console.log('onShow');
  },
  onHide :function(){
    //生命周期函数--监听页面隐藏
    // console.log('onHide');
  },
  onUnload :function(){
    //生命周期函数--监听页面卸载
    // console.log('onUnload');
  },
  onPullDownRefresh:function(){
    //页面相关事件处理函数--监听用户下拉动作
    // console.log('onPullDownRefresh');
  },
  onReachBottom:function(){
    //页面上拉触底事件的处理函数
    // console.log('onReachBottom');
  }
})
