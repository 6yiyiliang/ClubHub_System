// pages/Material/Material.js
Page({
    data: {
      avatarUrl: "../../pages/icon/me/my.jpg",
      username: "漪",
      position: "青年志愿者协会技术部副部长"
    },
  
    onLoad(options) {
      // 可加载用户已有数据
    },
  
    onChooseAvatar(e) {
      const that = this;
      wx.chooseImage({
        count: 1,
        success(res) {
          const tempFilePaths = res.tempFilePaths;
          that.setData({
            avatarUrl: tempFilePaths[0]
          });
        }
      });
    },
  
    onUsernameInput(e) {
      this.setData({
        username: e.detail.value
      });
    },
  
    onPositionInput(e) {
      this.setData({
        position: e.detail.value
      });
    },
  
    onSubmit() {
        const { avatarUrl, username, position } = this.data;
        const app = getApp();
        app.globalData.userInfo = { avatarUrl, username, position };
      
        wx.showToast({
          title: '保存成功',
          icon: 'success'
        });
      
        wx.navigateBack(); 
      }
      
  });
  