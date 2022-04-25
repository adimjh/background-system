<template>
  <div class="attendance-management">
    <!-- 搜素部分 -->
    <el-form ref="form" :model="formInline" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入学生的名称"></el-input>
      </el-form-item>
      <el-button type="primary"><i class="fa fa-search" @click="onSubmit"></i> 搜素</el-button>
    </el-form>
    <!-- 表格 -->
    <el-table border :data="tableData" style="width: 100%" height="calc(100% - 103px)">
      <el-table-column fixed align="center" prop="name" label="姓名" ></el-table-column>
      <el-table-column align="center" prop="class" label="班级" ></el-table-column>
      <el-table-column align="center" prop="toBeDue" label="应到" ></el-table-column>
      <el-table-column align="center" prop="actual" label="实到" ></el-table-column>
      <el-table-column align="center" prop="attendance" label="到课率" ></el-table-column>
      <el-table-column align="center" prop="attendanceRanking" label="到课率的排名" ></el-table-column>
      <el-table-column align="center" prop="attendanceRate" label="到课率拼比" ></el-table-column>
    </el-table>
    <!-- 分页 -->
    <Paging :total='total'></Paging>
  </div>
</template>

<script>
import Paging from '@/components/common/Paging.vue'
export default {
  components: {
    Paging
  },
  created () {
    this.service.get('attendanceManagement')
      .then(res => {
        if (res.status === 200) {
          console.log(res)
          this.total = res.data.total
          this.tableData = [...res.data.data]
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  data () {
    return {
      // 搜素部分的数据
      formInline: {
        name: ''
      },
      // 表格的数据
      tableData: [],
      total: 100
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
.attendance-management{
  height: calc(100vh - 285px);
}
/* 表单样式 */
.attendance-management>.el-form{
  display: flex;
  justify-content: flex-end;
  min-width: 1054px;
}
.attendance-management>.el-form>.el-button{
  width: 100px;
  height: 35px;
  background-color: #10401c;
  color: #d3d6d9;
  font-family: "楷体";
  margin-left: 15px;
  margin-top: 3px;
}
</style>
