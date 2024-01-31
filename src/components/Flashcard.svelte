<script lang="ts">
    export let question: string;
    export let answer: string;

    let showAnswer = false;

    export function resetState() {
        if (showAnswer) {
            showAnswer = false;
        }
    }

    function handleCardClick() {
        showAnswer = !showAnswer;
    }

    $: cardType = showAnswer ? "Answer" : "Question";
</script>

<div class="flashcard" on:click={handleCardClick} on:keypress={handleCardClick}>
    <div class="question-answer">
        {cardType}
    </div>
    <div style="font-size: 16px; white-space: pre-wrap; text-align: left;">
        {#if showAnswer}
            {answer}
        {:else}
            {question}
        {/if}
    </div>
</div>

<style>
    .flashcard {
        border: 1px solid #ddd;
        background-color: #fff8dc;
        padding: 20px;
        margin: 16px 10px;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3s;
        border-radius: 15px;
    }

    .flashcard:hover {
        background-color: #add8e6;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    }

    .question-answer {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
    }
</style>
