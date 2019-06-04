const STORAGE_KEY = 'ApplicationStore';
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (obj: Object) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
