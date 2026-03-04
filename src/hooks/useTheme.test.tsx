import { renderHook, act } from '@testing-library/react';
import useTheme from './useTheme';

describe('useTheme', () => {
  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  test('falls back to system preference when localStorage value is invalid', () => {
    localStorage.setItem('theme', 'invalidTheme');

    window.matchMedia = vi.fn().mockReturnValue({
      matches: true,
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
  });

  test('sets color-scheme in root element based on theme change', () => {
    const root = document.documentElement;
    const { result } = renderHook(() => useTheme());

    expect(root.style.colorScheme).toBe(result.current.theme);
  });

  test('checks if handleThemeToggle toggles theme value', () => {
    const { result } = renderHook(() => useTheme());
    const initialTheme = result.current.theme;

    act(() => {
      result.current.handleThemeChange();
    });

    const newTheme = result.current.theme;

    expect(newTheme).not.toBe(initialTheme);
  });
});
