<script lang="ts">
    import Flashcard from "./Flashcard.svelte";
    import type { models } from "../lib/models";

    export let topic: models.Topic;
</script>

<div>
    <h1>{topic.title}</h1>
    {#if topic.subtitle.length > 0}
        <p class="subtitle">{topic.subtitle}</p>
    {/if}
    {#each topic.flashcards as { question, answer }}
        <Flashcard {question} {answer} />
    {/each}
</div>

<style>
    h1 {
        font-size: 2.6em;
        line-height: 1.1;
    }

    .subtitle {
        font-size: 1.2em;
        color: #666;
        margin-bottom: 20px;
    }
</style>
