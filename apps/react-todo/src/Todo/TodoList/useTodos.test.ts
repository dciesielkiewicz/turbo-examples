import moxios from 'moxios';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { act, waitFor } from '@testing-library/react';
import { renderHook } from '@reactTodo/testUtils';
import { IFormTodo, ITodo } from '../types';
import { useTodos } from './useTodos';

const resetForm = vi.fn;
const setSubmitting = vi.fn;

const todo1: ITodo = {
  id: 'todoId1',
  title: 'Title 1',
  checked: false,
};
const checkedTodo1: ITodo = {
  ...todo1,
  checked: true,
};
const newTodo2: IFormTodo = {
  title: 'Title 2',
  checked: false,
};
const todo2: ITodo = {
  ...newTodo2,
  id: 'todoId2',
};
const updatedTodo2: ITodo = {
  ...todo2,
  title: 'Updated Title 2',
};
const todos: ITodo[] = [todo1];

describe('useTodos', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Hook should work properly', async () => {
    // Fetch todos
    moxios.stubRequest('/todos', {
      status: 200,
      response: todos,
    });
    const { result } = renderHook(() => useTodos());
    await waitFor(() => {
      expect(result.current.todos).toEqual([todo1]);
    });

    // Add todo
    moxios.stubs.reset();
    moxios.stubRequest('/todos', {
      status: 200,
      response: todo2,
    });
    act(() => {
      result.current.addTodo(newTodo2, { resetForm, setSubmitting });
    });
    await waitFor(() => {
      expect(result.current.todos).toEqual([todo1, todo2]);
    });

    // Check todo
    moxios.stubs.reset();
    moxios.stubRequest(`/todos/${todo1.id}`, {
      status: 200,
    });
    act(() => {
      result.current.toggleTodo(todo1);
    });
    await waitFor(() => {
      expect(result.current.todos).toEqual([checkedTodo1, todo2]);
    });

    // Uncheck todo
    moxios.stubs.reset();
    moxios.stubRequest(`/todos/${checkedTodo1.id}`, {
      status: 200,
    });
    act(() => {
      result.current.toggleTodo(checkedTodo1);
    });
    await waitFor(() => {
      expect(result.current.todos).toEqual([todo1, todo2]);
    });

    // Update todo
    moxios.stubs.reset();
    moxios.stubRequest(`/todos/${todo2.id}`, {
      status: 200,
      response: updatedTodo2,
    });
    act(() => {
      result.current.updateTodo(updatedTodo2, { resetForm, setSubmitting });
    });
    await waitFor(() => {
      expect(result.current.todos).toEqual([todo1, updatedTodo2]);
    });

    // Delete todo
    moxios.stubs.reset();
    moxios.stubRequest(`/todos/${todo2.id}`, {
      status: 200,
    });
    act(() => {
      result.current.deleteTodo(todo2.id);
    });
    await waitFor(() => {
      expect(result.current.todos).toEqual([todo1]);
    });
  });
});
