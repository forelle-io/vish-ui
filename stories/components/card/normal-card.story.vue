<template>
    <div>
        <div class="story-row">
            <vish-card>
                Normal card
            </vish-card>
        </div>
        <div class="story-row">
            <vish-card flat>
                Flat card
            </vish-card>
        </div>
        <div class="story-row">
            <vish-card full-width>
                Full-width card
            </vish-card>
        </div>
        <div class="story-row">
            <vish-card flat full-width>
                Flat, full-width card
            </vish-card>
        </div>
    </div>
</template>

<script>
import Card from '../../../src/components/card'
export default {
  name: "normal-card.story",
  components: {
    'vish-card': Card
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
</style>