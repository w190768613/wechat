## wechat_weather 天气预报小程序

![index](https://github.com/w190768613/wechat/blob/master/wechat_weather/index.png)

### 模板
```
// 调用模板文件
<import src="../template/itemtpl" />
<view class="future">
  <block wx:for="{{future}}" wx:key="index">
    <template is="future-item" data="{{item}}" />
  </block>
</view>

// 模板文件
<template name="future-item">
  <view class="future-item">
    <view>{{item.date}} </view>
    <view> {{item.weather}} </view>
    <view>{{item.wind}}</view>
    <view> {{item.temperature}} </view>
  </view>
</template>
```

