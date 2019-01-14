## wechat_movie 豆瓣电影小程序

![index](https://github.com/w190768613/wechat/blob/master/wechat_movie/index.png)

### 通过豆瓣api获取电影详情
``` wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + movieId,
      header: {
        'Content-Type': 'application/xml'
      },
      success: function(res) {
        var subject = res.data;
        subjectUtil.processSubject(subject);
        page.setData({
          movie: subject
        });
      }
    })
 ```
 
 ### 通过豆瓣api查询电影
 ```
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
 ```
