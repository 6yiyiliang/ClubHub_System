// pages/activity/activity.js
Page({
    data: {
      activeTab: 0, // 0-招新 1-活动
      recruitments: [
        {
          id: 1,
          title: "2023秋季招新",
          date: "2023-09-15",
          status: "报名中",
          applicants: 24,
          content: "欢迎加入计算机协会！我们将定期举办技术分享、项目实践等活动。"
        },
        {
          id: 2,
          title: "电竞社招新",
          date: "2023-09-20", 
          status: "已截止",
          applicants: 56,
          content: "寻找热爱电竞的伙伴，参加校际比赛！"
        }
      ],
      activities: [
        {
          id: 1,
          title: "编程马拉松",
          date: "2023-10-12",
          status: "报名中",
          participants: 15,
          content: "24小时极限编程挑战，丰厚奖品等你来拿！"
        }
      ],
      newRecruitment: {
        title: "",
        date: "",
        content: ""
      },
      newActivity: {
        title: "",
        date: "",
        content: ""
      },
      isManager: true // 模拟身份，实际应从后台获取
    },
  

    switchTab(e) {
        const index = parseInt(e.currentTarget.dataset.index);
        if (this.data.activeTab !== index) {
        this.setData({
            activeTab: index
        }, () => {
            // 确保DOM更新完成
            console.log('当前标签页:', index);
        });
        }
    },
  
    // 发布新招新
    submitRecruitment() {
      if (!this.data.newRecruitment.title || !this.data.newRecruitment.date) {
        wx.showToast({ title: '请填写完整信息', icon: 'none' });
        return;
      }
  
      const newItem = {
        id: Date.now(),
        title: this.data.newRecruitment.title,
        date: this.data.newRecruitment.date,
        status: "报名中",
        applicants: 0,
        content: this.data.newRecruitment.content
      };
  
      this.setData({
        recruitments: [newItem, ...this.data.recruitments],
        newRecruitment: { title: "", date: "", content: "" }
      });
  
      wx.showToast({ title: '发布成功' });
    },
  
    // 发布新活动
    submitActivity() {
      if (!this.data.newActivity.title || !this.data.newActivity.date) {
        wx.showToast({ title: '请填写完整信息', icon: 'none' });
        return;
      }
  
      const newItem = {
        id: Date.now(),
        title: this.data.newActivity.title,
        date: this.data.newActivity.date,
        status: "报名中",
        participants: 0,
        content: this.data.newActivity.content
      };
  
      this.setData({
        activities: [newItem, ...this.data.activities],
        newActivity: { title: "", date: "", content: "" }
      });
  
      wx.showToast({ title: '发布成功' });
    },
  
    // 输入变化
    handleInputChange(e) {
      const { field, type } = e.currentTarget.dataset;
      const value = e.detail.value;
      
      if (type === 'recruitment') {
        this.setData({
          [`newRecruitment.${field}`]: value
        });
      } else {
        this.setData({
          [`newActivity.${field}`]: value
        });
      }
    },
  
    // 报名操作
    signUp(e) {
      const { type, id } = e.currentTarget.dataset;
      wx.showToast({
        title: '报名成功，等待审核',
        icon: 'success'
      });
    },
  
    // 审核报名
    reviewApplicant(e) {
      const { id, action } = e.currentTarget.dataset;
      wx.showToast({
        title: action === 'approve' ? '已通过' : '已拒绝',
        icon: 'success'
      });
    }
  });