<script lang="ts">
  import { onMount, SvelteComponent } from 'svelte';

  const GetSvelteTodoComponent = (): Promise<{
    default: typeof SvelteComponent
  }> =>
    import.meta.env.VITE_BUILD_TIME_DEPS
      ? import('../../../svelte-todo/src/App.svelte')
      : import('svelteTodo/App.svelte')

  let SvelteTodo: typeof SvelteComponent;

  onMount(async () => {
    const module = await GetSvelteTodoComponent();
    SvelteTodo = module.default;
  });
</script>

{#if SvelteTodo}
  <svelte:component this={SvelteTodo}/>
{/if}

