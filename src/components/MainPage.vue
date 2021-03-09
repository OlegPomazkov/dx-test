<template>
  <div class="main-page">
    <fancy-header
      class="main-page__header"
      @nav-action="handleNavAction"
    />

    <view-area class="main-page__view"/>

    <el-dialog
      title="Tips"
      :visible="dialogVisible"
      :show-close="false"
      width="30%"
    >
      <span>This is a message</span>
      
      <span slot="footer" class="dialog-footer">
        <el-button
          size="mini"
          @click="handleCloseDialog"
        >
          Cancel
        </el-button>

        <el-button 
          size="mini"
          type="primary" 
          @click="handleGetData"
        >
          Confirm
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import FancyHeader from './FancyHeader'
import ViewArea from './ViewArea'

export default {
  name: 'MainPage',

  components: {
    FancyHeader,
    ViewArea
  },

  data() {
    return {
      dialogVisible: false
    }
  },

  methods: {
    handleNavAction() {
      this.dialogVisible = !this.dialogVisible 
    },
    handleCloseDialog() {
      this.dialogVisible = false
    },
    handleGetData() {
      this.handleCloseDialog()
    }
  }
}
</script>

<style>
.main-page {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.main-page__view {
  box-sizing: border-box;
  flex: 1;
  overflow: auto;
  background-color: lightgrey;
}
</style>
