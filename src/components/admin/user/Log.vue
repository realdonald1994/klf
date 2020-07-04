<template>
  <div>
    <el-row style="margin: 58px 0px 0px 76px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/admin/dashboard">Admin Management</el-breadcrumb-item>
        <el-breadcrumb-item>Log Management</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>

    <el-card style="margin: 38px 5%;width: 90%">
      <el-table
        :data="logs"
        stripe
        :max-height="tableHeight"
        style="width: 100%"
        ref="multipleTable"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>

        <el-table-column
          prop="username"
          label="user_name"
        >
        </el-table-column>
        <el-table-column
          prop="activity"
          label="activity_name"
        >
        </el-table-column>
        <el-table-column
          prop="amount"
          label="amount"
        >
        </el-table-column>
        <el-table-column
          prop="firstTime"
          label="first_occurrence"
        >
          <template slot-scope="scope">{{ scope.row.firstTime | dataFormat('yyyy-MM-dd hh:mm:ss') }}</template>
        </el-table-column>
        <el-table-column
          prop="lastTime"
          label="last_occurrence"
        >
          <template slot-scope="scope">{{ scope.row.lastTime | dataFormat('yyyy-MM-dd hh:mm:ss') }}</template>
        </el-table-column>

      </el-table>
      <div style="margin: 20px 0 20px 0;float: left">
        <el-select v-model="month" placeholder="Month" @change="changeMonth" size="small">
          <el-option
            v-for="item in months"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="margin: 20px 0;float: right">
        <el-pagination
          background
          layout="prev, pager, next,->,total"
          :current-page=currentPage
          :page-size=pageSize
          :total=total
          :page-count=pageCount
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>


    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Log", components: {},
    data() {
      return {
        logs: [],
        months:[{value:1,label:'Jan'},{value:2,label:'Feb'},{value:3,label:'Mar'},{value:4,label:'Apr'},
          {value:5,label:'May'},{value:6,label:'June'},{value:7,label:'July'},{value:8,label:'Aug'},
          {value:9,label:'Sept'},{value:10,label:'Oct'},{value:11,label:'Nov'},{value:12,label:'Dec'},{value:0,label:'Total'}
        ],
        month:'',
        currentPage:1,
        pageSize:5,
        total:0,
        pageCount:0
      }
    }, methods: {
      listLogs() {
        this.$axios.get(`/admin/${this.month===''?0:this.month}/logs`,{params:{page:this.currentPage-1}}).then(res => {
          if (res && res.status === 200) {
            this.logs = res.data.content
            this.currentPage = res.data.number+1
            this.pageSize = res.data.size
            this.total = res.data.totalElements
            this.pageCount =res.data.totalPages
          }
        })
      },
      changeMonth(month){
        this.currentPage =1
        this.$axios.get(`/admin/${month}/logs/`,{params:{page:this.currentPage-1}}).then(res=>{
          if(res && res.status === 200){
            this.logs = res.data.content
            this.currentPage = res.data.number+1
            this.pageSize = res.data.size
            this.total = res.data.totalElements
            this.pageCount =res.data.totalPages
          }
        })
      },
      handleCurrentChange(currentPage){
        this.currentPage = currentPage
        this.listLogs()
      },
    }, computed: {
      tableHeight() {
        return window.innerHeight - 320
      }
    }, mounted() {
      this.listLogs()
    },
    filters:{
      dataFormat(value,fmt){
        let getDate = new Date(value);
        let o = {
          'M+': getDate.getMonth() + 1,
          'd+': getDate.getDate(),
          'h+': getDate.getHours(),
          'm+': getDate.getMinutes(),
          's+': getDate.getSeconds(),
          'q+': Math.floor((getDate.getMonth() + 3) / 3),
          'S': getDate.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (let k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
          }
        }
        return fmt;
      }
    }
  }
</script>

<style scoped>
</style>