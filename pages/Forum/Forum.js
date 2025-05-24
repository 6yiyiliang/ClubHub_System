// pages/Forum/Forum.js
Page({
    data: {
      posts: [
        {
          id: 1,
          author: "张三",
          avatar: "../../pages/icon/avatar1.jpg",
          time: "10分钟前",
          content: "有人一起组队报名参加周末的志愿活动吗？",
          comments: [
            {id: 1, author: "李四", content: "我想参加！具体时间是什么时候？"},
            {id: 2, author: "王五", content: "算我一个！"}
          ],
          liked: false,
          likes: 5
        },
        {
          id: 2,
          author: "计算机协会管理员",
          avatar: "../../pages/icon/Sort/it.jpg",
          time: "1小时前",
          content: "下周将举行春季招新，欢迎大家报名！",
          comments: [],
          liked: true,
          likes: 12
        }
      ],
      newPostContent: "",
      commentInputs: {}
    },
  
    // 发布新帖子
    submitPost: function() {
      if (this.data.newPostContent.trim() === "") return;
      
      const newPost = {
        id: Date.now(),
        author: "我",
        avatar: "../../pages/icon/me/my.jpg",
        time: "刚刚",
        content: this.data.newPostContent,
        comments: [],
        liked: false,
        likes: 0
      };
      
      this.setData({
        posts: [newPost, ...this.data.posts],
        newPostContent: ""
      });
    },
  
    // 输入内容变化
    inputChange: function(e) {
      this.setData({
        newPostContent: e.detail.value
      });
    },
  
    // 点赞/取消点赞
    toggleLike: function(e) {
      const index = e.currentTarget.dataset.index;
      const posts = this.data.posts;
      posts[index].liked = !posts[index].liked;
      posts[index].likes += posts[index].liked ? 1 : -1;
      
      this.setData({ posts });
    },
  
    // 添加评论
    addComment: function(e) {
      const index = e.currentTarget.dataset.index;
      const comment = e.detail.value;
      if (comment.trim() === "") return;
      
      const posts = this.data.posts;
      posts[index].comments.push({
        id: Date.now(),
        author: "我",
        content: comment
      });
      
      // 修复：清空对应帖子的评论输入
      const commentInputs = this.data.commentInputs;
      commentInputs[index] = "";
      
      this.setData({ 
        posts,
        commentInputs 
      });
    },
    
    // 新增：评论输入变化事件
    commentInputChange: function(e) {
      const index = e.currentTarget.dataset.index;
      const value = e.detail.value;
      
      const commentInputs = this.data.commentInputs;
      commentInputs[index] = value;
      
      this.setData({ commentInputs });
    }
  });