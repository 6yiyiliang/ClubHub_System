// pages/System/System.js
Page({
    data: {
      features: [
        {
          id: 1,
          title: "社团全展示",
          desc: "清晰展示学校所有社团信息，方便学生了解和加入",
          icon: "../../pages/icon/navigation/Sort_checked.png"
        },
        {
          id: 2,
          title: "活动管理",
          desc: "线上发布和管理社团活动，一键报名参与",
          icon: "../../pages/icon/navigation/activity_checked.png"
        },
        {
          id: 3,
          title: "互动论坛",
          desc: "社团成员交流平台，分享活动心得",
          icon: "../../pages/icon/navigation/Forum_checked.png"
        },
        {
          id: 4,
          title: "积分系统",
          desc: "记录成员参与情况，激励社团活动",
          icon: "../../pages/icon/me/ranking.png"
        }
      ]
    },
    
    // 复制联系方式
    copyContact() {
      wx.setClipboardData({
        data: 'LylOut100k@outlook.com',
        success: () => {
          wx.showToast({ title: '邮箱已复制' });
        }
      });
    },
    
    // 其他生命周期函数...
  });