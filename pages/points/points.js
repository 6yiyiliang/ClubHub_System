// pages/points/points.js
Page({
    data: {
      pointsList: []
    },
  
    onLoad() {
      // 示例数据
      const list = [
        { id: 1, name: "李四", score: 260, avatar: "../../pages/icon/avatar2.jpg" },
        { id: 2, name: "张三", score: 320, avatar: "../../pages/icon/avatar1.jpg" },
        { id: 3, name: "王五", score: 290, avatar: "../../pages/icon/avatar3.jpg" },
        { id: 4, name: "赵六", score: 280, avatar: "../../pages/icon/avatar5.jpg" },
        { id: 5, name: "田七", score: 310, avatar: "../../pages/icon/avatar4.jpg" }
      ];
  
      const sortedList = this.mergeSort(list);
      this.setData({ pointsList: sortedList });
    },
  
    // 使用归并排序算法对积分排序（降序）
    mergeSort(arr) {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = this.mergeSort(arr.slice(0, mid));
      const right = this.mergeSort(arr.slice(mid));
      return this.merge(left, right);
    },
  
    merge(left, right) {
      const result = [];
      while (left.length && right.length) {
        if (left[0].score >= right[0].score) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      return result.concat(left, right);
    }
  });
  