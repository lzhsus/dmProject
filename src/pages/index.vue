<template>
  <div class="index">
    <my-header></my-header>

    <div class="main">
      <classify-swiper></classify-swiper>
      <div class>
        <hot-recomment></hot-recomment>
      </div>
      <div class="index_talent" v-for="(item, index) in talents" :key="index">
        <el-row :gutter="20">
          <el-col :span="18">
            <div class="grid-content">
              <el-row>
                <el-col :span="24">
                  <div class="index_talent_tit">{{item.talents_tit}}</div>
                </el-col>
                <el-col :span="6">
                  <talent-big-item>
                    <img slot="img" :src="item.talents_img" alt srcset>
                    <span slot="tit">{{item.talents_name}}</span>
                  </talent-big-item>
                </el-col>
                <el-col :span="18">
                  <talent-model :talentItems="item.talentItems"></talent-model>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <hot-ranking :rankings="item.rankings">
                <img slot="rankingImg" :src="item.talents_imgHot" alt srcset>
              </hot-ranking>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Axios from "axios";
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import HotRecomment from "../components/HotRecomment";
import TalentModel from "../components/TalentModel";
import TalentBigItem from "../components/talent/TalentBigItem";
import HotRanking from "../components/hot/HotRanking";
import ClassifySwiper from "../components/ClassifySwiper";
export default {
  name: "Index",
  components: {
    MyHeader,
    MyFooter,
    HotRecomment,
    TalentModel,
    TalentBigItem,
    HotRanking,
    ClassifySwiper
  },
  data() {
    return {
      talents: [
        {
          id: "talents1",
          talents_tit: "F1 戏曲达人",
          talents_img:
            "https://pimg.dmcdn.cn/perform/project/1704/170481_n.jpg?_t=1543979702099",
          talents_imgHot:
            "https://pimg.dmcdn.cn/perform/project/1704/170481_n.jpg?_t=1543979702099",
          talents_name: "2018年金木跨年嘉年华《3D》",
          talentItems: [
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1710/171011_n.jpg?_t=1544433309510",
              tit: "太阳城集团呈献《卫兰OH MY JANICE世界巡回演唱会2019澳门站》",
              address: "澳门威尼斯人金光综艺馆",
              time: "2019.01.26 20:00",
              price: "300"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1707/170711_n.jpg?_t=1544088846204",
              tit: "烽火跨年群星演唱会",
              address: "黄龙体育中心(体育场)",
              time: "2018.12.22",
              price: "540"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1696/169698_n.jpg?_t=1543288929060",
              tit: "2018 腾讯音乐人 [ 原力音乐节 DARE TO DREAM ]",
              address: "深圳欢乐谷玛雅水公园",
              time: "2018.12.15",
              price: "160"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1704/170498_n.jpg?_t=1543977572370",
              tit: "陈小春STOP ANGRY巡回演唱会-深圳站",
              address: "华润深圳湾体育中心“春茧”体育馆",
              time: "2019.01.12  19:30",
              price: "800"
            }
          ],
          rankings: [
            { name: "四川好人", isShow: "true", id: 0 },
            { name: "恋爱先生", isShow: "true", id: 1 },
            { name: "一个陌生女孩的来信", isShow: "true", id: 2 },
            { name: "其实你是其实你是", isShow: "flase", id: 3 },
            { name: "那次奋不顾身的爱情", isShow: "flase", id: 4 },
            { name: "埋葬", isShow: "flase", id: 5 },
            { name: "沉浸式戏剧:梦想之泰汤尼克号", isShow: "flase", id: 6 },
            { name: "第十二夜", isShow: "flase", id: 7 },
            { name: "蛋", isShow: "flase", id: 8 },
            { name: "梵高", isShow: "flase", id: 9 }
          ]
        },
        {
          id: "talents1",
          talents_tit: "F2 体育达人",
          talents_img:
            "https://pimg.dmcdn.cn/perform/project/1653/165383_n.jpg?_t=1539151652875",
          talents_imgHot:
            "https://pimg.dmcdn.cn/perform/project/1653/165383_n.jpg?_t=1539151652875",
          talents_name: "2018-2019中国男子篮球职业联赛 北京首钢常规赛主场赛事 ",
          talentItems: [
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1657/165799_n.jpg?_t=1539336675141",
              tit: "2018-2019赛季辽宁衡润飞豹男篮常规赛单场票",
              address: "辽宁体育馆(奥体中心西侧)",
              time: "2018.10.21-2019.03.13",
              price: "60"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1660/166028_n.jpg?_t=1539928849163",
              tit: "2018-2019赛季CBA常规赛广东东莞银行主场",
              address: "东风日产文体中心（东莞篮球中心）",
              time: "2018.11.22-2019.03.10",
              price: "160"
            },
            {
              imgUrl:
                "https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01Slub0Q2GdS7gJeqwz_!!0-item_pic.jpg",
              tit: "2018第14届FINA世界游泳锦标赛（25米）",
              address: "杭州奥体博览城体育中心三号馆网球中心",
              time: "2018.12.12-12.16",
              price: "260"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1677/167790_n.jpg?_t=1544156131553",
              tit:
                "2018-2019中国男子篮球职业联赛 北京首钢常规赛主场赛事 北京首钢VS新疆广汇汽车",
              address: "北京首钢篮球中心",
              time: "2018.12.12  19:35",
              price: "300"
            }
          ],
          rankings: [
            { name: "2017-2018赛季CBA浙江广厦主场赛事", isShow: "true", id: 0 },
            {
              name: "2017-2018赛季CBA浙上海哔哩哔哩蓝球队",
              isShow: "true",
              id: 1
            },
            {
              name: "2017-2018赛季CBA浙江筠州银行队员选拔",
              isShow: "true",
              id: 2
            },
            { name: "爱宠游-圣诞冰雪浪漫", isShow: "flase", id: 3 },
            {
              name: "圣诞节，爱环保《熊出没 地球加速跑》",
              isShow: "flase",
              id: 4
            },
            { name: "乐跑广州站", isShow: "flase", id: 5 },
            {
              name: "17-18赛季CBA山西汾酒男篮主场常规赛",
              isShow: "flase",
              id: 6
            },
            { name: "2018 FORMULA1 中国大奖赛", isShow: "flase", id: 7 },
            {
              name: "2017-2018 中国兵乓求俱乐部超级联赛",
              isShow: "flase",
              id: 8
            },
            { name: "2017-2018中国羽毛球超级联赛", isShow: "flase", id: 9 }
          ]
        },
        {
          id: "talents1",
          talents_tit: "F3 古典舞蹈",
          talents_img:
            "https://pimg.dmcdn.cn/perform/project/1706/170683_n.jpg?_t=1544081032483",
          talents_imgHot:
            "https://pimg.dmcdn.cn/perform/project/1706/170683_n.jpg?_t=1544081032483",
          talents_name: "国家大剧院制作歌剧《茶花女》 ",
          talentItems: [
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1704/170453_n.jpg?_t=1543978232058",
              tit: "开心麻花经典爆笑舞台剧《乌龙山伯爵》",
              address: "地质礼堂剧场",
              time: "2019.01.16-01.27",
              price: "280"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1658/165847_n.jpg?_t=1541038564406",
              tit: "开心麻花2019爆笑贺岁舞台剧《谈判专家》",
              address: "世纪剧院",
              time: "2018.12.05-12.31",
              price: "140"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1710/171016_n.jpg?_t=1544436323242",
              tit: "舞台剧《剑网3·曲云传》武汉站",
              address: "武汉琴台大剧院",
              time: "2019-01-13 14:30",
              price: "260"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1698/169813_n.jpg?_t=1543385124465",
              tit: "开心麻花新剧【窗前不止明月光】",
              address: "大连国际会议中心大剧院",
              time: "2018.12.19-12.20",
              price: "390"
            }
          ],
          rankings: [
            {
              name: "第三届中国国际芭蕾出演 国内十佳演员",
              isShow: "true",
              id: 0
            },
            {
              name: "第三届中国国际芭蕾演出季 闭幕式开始典礼",
              isShow: "true",
              id: 1
            },
            { name: "贺芭蕾舞台剧《过年》", isShow: "true", id: 2 },
            { name: "上海歌剧团2018舞台剧-舞蹈演出季", isShow: "flase", id: 3 },
            {
              name: "THE MOMENTS 《瞬间的精彩》世界佳作",
              isShow: "flase",
              id: 4
            },
            {
              name: "5华艺星空 乌克兰几副儿童芭蕾舞蹈剧",
              isShow: "flase",
              id: 5
            },
            { name: "2018 ”乐动荣成 新年音乐会", isShow: "flase", id: 6 },
            { name: "世界小提琴大师艾拉 玛丽肯", isShow: "flase", id: 7 },
            {
              name: "《时间的玫瑰》让爱的分贝响亮华语乐坛",
              isShow: "flase",
              id: 8
            },
            {
              name: "浪漫辉煌四十年--理查德 克莱德曼2018亮相",
              isShow: "flase",
              id: 9
            }
          ]
        },
        {
          id: "talents1",
          talents_tit: "F4 儿童亲子",
          talents_img:
            "https://pimg.dmcdn.cn/perform/project/1702/170252_n.jpg?_t=1544163515628",
          talents_imgHot:
            "https://pimg.dmcdn.cn/perform/project/1702/170252_n.jpg?_t=1544163515628",
          talents_name:
            "【限时抢购早鸟亲子票】魔都新晋黑科技冰雪乐园-MR.KUMA雪之乐园 ",
          talentItems: [
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1710/171008_n.jpg?_t=1544434767426",
              tit: "雪景体验式儿童剧《雪孩子》",
              address: "中国木偶剧院-大剧场",
              time: "2019.01.05-01.06",
              price: "100"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1706/170642_n.jpg?_t=1544078296947",
              tit: "沐澜文化•互动亲子剧《大卫，不可以》",
              address: "天桥剧场",
              time: "2019.04.12-04.14",
              price: "140"
            },
            {
              imgUrl:
                "https://img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01msFApj2GdS7kAP1nB_!!0-item_pic.jpg",
              tit: "大型魔幻童话剧《冰雪奇缘——爱莎的魔法秘密》",
              address: "市桥文化中心剧场",
              time: "2019.01.05 周六",
              price: "260"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1703/170315_n.jpg?_t=1543896347072",
              tit: "2019正版英国动漫舞台剧《比得兔-万圣节狂欢夜》",
              address: "北京剧院",
              time: "2019.03.02",
              price: "90"
            }
          ],
          rankings: [
            { name: "中国儿童戏剧节“国际儿童戏剧周", isShow: "true", id: 0 },
            {
              name: "德国kiddy儿童安全座椅50周年纪念日",
              isShow: "true",
              id: 1
            },
            {
              name: "华语星空儿童新年新年音乐会《疯狂动物城》",
              isShow: "true",
              id: 2
            },
            { name: "中国故事《成语魔方》组建打造", isShow: "flase", id: 3 },
            {
              name: "迎圣诞，安环保《熊出没 地球加速跑》",
              isShow: "flase",
              id: 4
            },
            {
              name: "首部舞台芭比真人秀音乐剧《闪亮芭比》",
              isShow: "flase",
              id: 5
            },
            {
              name: "白雪公主踢踏秀 首演 观众边看边产与",
              isShow: "flase",
              id: 6
            },
            { name: "第四节中国儿童戏剧七月精彩开模", isShow: "flase", id: 7 },
            {
              name: "卡通小丑嘉华年 《疯狂老鼠》 【创新领跑】",
              isShow: "flase",
              id: 8
            },
            {
              name: "2018年春季巧虎大型舞台剧《快乐农家乐》",
              isShow: "flase",
              id: 9
            }
          ]
        },
        {
          id: "talents1",
          talents_tit: "F5 摇滚在路上",
          talents_img:
            "https://pimg.dmcdn.cn/perform/project/1667/166767_n.jpg?_t=1543316281569",
          talents_imgHot:
            "https://pimg.dmcdn.cn/perform/project/1667/166767_n.jpg?_t=1543316281569",
          talents_name: "NEXT TO YOU乐华七子世界巡回演唱会·上海站",
          talentItems: [
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1684/168494_n.jpg?_t=1544420861698",
              tit: "李克勤30周年演唱会-东莞站",
              address: "东风日产文体中心（东莞篮球中心）",
              time: "2019.02.24",
              price: "600"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1707/170721_n.jpg?_t=1544168401292",
              tit: "730匣子X开心麻花联合出品高糖音乐喜剧《恋爱吧！人类》",
              address: "地质礼堂剧场",
              time: "2018.12.21-12.31",
              price: "220"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1621/162119_n.jpg?_t=1542001536950",
              tit: "2018-2019赛季CBA上海哔哩哔哩篮球队常规赛主场比赛",
              address: "上海源深体育馆",
              time: "2018.10.25-2019.3.13",
              price: "190"
            },
            {
              imgUrl:
                "https://pimg.dmcdn.cn/perform/project/1710/171001_n.jpg?_t=1544585928011",
              tit: "【CQ俱乐部】奇幻科学儿童剧《牙齿地铁站》",
              address: "四川科技馆科学秀S&E THEATER",
              time: "2018.12.15-2019.01.20",
              price: "420"
            }
          ],
          rankings: [
            { name: "反光镜乐队", isShow: "true", id: 0 },
            { name: "T挨个乐队", isShow: "true", id: 1 },
            { name: "二手玫瑰", isShow: "true", id: 2 },
            { name: "Mister Forever", isShow: "flase", id: 3 },
            { name: "伍佰&China blue", isShow: "flase", id: 4 },
            { name: "木马MUMA", isShow: "flase", id: 5 },
            { name: "丛林电子音乐节", isShow: "flase", id: 6 },
            { name: "彩色音乐节", isShow: "flase", id: 7 },
            { name: "中国迷幻摇滚音乐节", isShow: "flase", id: 8 },
            { name: "2017昆明草莓音乐节", isShow: "flase", id: 9 }
          ]
        }
      ]
    };
  },
  mounted() {
    Axios.get("http://127.0.0.1:3721/api/mock/text")
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main {
  width: 1200px;
  margin: auto;
}
.el-input__inner {
  border-radius: 20px;
}
.el-icon-search {
  color: tomato;
}
.index section {
  margin-bottom: 20px;
}
.index_talent {
  margin-bottom: 20px;
}

.index_talent .grid-content {
  background-color: #fff;
  padding: 20px;
}
.index_talent_tit {
  padding: 10px 0;
  font-size: 26px;
}
</style>
