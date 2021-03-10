<template>
  <div class="page-nav">
    <el-button
      size="mini"
      type="primary"
      @click="handleClick"
    >
      Добавить график
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'PageNav',

  methods: {
    async handleClick() {
      this.$emit('nav-action')
    }
  }
}
</script>

<style>
.page-nav {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}
</style>
