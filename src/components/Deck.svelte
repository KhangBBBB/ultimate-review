<script lang="ts">
    import Flashcard from "./Flashcard.svelte";
    import type { models } from "../lib/models";

    export let topic: models.Topic;
</script>

<div>
    <h1>{topic.title}</h1>
    {#each topic.flashcards as { question, answer }}
        <Flashcard {question} {answer} />
    {/each}
</div>

<style>
    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }
</style>
