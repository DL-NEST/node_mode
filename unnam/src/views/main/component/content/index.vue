<template>
  <div class="main-content">
    <div class="content-top">
      <div class="content-top-left">
        <div class="btn" @click="$emit('an')">
          <svg v-show="shrink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="text-16px"><g fill="none"><path d="M19 12h-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M19 19H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M19 5H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M7 15l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M7 9l-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path></g></svg>
          <svg v-show="!shrink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="text-16px"><g fill="none"><path d="M14 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M19 19H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M19 5H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-2"></path><path d="M21 15l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path><path d="M21 9l-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-0"></path></g></svg>
        </div>
      </div>
      <div class="content-top-right">
        <div class="btn" @click="link">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1023.560892 524.587752c0 114.331752-32.549236 217.148443-97.647709 308.450075-65.047295 91.301632-149.132822 154.455339-252.205404 189.512299-11.975662 2.303012-20.778286 0.716493-26.305515-4.759558a27.584966 27.584966 0 0 1-8.342021-20.471218V853.150798c0-44.166653-11.566238-76.511177-34.647536-96.982394a446.272549 446.272549 0 0 0 68.32269-12.282731c20.16415-5.476051 41.044792-14.329852 62.590748-26.612583a187.311643 187.311643 0 0 0 53.992837-45.446104c14.432209-18.014672 26.203159-41.914819 35.312851-71.751618 9.109692-29.8368 13.664538-64.074912 13.664538-102.765514 0-55.118754-17.554069-102.049021-52.61103-140.739623 16.376974-41.454216 14.636921-87.872703-5.373695-139.357815-12.436265-4.094244-30.399759-1.535341-53.941659 7.523172a355.17563 355.17563 0 0 0-61.311297 30.041513l-25.333132 16.376974a462.137743 462.137743 0 0 0-127.945112-17.707604 462.137743 462.137743 0 0 0-127.945111 17.758782 589.571074 589.571074 0 0 0-28.301459-18.424096c-11.77095-7.31846-30.34858-16.069906-55.681713-26.305515-25.281954-10.235609-44.422543-13.306292-57.31941-9.212048-19.498835 51.433935-21.085354 97.852421-4.606024 139.306637-35.108139 38.690602-52.713386 85.620869-52.713386 140.739623 0 38.690602 4.606024 72.826357 13.715716 102.458445 9.109692 29.58091 20.778286 53.481057 34.954605 71.700441a180.658498 180.658498 0 0 0 53.634591 45.753172c21.545957 12.282731 42.477777 21.18771 62.641926 26.612583 20.215328 5.527229 42.989557 9.621472 68.32269 12.333909-17.758781 16.376974-28.659705 39.867697-32.651593 70.369811a129.941055 129.941055 0 0 1-29.990334 10.235609 184.087426 184.087426 0 0 1-37.974109 3.428929c-14.688099 0-29.171485-4.913092-43.654872-14.688099-14.432209-9.826185-26.766117-24.053681-37.001726-42.682489a109.162769 109.162769 0 0 0-32.293346-35.517563c-13.101579-9.109692-24.104859-14.585743-33.009839-16.376974l-13.306292-2.047122c-9.314404 0-15.762838 1.023561-19.345301 3.070683-3.582463 2.047122-4.606024 4.606024-3.326572 7.83024a37.769397 37.769397 0 0 0 5.987831 9.570295 49.182101 49.182101 0 0 0 8.700267 8.188487l4.606024 3.377751c9.826185 4.606024 19.447657 13.255114 29.017952 25.998447 9.570294 12.743333 16.581686 24.360749 20.982998 34.80107l6.653146 15.71166c5.783119 17.298179 15.558126 31.320963 29.376197 42.017174 13.766894 10.747389 28.659705 17.554069 44.627255 20.471218 15.96755 2.968327 31.423319 4.606024 46.316131 4.810736 14.841633 0.204712 27.22672-0.562958 37.001726-2.405368l15.302235-2.712436c0 17.298179 0.102356 37.564685 0.358247 60.799517l0.307068 36.848192c0 8.188487-2.86597 15.046345-8.700268 20.471218-5.731941 5.527229-14.636921 7.113748-26.612583 4.810736-103.072582-35.056961-187.158109-98.261846-252.205404-189.512299C32.549236 741.736195 0 638.919504 0 524.587752c0-95.191163 22.876586-182.910331 68.629758-263.31104a516.028224 516.028224 0 0 1 186.288082-190.894106A491.309228 491.309228 0 0 1 511.780446 0.012795a491.309228 491.309228 0 0 1 256.913784 70.369811 516.028224 516.028224 0 0 1 186.236905 190.894106C1000.684306 341.626242 1023.560892 429.447767 1023.560892 524.587752z"></path></svg>
        </div>
        <div class="btn" @click="switch_btn('maximize')">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M358.4 768H426.666667v85.333333H213.333333v-213.333333h85.333334v68.266667l128-128 59.733333 59.733333-128 128z m345.6 0l-128-128 59.733333-59.733333 132.266667 132.266666V640h85.333333v213.333333h-213.333333v-85.333333h64zM358.4 298.666667l128 128-59.733333 59.733333-128-128V426.666667H213.333333V213.333333h213.333334v85.333334H358.4z m345.6 0H640V213.333333h213.333333v213.333334h-85.333333V354.133333l-132.266667 132.266667-59.733333-59.733333 128-128z" fill="#444444"></path></svg>
        </div>
        <div class="btn" @click="test">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M889.828994 749.637494c-1.204099-1.548127-119.205779-166.165631-119.205779-287.435579 0-168.401814-76.202251-254.752898-162.725349-286.919536L607.897867 159.973123c0-52.980346-43.175542-95.983874-95.983874-95.983874S415.930119 107.164791 415.930119 159.973123l0 16.685369c-10.836889 7.912649-16.169326 21.845792-11.868974 35.262893 5.332437 16.857383 23.393919 25.974131 40.251302 20.641693 17.717453-5.676466 36.983034-8.428691 56.936671-8.428691l21.32975 0c115.249454 0 184.055098 89.103309 184.055098 238.239543 0 108.024861 72.933983 235.315303 110.261045 293.456073-57.452713 26.146145-183.023014 76.202251-304.809004 76.202251-121.441962 0-247.356291-50.400134-304.809004-76.546279 37.327062-57.968755 110.089031-184.915169 110.089031-293.112044 0-62.441122 11.524945-114.217369 34.574836-153.952629 8.77272-15.309256 3.612296-34.918864-11.69696-43.691584-15.48127-8.944734-34.918864-3.612296-43.691584 11.69696-28.554342 49.540064-43.175542 112.1532-43.175542 185.947253 0 121.269948-118.00168 285.199395-119.205779 286.919536-5.332437 7.568621-7.396607 16.857383-5.332437 25.974131 2.064169 8.944734 7.912649 16.685369 15.997312 20.985721 5.676466 3.096254 107.336805 57.280699 233.423148 84.458928 21.32975 66.397447 73.966068 111.29313 133.654964 111.29313s112.325214-44.895683 133.654964-111.29313c126.086343-27.178229 227.746682-81.018646 233.423148-83.942886 8.084663-4.472367 13.933143-12.040988 16.169326-20.985721C897.225601 766.666891 895.333445 757.206115 889.828994 749.637494zM501.249118 159.973123c-7.224593 0-14.277171 1.032085-21.32975 1.548127L479.919368 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625 17.545439 0 31.994625 14.449185 31.994625 31.994625l0 0.860071c-7.224593-0.516042-14.277171-0.860071-21.32975-0.860071L501.249118 159.973123zM511.913993 928.016126c-22.361834 0-43.175542-13.417101-57.968755-35.262893 19.26558 2.064169 38.531161 3.268268 57.968755 3.268268s38.875189-1.376113 57.968755-3.268268C555.089535 914.599026 534.275827 928.016126 511.913993 928.016126z"></path></svg>
        </div>
        <div class="btn" style="width: 120px">
          <img src="../../../../assets/head.jpg" style="width: 2rem;border-radius: 50%;margin-right: 5px;cursor: pointer;"  alt=""/>
          <div>DL-NEST</div>
        </div>
      </div>
    </div>
    <div class="content-history"></div>
    <div class="content-router">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {NButton} from 'naive-ui';
let {shell}=require('electron')
import $api from '@/request/api';
import * as router from '@/router/constant'
const { ipcRenderer } = window.require("electron");

// 可以在这个页面挂载向下的调用函数

export default defineComponent({
  name: 'main-content',
  props:['shrink'],
  components:{NButton},
  setup(){
  },
  methods:{
    link(){
      shell.openExternal('https://github.com/DL-NEST')
    },
    test(){
      console.log(router.getRouteConst('console'));
      console.log(this.$router);
    },
    switch_btn(mState: String){
      ipcRenderer.send("btn_switch", mState);
    }
  },
  mounted() {
    this.$router.push('/console')
  }
});
</script>

<style lang="scss" scoped>
// 内容
.main-content{
  width: 0;
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  .content-top{
    user-select:none;
    position: relative;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0 1px 2px rgba(0,21,41,0.1);
    z-index: 30;
    .content-top-left{
      height: 100%;
      width: 0;
      background-color: #dbffff;
    }
    .content-top-right{
      height: 100%;
      width: auto;
      display: flex;
      flex-direction: row;
    }
    .btn{
      -webkit-app-region: no-drag;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 40px;
      cursor: pointer;
      svg{
        width:1.4em;
        height:1.4em;
      }
    }
    .btn:hover{
      background-color: rgba(246, 246, 246,1);
    }
  }
  .content-history{
    position: relative;
    height: 30px;
    box-shadow: 2px 1px 0 rgba(0,21,41,0.1);
    z-index: 29;
  }
  .content-router{
    -webkit-app-region: no-drag;
    position: relative;
    width: 100%;
    height: auto;
    flex-grow: 1;
    z-index: 28;
    padding: 0.4rem;
    box-sizing:border-box;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--main-router-back);
    .views-div{
      position: relative;
      width: 100%;
      height: 100%;
      background-color:  var(--main-color);
      border-radius: 14px;
    }
  }
}
// 滚动条
.content-router::-webkit-scrollbar {
  width: 8px;
}

.content-router::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
}
// 滚动条的颜色
.content-router::-webkit-scrollbar-thumb {
  background: var(--scrollbar-color);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}
// 滚动条的选中的颜色
.content-router::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-color-hover);
}

.content-router::-webkit-scrollbar-corner {
  background: #545454;
}
</style>
