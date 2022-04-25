<template>
  <div class="paging">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    'total': Number
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 20
    }
  },
  methods: {
    // 分页的数据
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style>
.paging .el-pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
