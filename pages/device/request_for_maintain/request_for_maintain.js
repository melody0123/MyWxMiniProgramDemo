Page({
  data: {
    checitems:[],
    // selected:null,
    selectedid: null
  },
  onLoad: function () {
    this.setData({
      checitems:[
        {
          "id":1,
          "text":"摄像头"
        },
        {
          "id":2,
          "text":"测速仪"
        },
        {
          "id":3,
          "text":"红外传感器"
        },
        {
          "id":4,
          "text":"烟雾报警器"
        },
        {
          "id":5,
          "text":"温度传感器"
        },
        {
          "id":6,
          "text":"电路保险"
        },
        {
          "id":7,
          "text":"显示器"
        },
        {
          "id":8,
          "text":"电源"
        },
        {
          "id":9,
          "text":"红绿灯"
        },
        {
          "id":10,
          "text":"喇叭"
        },
        {
          "id":11,
          "text":"其他"
        }
      ]
    })
  },
  onSelectTag: function(e){
    const eid = e.currentTarget.dataset.id;
    const selected = this.data.selected;
    this.setData({
      // selected:selected.indexOf(eid)>-1?selected.filter(i=>i!=eid):selected.concat(eid)
      selectedid:eid
    })
    console.log(this.data.selectedid);
  }
})
