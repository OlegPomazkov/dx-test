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
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: salmon;
}
</style>
