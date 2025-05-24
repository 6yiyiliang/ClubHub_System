// pages/login/login.js
Page({
    onLogin() {
      wx.getUserProfile({
        desc: '获取您的公开信息',
        success: (res) => {
          console.log('登录成功:', res.userInfo);
          // 跳转到 pages/index/index 页面
          wx.reLaunch({
            url: '/pages/index/index' // 修改跳转路径
          });
        },
        fail: (err) => {
          console.log('用户拒绝授权', err);
        }
      });
    }
  });