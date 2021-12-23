<template>
  <div class="UserGrid">
    <div style="display: flex;justify-content: flex-start;font-size: 1.6em;margin-left: 1rem;margin-bottom: 10px;">查询结果</div>
    <n-data-table
        style=" user-select:none;"
        :columns="columns"
        :data="data"
        :single-line="false"
        :loading="false"
        :scroll-y="500"
        :row-props="rowProps"
        v-model:checked-row-keys="checkedRowKeys"
    />
    <n-button @click="use">test</n-button>
  </div>
</template>

<script lang="ts">
import {defineComponent, h, ref, toRef} from 'vue';
import {NButton, NDataTable} from 'naive-ui';


const createColumns = () => {
  return [
    {
      type: 'selection',
    },
    {
      title: 'ID',
      key: 'UserId',
      align: 'center'
    },
    {
      title: '名字',
      key: 'UserName',
      align: 'center'
    },
    {
      title: '性别',
      key: 'UserSex',
      align: 'center'
    },
    {
      title: '电话',
      key: 'UserTel',
      align: 'center'
    },
    {
      title: '职务',
      key: 'UserPost',
      align: 'center'
    },
    {
      title: '入职时间',
      key: 'UserEntry',
      align: 'center'
    },
    {
      title: '操作',
      key: 'tag',
      align: 'center',
      render (row:any) {
        return h(
            NButton,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info',
              onClick: () => {
                console.log(row);
              }
            },
            {
              default: () => "选择"
            }
        )
      }
    }
  ]
}

const createData = () => [
  {
    key: 0,
    UserId: 35325255,
    UserName: '狗鑫',
    UserSex: '男',
    UserTel: '1417320034',
    UserPost: '所长',
    UserEntry: '2021/12/1',
  },
  {
    key: 1,
    UserId: 3546,
    UserName: '狗鑫',
    UserSex: '男',
    UserTel: '1417320034',
    UserPost: '所长',
    UserEntry: '2021/12/1',
  },
  {
    key: 2,
    UserId: 3546,
    UserName: '狗鑫',
    UserSex: '男',
    UserTel: '1417320034',
    UserPost: '所长',
    UserEntry: '2021/12/1',
  }
]

export default defineComponent({
  name: 'UserGrid',
  components:{
    NDataTable,
    NButton
  },
  props:['userid'],
  setup (props,context) {
    const checkedRowKeysRef = ref([])
    return {
      data: createData(),
      columns: createColumns(),
      checkedRowKeys: checkedRowKeysRef,
      rowProps: (row:any) => {
        return {
          style: 'cursor: pointer;',
          onClick: () => {
            context.emit('setUserid',row.UserId)
            checkedRowKeysRef.value =<any>[row.key]
          }
        }
      },
    }
  },
  methods:{
    use(){
      console.log('eqg');
    }
  }
});
</script>

<style lang="scss" scoped>
.UserGrid{
  width: 100%;
  height: 100%;
  position: relative;
}
.n-data-table__pagination{
  display: none!important;
}
</style>
