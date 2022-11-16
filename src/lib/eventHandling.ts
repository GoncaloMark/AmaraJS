export interface EVT<T> {
  type: string;
  callback: (...args: T[]) => unknown;
}

export function onClick<T>(func: (...args: T[]) => unknown): EVT<T> {
  return {
    type: "event",
    callback: func,
  };
}
