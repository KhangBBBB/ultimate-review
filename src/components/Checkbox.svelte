<script lang="ts">
    export let label: string;
    export let onToggle: (isChecked: boolean) => void;

    let isChecked = false;

    export function resetState() {
        if (isChecked) {
            isChecked = false;
        }
    }

    function handleToggle() {
        isChecked = isChecked;
        onToggle?.(isChecked);
    }
</script>

<div class="checkbutton-container">
    <label class="checkbutton-label">
        <input
            type="checkbox"
            bind:checked={isChecked}
            on:change={handleToggle}
        />
        <span class="slider"></span>
        {label}
    </label>
</div>

<style>
    .checkbutton-container {
        display: flex;
        align-items: center;
    }

    .checkbutton-label {
        font-weight: bold;
        display: flex;
        align-items: center;
        position: relative;
        margin-right: 10px;
        font-size: 14px;
    }
</style>
