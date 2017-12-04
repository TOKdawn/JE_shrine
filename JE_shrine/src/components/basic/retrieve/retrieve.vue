<template>
    <div>
        <Card>
             <p slot="title">标准卡片</p>
             <p>{{$route.params.keyword}}</p>
             
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
        showData : {}
    };
  },
  methods: {
    getdata() {
      return {
        total: 1,
        date: [
          {
            id: "59f67fc3e549a21d1e8d861c",
            title: "旅の途中",
            alias: ["人在旅途"],
            album: "旅の途中",
            author: "小峰公子",
            composer: "吉良知彦",
            singer: "清浦夏实",
            content: "(6)(#6)1(#6)1(6)(5)(4)",
            cover: "http://7xs2gj.com1.z0.glb.clouddn.com/ldtz.jpg-t",
            tags: ["狼与香辛料", "狼と香辛料"],
            references: [
              {
                name: "FREEDOM54",
                url:
                  "http://tieba.baidu.com/home/main?un=FREEDOM54&ie=utf-8&fr=pb"
              }
            ],
            createDt: 1509326787,
            updateDt: 1509326787,
            userId: "59f48847e549a20f73d009e9",
            status: 0,
            views: 0
          }
        ]
      };
    }
  },
  created() {
      console.log("关键字:"+$route.params.keyword)
      this.showData = this.getdata();
  }
};
</script>
<style>

</style>
