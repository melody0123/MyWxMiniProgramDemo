// pages/monitor/action/action.js
const app = getApp();
Page({
  data: {
    deviceList:'',
  },

  onDeviceListTap(e) {
    let that = this;
    wx.request({
      url: 'https://www.ylxteach.net/teach-demo/device_file_servlet_action?action=get_device_record',
      data: {"time_from": "2022-11-01 00:00:00", "time_to": "2022-12-30 23:59:59"},
      method: 'POST',
      header: {"content-type": "application/x-www-form-urlencoded", "x-requested-with": "XMLHttpRequest", "Cookie": "JSESSIONID=" + app.globalData.sessionId},
      success: function(res) {
        console.log("[onDeviceListTap]查询成功：" + JSON.stringify(res));
        handleGetDeviceRecordResult(res.data);
      },
      fail: function(res) {
        console.log("[onDeviceListTap]查询失败：" + JSON.stringify(res));
      }
    })
  },

  handleGetDeviceRecordResult(data) {
    // display data
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  }
})