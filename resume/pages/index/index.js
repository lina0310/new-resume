// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    name:"xxx",//姓名
    spell:"xxxxx",//英文名
    job:"xxxxxx",//职业
    exp:"xxxxxx",//几年经验
    tel:"136xxxxxxxx",//手机号
    sex:"女",//性别
    age:"25",//年龄
    email:"xxx@163.com",//邮箱地址
    address:"北京市",//现居住地
    address1:"内蒙古",//籍贯
    education:[//教育
      {
        school:"xxxx大学",//学校名称
        major:"计算机应用技术",//专业
        year:"2012.9-2016.6",//起止时间
      }
    ],
    work:[//工作经历
      {
        company:"xxxxxx有限公司",
        job:"前端开发",
        year:"xxxx年--xxxx年",
        desc:[
          {
            desc:"a.参与项目需求讨论，开发、维护工作",
          },
          {
            desc:"b.参与前端部分研发工作。",
          },
          {
            desc:"c.与项目经理沟通，提出前端项目排期，并且执行前端项目计划。",
          },
        ],
      },
      {
        company:"xxxxxxx有限公司",
        job:"前端开发",
        year:"xxxx年11月--xxxxx年3月",
        desc:[
          {
            desc:"a.参与PC端页面，APP前端页面，以及微信公众号页面的切图工作。",
          },
          {
            desc:"b.项目使用Jquery的ajax方法实现交互，同时进行模版数据渲染。",
          },
          {
            desc:"c.使用Jquery实现页面动画特效以及页面兼容性处理。",
          },
          {
            desc:"d.使用Svn版本控制器进行管理。",
          }
        ],
      }
    ],
    project:[//项目经验
      {
        name:"xxxxxx",
        desc:"xxxx用来管理电商所有信息，主要实现后台分类管理、商品管理、订单管理、用户管理、banner管理、碎片管理等功能。",
        duty:[
          {
            desc:"a.负责后台管理系统所有前端部分的开发，维护工作。",
          },
          {
            desc:"b.后台管理页面结构使用了Iview框架布局。",
          },
          {
            desc:"c.后台管理栏目，分类管理，商品管理，订单管理，用户管理等，使用axios交互实现CURD操作。",
          },
          {
            desc:"d.使用Wangeditor组件实现了富文本模块，并封装使用。"
          },
          {
            desc:"e.使用Iview框架中的Upload组件实现了图片上传功能。使用Page分页器实现了商品列表的分页功能。"
          },
        ]
      },
      {
        name:"xxxxxx",
        desc:"项目使用前后端分离模式，前端使用Vue-cli+Vue-router+Axios部署架构；使用接口的方式与后端进行数据交互。",
        duty:[
          {
            desc:"a.负责网站前端所有功能的开发，维护工作。使用Vue-cli 架构部署代码",
          },
          {
            desc:"b.与后台制定RestFul接口风格，包括状态码，接口信息，参数格式的规范。",
          },
          {
            desc:"c. 使用Vue-router实现路由封装，对组件进行拆分，方便组件复用。",
          },
          {
            desc:"d. 使用SCSS进行样式封装、样式编译。",
          },
          {
            desc:"e. 使用Vuex 管理用户信息，token校验，以及实现网站购物车功能。",
          },
          {
            desc:"f. 使用Axios进行数据交互，v-for等指令实现数据循环。",
          },
          {
            desc:"g. 使用Vue-awesome-swiper插件实现首页轮播图特效。",
          },
          {
            desc:"h. 使用Vue-lazyload插件实现商品图片懒加载功能，提高网站性能。",
          },
          {
            desc:" i. 使用Pagination分页器实现了商品列表的分页功能。"
          },
          {
            desc:"J. 使用ES6类的思想进行表单验证的封装，实现手机号、邮箱、密码等表单的验证。",
          },
        ],
      },
    ],
    //自我评价
    introduction:"本人性格开朗、稳重、有活力,待人热情、真诚;对待工作认真负责,善于沟通,与团队相处融洽;上进心强、勤于学习能不断提高自身的能力和综合素质。在未来的工作中,我将以充沛的精力,刻苦专研的精神来努力工作，稳定地提高自己的工作能力,与企业同步发展。",
    //项目展示(轮播图展示)
    bnrUrl:[
      {
        url:"xxxx",
      },
      {
        url:"xxxx",
      },
      {
        url:"xxxx",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var width = wx.getSystemInfoSync().windowWidth;
    var height = wx.getSystemInfoSync().windowHeight;
    this.setData({
      width: width,
      height: height,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})