<template>
    <div>
        <div class="story-row">
            <vish-input :value.sync="value1"/>
            <div class="value-helper">
                <span>Value: "{{ value1 }}"</span>
            </div>
        </div>
        <div class="story-row">
            <vish-input :value.sync="value2" placeholder="Pretty placeholder"/>
            <div class="value-helper">
                <span>Value: "{{ value2 }}"</span>
            </div>
        </div>
        <div class="story-row">
            <vish-input :value.sync="value3" label="Pretty label"/>
            <div class="value-helper">
                <span>Value: "{{ value3 }}"</span>
            </div>
        </div>
        <div class="story-row">
            <vish-input :value.sync="value4" mask="+#(###) ###-##-##"/>
            <div class="value-helper">
                <span>Value: "{{ value4 }}"</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from '../../../src/components/input'
    export default {
        name: "input.story",
        data () {
            return {
                value1: '',
                value2: '',
                value3: '',
                value4: ''
            }
        },
        components: {
            'vish-input': Input
        }
    }
</script>

<style scoped>
    .story-row {
        width: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 10px;
        padding: 10px;
        border: 1px solid #AAA;
        margin-bottom: 25px;
    }
    .value-helper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>