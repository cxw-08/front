import Mock from 'mockjs'
let userList = []

// 模拟登陆接口
Mock.mock(/\/login\/byPassword/, 'post', (options) => {
  const body = JSON.parse(options.body)
  console.log(body)
  return {
    "status": 0,
    "msg": "登录成功", //返回文字描述
    "data": {
      "uid": 5,
      "username": "XiAoRayL", //用户名
      "password": null, //密码
      "email": "1907402664@qq.com", //电子邮箱，比如 example@qq.com
      "phoneNum": "13181003288",
      "headUrl": null,
      "age": 18,
      "gender": "男"
    } //返回数据
  }
})

//模拟注册接口
Mock.mock(/\/register/, 'post', (options) => {
  const body = JSON.parse(options.body)
  userList.push(Mock.mock(
    {
      'useId': '@increment()',
      "username": body.username, //用户名
      "password": body.password, //密码
      "email": body.email, //电子邮箱，比如 example@qq.com
      "phoneNum": body.phoneNum, //电话
      "age": body.age, //年龄
      "gender": body.gender, //性别
      "code": body.code //验证码
    }
  ))
  console.log('uselist', userList)
  return {
    "status": 0,
    "msg": "注册成功", //返回文字描述
    "data": null //返回数据
  }
})

Mock.mock(/\/movie/, 'post', () => {
  return {
    "code": 0,
    "data": {
      "records": [
        {
          "id": 157, //电影id
          "movieName": "哆啦A梦：伴我同行2", //电影名
          "movieStatus": 1, //电影状态
          "movieStart": "2021-05-28 08:00:00", //上映时间
          "movieMinute": 120, //电影时长
          "movieBrief": "时隔6年，动画电影“伴我同行”系列回归，同时本片也是该系列的终章。大雄为了实现奶奶看到妻子的愿望，想坐着时光机去未来参加他的婚礼，但爱情长跑50年终于要娶到静香的大雄竟然想逃婚…", //简介
          "movieScore": 9.2, //评分
          "movieMoney": 106000000, //票房
          "movieArea": "日本", //电影产地
          "movieType": "剧情／动画", //电影类型
          "movieHead": "https://p0.meituan.net/movie/69291d617c3dc5dcac5e3bf29dda63ac2200192.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 1234000, //日票房
          "wantLook": 0 //想看人数
        },
        {
          "id": 158, //电影id
          "movieName": "1921", //电影名
          "movieStatus": 2, //电影状态
          "movieStart": "2021-07-01 08:00:00", //上映时间
          "movieMinute": 120, //电影时长
          "movieBrief": "1921年的上海，租界林立，局势剑拔弩张。来自五湖四海平均年龄仅28岁的热血青年们，突破国际各股复杂势力的监控和追踪，在上海共聚，创立中国共产党。从此中国历史进入了新篇章。", //简介
          "movieScore": 0, //评分
          "movieMoney": 1312310, //票房
          "movieArea": "中国大陆", //电影产地
          "movieType": "剧情／历史", //电影类型
          "movieHead": "https://p1.meituan.net/movie/63cb3dbbaff624b236b2e22b2ee59cff1553093.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 345000, //日票房
          "wantLook": 177176 //想看人数
        },
        {
          "id": 159, //电影id
          "movieName": "再见，少年", //电影名
          "movieStatus": 2, //电影状态
          "movieStart": "2021-07-01 08:00:00", //上映时间
          "movieMinute": 120, //电影时长
          "movieBrief": "影片讲述了千禧年发生在南方小镇上的一段曾经无限接近，却又渐行渐远的少年情谊。“好学生”黎菲与“坏孩子”张辰浩，各自经历了时代大潮下家庭的变迁，一起奋力而坚韧地成长。然而高考前的一场剧变，让青春笼上阴影，最终裹挟住了二人的命运。", //简介
          "movieScore": 0, //评分
          "movieMoney": 56757567, //票房
          "movieArea": "中国大陆", //电影产地
          "movieType": "青春／剧情", //电影类型
          "movieHead": "https://p0.meituan.net/movie/212eb488c085368630ab12fd104f52512585862.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 896660, //日票房
          "wantLook": 115788 //想看人数
        },
        {
          "id": 160, //电影id
          "movieName": "人之怒", //电影名
          "movieStatus": 1, //电影状态
          "movieStart": "2021-05-10 08:00:00", //上映时间
          "movieMinute": 120, //电影时长
          "movieBrief": "在一次全副武装的运钞车劫案中，梅斯先生（杰森·斯坦森饰）的儿子作为案发目击者被劫匪杀害。怒火中烧的梅斯为报丧子之仇，化身H卧底成为运钞车安保，试图找出杀害他儿子的劫匪以及与劫匪暗中勾结的安保公司内鬼。", //简介
          "movieScore": 0, //评分
          "movieMoney": 157000000, //票房
          "movieArea": "中国大陆", //电影产地
          "movieType": "动作", //电影类型
          "movieHead": "https://p0.meituan.net/moviemachine/e1178cc2abab5938c2113876da248fe0286888.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 756767, //日票房
          "wantLook": 0 //想看人数
        },
        {
          "id": 161, //电影id
          "movieName": "古董局中局2", //电影名
          "movieStatus": 2, //电影状态
          "movieStart": "2021-06-09 23:46:54", //上映时间
          "movieMinute": 135, //电影时长
          "movieBrief": "来自日本的木户小姐（松峰莉璃 饰）即将向中国归还一尊唐代武则天明堂佛头，却指明要文物界权威组织“五脉”旗下白字门许家后人出面接收。但五脉白字门早已没落，许家后人也不知所踪。情势紧张，五脉掌门黄克武的孙女黄烟烟（辛芷蕾 饰）却表示，自己有办法找到许家后人的踪迹。而当初背负汉奸骂名，将佛头送去日本的白字门家主许一城之孙——许愿（雷佳音 饰），有一身鉴古天赋的他，如今只是一个胸无大志的电器铺小老板，靠倒卖电器勉强维持生计。许愿幼年时因为一场火灾失去了母亲，而父亲许和平在火灾之后便对他保持着疏离的态度，不仅如此，他还要承受着外界对自己家族的骂名——时至今日，在黄烟烟的劝说下，他不情愿的前往与五脉交涉，却敏锐地察觉到佛头是赝品的事实。", //简介
          "movieScore": 0, //评分
          "movieMoney": 6575757, //票房
          "movieArea": "中国大陆", //电影产地
          "movieType": "剧情、逻辑", //电影类型
          "movieHead": "https://p0.meituan.net/movie/901384f7dfef377705548c26bcec455c2185870.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 12009, //日票房
          "wantLook": 167398 //想看人数
        },
        {
          "id": 162, //电影id
          "movieName": "我要我们在一起", //电影名
          "movieStatus": 1, //电影状态
          "movieStart": "2021-05-20 08:00:00", //上映时间
          "movieMinute": 120, //电影时长
          "movieBrief": "你有没有爱过一个人，曾经拼了命，只为和TA在一起。十年前，差生吕钦扬当众告白凌一尧，两人从校园步入社会，为了让她幸福，他不惜以命相搏。然而金钱、房子、婚姻等现实的考验，却将两人越推越远。十年长跑，他们能否还记得曾经刻在心底的约定：我要我们在一起。电影改编自长帖《与我十年长跑的女友明天要嫁人了》。", //简介
          "movieScore": 8, //评分
          "movieMoney": 272000000, //票房
          "movieArea": "中国大陆", //电影产地
          "movieType": "爱情", //电影类型
          "movieHead": "https://p0.meituan.net/movie/dc2fed6001e809e4553f90cc6fad9a59245170.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 5258000, //日票房
          "wantLook": 0 //想看人数
        },
        {
          "id": 163, //电影id
          "movieName": "四海", //电影名
          "movieStatus": 2, //电影状态
          "movieStart": "2022-02-01 08:00:00", //上映时间
          "movieMinute": 120, //电影时长
          "movieBrief": "擅长摩托车特技的少年吴仁耀（刘昊然 饰）与他多年未见的父亲吴仁腾（沈腾 饰）再度相逢，此时女孩欢颂（刘浩存 饰）和她的哥哥的车队又意外闯入他们的生活，少年阿耀究竟收获的是朋友还是敌人，是快乐还是烦恼？他们终将名扬四海还是四海为家？北回归线上的小海岛与南方最繁华大城市的公路之旅，燃烧着他们的成长与青春。", //简介
          "movieScore": 0, //评分
          "movieMoney": 123400, //票房
          "movieArea": "中国大陆", //电影产地
          "movieType": "喜剧／青春／动作", //电影类型
          "movieHead": "https://p0.meituan.net/movie/923aa8ebb795888b550b4951124682642023435.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 20098, //日票房
          "wantLook": 17216 //想看人数
        },
        {
          "id": 164, //电影id
          "movieName": "指环王：王者无敌", //电影名
          "movieStatus": 1, //电影状态
          "movieStart": "2021-05-14 08:00:00", //上映时间
          "movieMinute": 120, //电影时长
          "movieBrief": "魔改编自J • R • R •托尔金的史诗巨著，在三部曲终结篇《指环王：王者无敌》中，各方势力集结，决定中土世界命运的最终决战也拉开了帷幕。光明与黑暗之间进行着激烈对决，护戒联盟的成员阿拉贡也直面身份，肩负起人皇继承人的担当与责任。然而，战胜邪恶的唯一希望仍然紧系在霍比特人弗罗多身上。为完成熔毁至尊戒这项几乎不可能完成的任务，弗罗多在忠诚的朋友山姆和可恶又可怜的咕噜的陪伴下，冒险深入黑暗之地魔多。", //简介
          "movieScore": 9.5, //评分
          "movieMoney": 119000000, //票房
          "movieArea": "中国大陆", //电影产地
          "movieType": "剧情／动作／奇幻／冒险", //电影类型
          "movieHead": "https://p0.meituan.net/moviemachine/b183a9143031dd4aab5ca95affe410f2579878.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 43535435, //日票房
          "wantLook": 0 //想看人数
        },
        {
          "id": 165, //电影id
          "movieName": "热带往事", //电影名
          "movieStatus": 2, //电影状态
          "movieStart": "2021-06-18 08:00:00", //上映时间
          "movieMinute": 120, //电影时长
          "movieBrief": "南方炎热的夏日夜晚，年轻的王学明（彭于晏饰）遭遇了一起意外。梁妈（张艾嘉饰）的老公 忽然失踪，她寻求陈警官的帮助，却不知自己已成为别人的下一个“目标”。陈警官（王砚辉饰）负责老梁 失踪案，他发现案情的发展远超自己掌控。这群不知命运已被悄然更改的人，都在试图窥视关于那个夜晚的真相，但这个夏夜的记忆如错乱的拼图，愈加扑朔迷离...", //简介
          "movieScore": 0, //评分
          "movieMoney": 1213100, //票房
          "movieArea": "中国大陆", //电影产地
          "movieType": "剧情／犯罪／悬疑", //电影类型
          "movieHead": "https://p0.meituan.net/moviemachine/8db13be80574cfae05626d6df8f84c09122704.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 23098, //日票房
          "wantLook": 27071 //想看人数
        },
        {
          "id": 166, //电影id
          "movieName": "空中之城", //电影名
          "movieStatus": 1, //电影状态
          "movieStart": "2021-04-23 08:00:00", //上映时间
          "movieMinute": 120, //电影时长
          "movieBrief": "《空中之城》讲述了面临中年危机酒吧调酒师、富有的商人太太、丧偶的老军人三个迥然不同的人物，面对各自的困难和尊严的故事。", //简介
          "movieScore": 6.7, //评分
          "movieMoney": 1080000, //票房
          "movieArea": "中国大陆", //电影产地
          "movieType": "剧情／爱情", //电影类型
          "movieHead": "https://p0.meituan.net/movie/622643b00ccdcb35eb5b587e121210ec276192.jpg@218w_300h_1e_1c", //首页
          "dayMoney": 66778, //日票房
          "wantLook": 0 //想看人数
        }
      ],
      "total": 95,
      "size": 10,
      "current": 1,
      "orders": [],
      "hitCount": false,
      "searchCount": true,
      "pages": 10
    }, //返回数据
    "msg": "执行成功" //返回文字描述
  }
})