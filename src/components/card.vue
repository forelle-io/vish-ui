<template>
  <div class="v-card">
      <slot></slot>
  </div>
</template>
<script>
export default {
    name: 'v-card'
}
</script>
<style>
  .v-card {
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(9, 26, 64, 0.23);
    border-radius: 16px;
    padding: 28px 24px;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }
</style>