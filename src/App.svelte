<script lang="ts">
    import { topics } from "./data";
    import Deck from "./components/Deck.svelte";
    import DropdownMenuButton from "./components/DropdownMenuButton.svelte";

    const topicTitles = topics.map((topic) => topic.title);
    const topicIndex = topics.map((_, index) => index);

    let curTopicIndex = 0;
</script>

<div>
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
</div>

{#each topics as topic, topicIndex}
    {#if curTopicIndex === topicIndex}
        <Deck {topic} />
    {/if}
{/each}
