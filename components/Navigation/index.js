// components/Navigation/index.js
Component({
  /*组件的属性列表*/
  properties: {
    navId: {
      type: Number,
      value: 1
    }
  },
  /*组件的初始数据*/
  data: {
    navList: [
      {id: 1, name: "首页", path: "/pages/Homepage/Homepage", icon: "../../pages/icon/navigation/home_unchecked.png", activeIcon: "../../pages/icon/navigation/home_checked.png"},
      {id: 2, name: "社团", path: "/pages/Sort/Sort", icon: "../../pages/icon/navigation/Sort_unchecked.png", activeIcon: "../../pages/icon/navigation/Sort_checked.png"},
      {id: -1, name: "论坛", path: "/pages/Forum/Forum", icon: "../../pages/icon/navigation/Forum_unchecked.png", activeIcon: "../../pages/icon/navigation/Forum_checked.png"},
      {id: 3, name: "活动", path: "/pages/activity/activity", icon: "../../pages/icon/navigation/activity_unchecked.png", activeIcon: "../../pages/icon/navigation/activity_checked.png"},
      {id: 4, name: "我的", path: "/pages/me/me", icon: "../../pages/icon/navigation/me_unchecked.png", activeIcon: "../../pages/icon/navigation/me_checked.png"}
    ],
    emptyHeight: 0
  },
  ready(){
    this.initialHeight();
  },
  /*组件的方法列表*/
  methods: {
    // 获取底部安全距离
    initialHeight(){
      const sysInfo = wx.getSystemInfoSync();
      this.setData({
        emptyHeight: sysInfo.windowHeight - sysInfo.safeArea.bottom
      })
    },
    // 跳转
    jump2Event(e){
      const data = e.currentTarget.dataset,
            currentNav = this.data.navList.filter(item => item.id == data.id)[0];
      if(currentNav['path']) {
        wx.reLaunch({
          url: currentNav['path'],
        })
      } 
    }
  }
})