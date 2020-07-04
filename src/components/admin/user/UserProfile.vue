<template>
  <div>
    <el-dialog title="Modify User" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="selectedUser" label-suffix=":">
        <el-form-item label="Id" label-width="120px" prop="username">
          <label>{{selectedUser.id}}</label>
        </el-form-item>
        <el-form-item label="Name" label-width="120px" prop="name">
          <el-input v-model="selectedUser.name" placeholder="User Name" clearable></el-input>
        </el-form-item>
        <el-form-item label="Password" label-width="120px" prop="password">
          <el-input v-model="selectedUser.password" placeholder="User Password" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialogFormVisible =false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit(selectedUser)">Submit</el-button>
      </div>
    </el-dialog>

    <el-row style="margin: 58px 0px 0px 76px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/admin/dashboard">Admin Management</el-breadcrumb-item>
        <el-breadcrumb-item>User Management</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-card style="margin: 38px 5%;width: 90%">
      <el-table
        :data="users"
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
          prop="id"
          label="Id"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
        >
        </el-table-column>
        <el-table-column
          prop="password"
          label="Password"
        >
        </el-table-column>
        <el-table-column
          label="Operation"
          width="120"
        >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="editUser(scope.row)" circle size="small"></el-button>
            <el-button type="danger" icon="el-icon-delete" @click="deleteUser(scope.row.id)" circle size="small"></el-button>
          </template>
        </el-table-column>

      </el-table>
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
    name: "UserProfile",
    data(){
      return{
        users:[],
        dialogFormVisible: false,
        selectedUser: {},
        currentPage:1,
        pageSize:5,
        total:0,
        pageCount:0
      }
    },
    methods:{
      listUsers(){
        this.$axios.get('/admin/users',{params:{page:this.currentPage-1}}).then(res=>{
          if(res && res.status===200){
            this.users = res.data.content
            this.currentPage = res.data.number+1
            this.pageSize = res.data.size
            this.total = res.data.totalElements
            this.pageCount =res.data.totalPages
          }
        })
      },
      handleCurrentChange(currentPage){
        this.currentPage = currentPage
        this.listUsers()
      },
      editUser(user){
        this.dialogFormVisible= true
        this.selectedUser = user
      },
      deleteUser(id){
        this.$confirm('This operation will permanently delete the user. Do you want to continue?','del_tip',{
          confirmButtonText:'Yes',
          cancelButtonText:'No',
          type:'warning'
        }).then(()=>{
          this.$axios.delete(`/admin/user/delete/${this.$store.getters.getUser}`,{data:{id:id}}).then(res=>{
            if(res && res.status === 200){
              this.$message.success('Deleted Successfully')
              this.listUsers()
            }
          }).catch(err=>{
            this.$message.warning('you can\'t delete yourself')
          })
        })
      },
      onSubmit(user){
        this.$axios.put('/admin/user',{
          id:user.id,
          name:user.name,
          password:user.password,
        }).then(res=>{
          if(res&&res.status===200){
            this.$message.success(res.data)
            this.dialogFormVisible = false
            this.listUsers()
          }
        })
      },
    },
    computed: {
      tableHeight() {
        return window.innerHeight - 320
      }
    }, mounted() {
      this.listUsers()
    },
  }
</script>

<style scoped>

</style>