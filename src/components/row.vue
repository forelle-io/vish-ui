<template>
    <div :class="[
        'v-row',
        `v-row_justify-${justify}`,
        `v-row_align-items-${alignItems}`,
        `v-row_gap-${gap}`
        ]">
        <slot></slot>
    </div>
</template>

<script>
    const ROW_JUSTIFY_VALUES = [
        'flex-start',
        'flex-end',
        'center',
        'space-around',
        'space-betweeen'
    ]
    const ROW_ALIGN_ITEMS_VALUES = [
        'flex-start',
        'flex-end',
        'center',
        'stretch'
    ]
    export default {
        name: "row",
        props: {
            justify: {
                type: String,
                default: 'flex-start',
                validator: value => ROW_JUSTIFY_VALUES.includes(value)
            },
            alignItems: {
                type: String,
                default: 'center',
                validator: value => ROW_ALIGN_ITEMS_VALUES.includes(value)
            },
            gap: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>
    .v-row {
        display: flex;
        flex-direction: row;
    }
    .v-row_justify-flex-start {
        justify-content: flex-start;
    }
    .v-row_justify-flex-end {
        justify-content: flex-end;
    }
    .v-row_justify-center {
        justify-content: center;
    }
    .v-row_justify-space-between {
        justify-content: space-between;
    }
    .v-row_justify-space-around {
        justify-content: space-around;
    }
    .v-row_align-items-flex-start {
        align-items: flex-start;
    }
    .v-row_align-items-flex-end {
        align-items: flex-end;
    }
    .v-row_align-items-center {
        align-items: center;
    }
    .v-row_align-items-stretch {
        align-items: stretch;
    }
    .v-row_gap-0 > * {
        margin-right: 0;
    }
    .v-row_gap-5 > * {
        margin-right: 5px;
    }
    .v-row_gap-10 > * {
        margin-right: 10px;
    }
    .v-row_gap-15 > * {
        margin-right: 15px;
    }
    .v-row_gap-20 > * {
        margin-right: 20px;
    }
    .v-row_gap-25 > * {
        margin-right: 25px;
    }
</style>