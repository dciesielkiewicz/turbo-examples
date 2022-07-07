import { describe, expect, test } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useMenuOpened } from './useMenuOpened';

describe('useMenuOpened', () => {
  test('Hook should work properly', () => {
    const { result } = renderHook(() => useMenuOpened());
    expect(result.current.isMenuOpened).toBeFalsy();

    act(() => {
      result.current.openMenu();
    });
    expect(result.current.isMenuOpened).toBeTruthy();

    act(() => {
      result.current.closeMenu();
    });
    expect(result.current.isMenuOpened).toBeFalsy();
  });
});
