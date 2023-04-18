#纯前端vue3商城项目模版+跟随项目的高定制UI框架+可配路径tabBar

# 产品简介
这是一套基于 uni-app vue3 开发的移动端商城
最基础的纯前端项目 和 一些基本配置 供参考和学习
# 项目构成
使用了uni-ui  和 部分插件市场插件 【**lb-picker**,**custom-waterfalls-flow-vue3-2**】
也包含了项目内部自定义的UI框架 
其中自定义的UI框架【**lyz-ui**】也是纯手写的 也是我自己实际项目中会用到的 根据自己的项目适当调整 UI风格

部分js还需要根据实际的情况修改
【**http.js** 】请求封装 主要包含了请求拦截的处理
【**config.js** 】一些项目常量 主要包含了请求地址 和 阿里云oss的上传地址
【**login.js**】 登陆方法封装 主要包含了用户登陆的处理 和 返回值处理
【**lyz-aloss-uploader.js** 】阿里云oss文件上传 主要包含了文件上传的参数配置和临时目录配置和生成文件随机名称的配置

项目中还用到了一个**很重要的css**【common.css】
这里面主要放了一些常用的css类名方便平常快速构建页面
** 字体大小 字体颜色 flex布局 背景色 间距 文字换行 定位** 

##可配路径tabBar
由于经常使用自定义tabbar 基本都是v-if v-show 或者 router-view 实际开发后发现达不到原生的tabbar的切换效果 只能想破脑袋的去做
这个做法稍微奇怪了一点 但却实际的解决了问题 还是很开心的 特别是针对于 DIY可视化/低代码 生成项目首页 和 底部tabbar的项目来说算是提供了一个 很好的思路

我的方法很简单 保持原有的tabbar配置项 使用uni.hideTabBar()隐藏原生tabbar 然后自定义一个底部tabbar 让其跳转通过uni.switchTab进行跳转
如果跳转页面不是tabbar的配置页面 可以痛通过uni.switchTab的fail回调 重新使用uni.redirectTo跳转 在非原生tabbar配置以外的页面增加 自定义tabbar即可 逻辑操作可在自定义tabbar组件内部可判断
这个做法就是利用了 原生tabbar的跳转能力 去自定义tabbar
当然也可以跳转到原生tabbar配置之外的页面 只需要在非原生tabbar页面增加自定义组件即可
详细的做法可下载源码了解和体验

###**该项目只是提供一些个人的项目搭建和vue组件封装思路 如果有好的建议可以私信聊聊**



由于项目是空闲时间搭建的有很多页面不完善 后期会慢慢增加 并且完善此项目
####目前主包含了以下页面
**首页 ** **积分 ** **购物车 ** **我的** **商品详情** **下单页面**  **订单列表 积分订单 评价中心 收货地址列表和编辑 优惠券**




# 整体效果图
![](http://www.liwanying.top/applate-icon/app-img/md-img.png)

# 目录结构
```
├── common               			# 公共目录
│   │── common.css               # 公共样式
│   │── config.js                    # 公共常量
│   │── http.js                       # 请求封装
│   │── login.js                      # 登陆方法封装
│   └── util.js                        # 常用工具函数
├── components                     # 自定义组件
│   └── lyz-ui                         # 自定义UI组件
├── api                                   # 接口api文件
├── js_sdk                     		 # js sdk
│   │── lyz-debounce             # 节流和防抖
│   └── lyz-aloss-uploader      # 阿里云oss文件处理
├── pages                       	    # 页面
│   │── index                         # 首页的可变模版配置
│   └── tabbar                       # tabbar页面
├── static                               # 项目资源文件
├── uni_modules
├── App.vue
├── main.js
├── mainfest.json
├── pages.json
└── uni.scss
```
##[项目图片点我下载](http://www.liwanying.top/applate-icon/applate-icon.zip)


**如有问题可扫码添加微信，备注说明对应的插件名称**
![](http://www.liwanying.top/applate-icon/app-img/WechatIMG1851.jpeg)
