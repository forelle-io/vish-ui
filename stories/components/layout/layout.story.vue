<template>
    <div>
        <div class="story-row">
            <vish-row class="row-1">Row 1</vish-row>
            <vish-row class="row-2">Row 2</vish-row>
            <vish-row class="row-3">Row 3</vish-row>
        </div>
        <div class="story-row">
            <select v-model="selectJustify">
                <option value="flex-start" selected>flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
            </select>
            <select v-model="selectAlign">
                <option value="flex-start" selected>flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="stretch">stretch</option>
            </select>
            <input type="number" v-model="gap">
            <vish-row class="row-with-blocks" :justify="selectJustify" :align-items="selectAlign" :gap="gap">
                <div class="inner-block-1">Block 1</div>
                <div class="inner-block-2">Block 2</div>
                <div class="inner-block-3">Block 3</div>
            </vish-row>
        </div>
    </div>
</template>

<script>
    import Row from '../../../src/components/row'
    export default {
        name: "layout.story.js",
        components: {
            'vish-row': Row
        },
        data () {
            return {
                selectJustify: 'flex-start',
                selectAlign: 'center',
                gap: 0
            }
        }
    }
</script>

<style scoped>
    .story-row {
        margin: 10px;
        padding: 10px;
        border: 1px solid #AAA;
        margin-bottom: 25px;
    }
    .row-1 {
        background-color: #F00;
        color: #FFF;
    }
    .row-2 {
        background-color: #0F0;
        color: #000;
    }
    .row-3 {
        background-color: #00F;
        color: #FFF;
    }
    .row-with-blocks {
        padding: 40px;
        height: 100px;
        border: 1px solid red;
    }
    .inner-block-1 {
        background-color: #F00;
        color: #FFF;
    }
    .inner-block-2 {
        background-color: #0F0;
        color: #000;
    }
    .inner-block-3 {
        background-color: #00F;
        color: #FFF;
    }
</style>