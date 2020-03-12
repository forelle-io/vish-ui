<template>
    <button
      :disabled="disabled"
      @click="onClick"
      :class="[
        'v-button',
        { 'v-button_rounded': rounded },
        `v-button_${variant}`,
        { 'v-button_block': block }
      ]"
    >
        <slot></slot>
    </button>
</template>

<script>
    const BUTTON_TYPES = ['primary', 'minor']
    export default {
        name: "v-button",
        props: {
            rounded: {
                type: Boolean,
                default: false
            },
            variant: {
                type: String,
                default: 'primary',
                validator: value => BUTTON_TYPES.includes(value)
            },
            disabled: {
                type: Boolean,
                default: false
            },
            flat: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClick (event) {
                this.$emit('click', event)
            }
        }
    }
</script>

<style>
  .v-button {
      display: inline-block;
      padding: 5px 14px;
      border: none;
      outline: none;
      background-color: transparent;
      border-radius: 8px;
      font-size: 14px;
      line-height: 26px;
      box-shadow: 0px 1px 2px rgba(9, 26, 64, 0.23);
  }
  .v-button:not(:disabled):hover {
      cursor: pointer;
  }
  .v-button:disabled {
      background-color: #CCC;
      color: #FFF;
  }
  .v-button_rounded {
      border-radius: 40px;
  }
  .v-button_primary {
     color: #FFF;
     background-color: #0077FF;
  }
  .v-button_block {
     width: 100%;
     display: block;
  }
</style>