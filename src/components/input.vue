<template>
    <div class="v-input">
        <label class="v-input__label-block">
            <span class="v-input__label" v-if="label">
                {{ label }}
            </span>
            <input class="v-input__input" type="text" :placeholder="placeholder" :value="value" @input="onInput" v-mask="mask"/>
        </label>
    </div>
</template>

<script>
import { VueMaskDirective } from 'v-mask'
    export default {
        name: "v-input",
        directives: {
            mask: VueMaskDirective
        },
        props: {
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            mask: {
                type: String,
                default: 'X'.repeat(9999)
            }
        },
        methods: {
            onInput (event) {
                this.$emit('update:value', event.target.value)
            }
        }
    }
</script>

<style>
    .v-input__label-block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .v-input__label {
        margin-bottom: 8px;
        text-transform: uppercase;
        font-size: 13px;
        line-height: 13px;
        color: #58627A;
    }
    .v-input__input {
        outline: none;
        border: 1px solid #ACB6CA;
        border-radius: 6px;
        padding: 14px 16px;
        font-size: 15px;
        line-height: 20px;
        background-color: #FFF;
        transition: border .2s ease;
    }
    .v-input__input:focus {
        border: 1px solid #0077FF;
    }

</style>