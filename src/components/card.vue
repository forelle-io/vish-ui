<template>
  <div
    :class="[
        'vish-card',
        {'vish-card_flat': flat},
        {'vish-card_full-width': fullWidth}
    ]"
  >
      <slot></slot>
  </div>
</template>
<script>
export default {
    name: 'v-card',
    props: {
        flat: {
            type: Boolean,
            default: false
        },
        fullWidth: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style>
  .vish-card {
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(9, 26, 64, 0.23);
    border-radius: 16px;
    padding: 28px 24px;
    display: inline-block;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }
  .vish-card_flat {
      box-shadow: none;
  }
  .vish-card_full-width {
      width: 100%;
      display: block;
  }
</style>