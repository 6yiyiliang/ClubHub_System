// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';

Page({
  data: {
    motto: '欢迎登录校园社团活动管理系统',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input'),
    canIUseChooseAvatar: wx.canIUse('chooseAvatar'),
  },

  // 跳转到日志页面
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },

  // 选择头像
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail || {};
    if (!avatarUrl) return;

    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: this.data.userInfo.nickName.trim() !== '' && avatarUrl !== defaultAvatarUrl,
    });

    // 检查是否满足跳转条件
    this.checkAndNavigate();
  },

  // 输入昵称
  onInputChange(e) {
    const nickName = e.detail.value.trim();

    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName !== '' && this.data.userInfo.avatarUrl !== defaultAvatarUrl,
    });

    // 检查是否满足跳转条件
    this.checkAndNavigate();
  },

  // 获取用户信息
  getUserProfile() {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        this.setData({
          userInfo: {
            avatarUrl: res.userInfo.avatarUrl || defaultAvatarUrl,
            nickName: res.userInfo.nickName || '',
          },
          hasUserInfo: true
        });

        // 检查是否满足跳转条件
        this.checkAndNavigate();
      },
      fail: (err) => {
        console.error('获取用户信息失败', err);
      }
    });
  },

  // 检查是否满足跳转条件，并跳转到 Homepage
  checkAndNavigate() {
    if (this.data.hasUserInfo) {
      wx.redirectTo({
        url: '/pages/Homepage/Homepage'
      });
    }
  }
});