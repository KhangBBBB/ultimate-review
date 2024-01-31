<script lang="ts">
    import { topics } from "./data";
    import Deck from "./components/Deck.svelte";
    import DropdownMenuButton from "./components/DropdownMenuButton.svelte";
    import Button from "./components/Button.svelte";

    let curTopicIndex = 0;

    function handleScrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
</script>

<div class="control-box">
    <DropdownMenuButton
        label="Select Topic"
        items={topics.map((topic, index) => {
            return {
                label: topic.title,
                onClick: () => {
                    curTopicIndex = index;
                },
            };
        })}
    />
    <div style="margin-right: 20px;"></div>
    <div>
        Number of Flashcards: {topics[curTopicIndex].flashcards.length}
    </div>
</div>

{#each topics as topic, topicIndex}
    {#if curTopicIndex === topicIndex}
        <Deck {topic} />
    {/if}
{/each}

<div>
    <Button label="Scroll to Top" onClick={handleScrollToTop} />
</div>

<style>
    .control-box {
        margin: 10px;
        display: flex;
        align-items: center;
        position: relative;
        background-color: #ffffff;
    }
</style>
