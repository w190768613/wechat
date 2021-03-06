// pages/search/search.js
var subjectUtil = require('../../utils/subjectUtil.js');
Page({
  data: {
    // text:"这是一个页面"
    inputVal: "",
    movies: [],
    hidden: true,
    modalHidden: true,
    modalHiddenOne: true
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  bindKeyInput: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  search: function () {
    if (this.data.inputVal == "") {
      return;
    }
   
    var page = this;
     
    wx.request({
      url: 'http://douban.uieee.com/v2/movie/search?q=' + page.data.inputVal,
        header: {
          'Content-Type': 'application/xml'
        },
        success: function(res) {
          var subjects = res.data.subjects;
          subjectUtil.processSubjects(subjects);
          page.setData({
            movies: subjects,
        });
      }
    })
  },
  hideModal: function () {
    this.setData({
      modalHidden: true
    })
  },
  hideModalOne: function () {
    this.setData({
      modalHiddenOne: true
    })
  },
  detail: function (e) {
    getApp().detail(e);
  },
})