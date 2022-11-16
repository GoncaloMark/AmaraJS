export interface EVT {
  type: string;
  callback: (...args: unknown[]) => unknown;
}

export function onClick(func: (...args: unknown[]) => unknown): EVT {
  return {
    type: "event",
    callback: func,
  };
}
