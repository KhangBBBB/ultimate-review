<script lang="ts">
    export let label: string;
    export let onClick: () => void;
</script>

<button on:click={onClick}>{label}</button>

<style>
    button {
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
