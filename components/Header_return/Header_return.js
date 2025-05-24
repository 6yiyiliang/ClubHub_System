Component({
    properties: {
      title: {
        type: String,
        value: '标题'
      }
    },
    methods: {
      onReturn() {
        wx.navigateBack({
          delta: 1
        });
      }
    }
  });