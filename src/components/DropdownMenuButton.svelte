<script lang="ts">
    interface ItemInterface {
        label: string;
        onClick: () => void;
    }

    export let label: string;
    export let items: ItemInterface[];

    let isOpen = false;

    function toggleDropdown() {
        isOpen = !isOpen;
    }
</script>

<div class="dropdown">
    <button class="dropdown-button" on:click={toggleDropdown}>{label}</button>
    <div class="dropdown-content" style:display={isOpen ? "block" : "none"}>
        {#each items as item}
            <button
                on:click={() => {
                    item.onClick();
                    isOpen = false;
                }}
                class="dropdown-item"
            >
                {item.label}
            </button>
        {/each}
    </div>
</div>

<style>
    /* Add your styles for the dropdown container and items here */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        position: absolute;
        border-radius: 6px;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-item {
        text-decoration: none;
        display: block;
        background-color: transparent;
        border: none;
        padding: 5px;
        margin: 0;
        cursor: pointer;
        outline: none;

        &:hover {
            background-color: #b5b5b5;
        }
    }

    .dropdown-button {
        font-weight: bold;
        background-color: rgb(145, 203, 242);
        padding: 5px 10px;
        border: 1px solid #5899cb;
        border-radius: 5px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #297fb8;
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
        }

        &:active {
            background-color: #1f6082;
        }
    }
</style>
