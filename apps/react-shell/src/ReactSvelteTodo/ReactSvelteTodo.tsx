import toReact from "svelte-adapter/react";
import SvelteTodo from './LazyLoadSvelteTodo.svelte';

const SvelteTodoInReact = toReact(SvelteTodo, {}, "div");

const ReactSvelteTodo = () => <SvelteTodoInReact />;

export default ReactSvelteTodo;
