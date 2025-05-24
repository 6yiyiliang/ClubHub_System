// components/Header/index.js
Component({
  /*组件的属性列表*/
  properties: {
    title: {
      type: String,
      value: "标题"
    }
  },
  /*组件的初始数据*/
  data: {
    navBarHeight: 0
  },
  ready(){
    const sysInfo = wx.getSystemInfoSync();
    this.setData({
      navBarHeight: sysInfo.statusBarHeight
    });
  },
  /*组件的方法列表*/
  methods: {
    
  },
})