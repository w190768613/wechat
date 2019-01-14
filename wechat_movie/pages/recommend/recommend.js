// pages/recommend/recommend.js

var subjectUtil = require('../../utils/subjectUtil.js');
var movieRecomData = require('../../data/movieRecom.js')
Page({
  data: {
    movies: [],
    hidden: false
  },
  // 页面初始化 options为页面跳转所带来的参数
  onLoad: function (options) {
    this.loadMovie();
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
  detail: function (e) {
    getApp().detail(e);
  },
  loadMovie: function () {
    var page = this;
    var subjects = movieRecomData.subjects;
    subjectUtil.processSubjects(subjects);
    page.setData({ movies: subjects, hidden: true });
  }
})