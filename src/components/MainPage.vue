<template>
  <div class="main-page">
    <fancy-header
      class="main-page__header"
      @nav-action="handleNavAction"
    />

    <div class="main-page__view">
      <view-area />
    </div>
      
    <chart-dialog
      :is-visible="dialogVisible"
      @close-dialog="handleCloseDialog"
    />
  </div>
</template>

<script>
import FancyHeader from './FancyHeader'
import ViewArea from './ViewArea'
import ChartDialog from './ChartDialog'

export default {
  name: 'MainPage',

  components: {
    FancyHeader,
    ViewArea,
    ChartDialog,
  },

  data() {
    return {
      dialogVisible: false,
    }
  },

  methods: {
    handleNavAction() {
      this.dialogVisible = !this.dialogVisible 
    },
    handleCloseDialog() {
      this.dialogVisible = false
    },
  }
}
</script>

<style>
.main-page {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}
.main-page__view {
  box-sizing: border-box;
  flex: 1;
  overflow: hidden;
  background-color: lightgrey;
}
</style>
