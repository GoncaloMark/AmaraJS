import { h, eventListenersModule } from "snabbdom";
import * as snabbdom from "snabbdom";
import { VNode } from "snabbdom/build/vnode";

const patch = snabbdom.init([eventListenersModule]);

interface Template {
  type: string;
  template: VNode;
}

interface State {
  template: string;
}

const state = {
  template: "",
};

const ReduceTemplate =
  (args: unknown[]) => (acc: State, currentString: string, index: number) => {
    return {
      ...acc,
      template: acc.template + currentString + ((args[index] as string) || ""),
    };
  }; //Reducer prototype to clean the code below!

export const createElement = (tagName: string, id?: string) => {
  //function that returns a function that returns an object!
  return (strings: TemplateStringsArray, ...args: unknown[]) => {
    const { template } = strings.reduce(ReduceTemplate(args), state); //specify initial value as an empty string so it starts at correct index!
    return (
      event?: string,
      func?: (...args: unknown[]) => unknown | unknown[]
    ): Template => {
      const on: snabbdom.On = {};
      if (event && func) {
        on[event] = func;
      }
      if (!id) {
        const vnode = h(tagName, { on }, template);
        return {
          type: "ElementNode",
          template: vnode,
        };
      } else {
        const vnode = h(tagName + `#${id}`, { on }, template);
        return {
          type: "ElementNode",
          template: vnode,
        };
      }
    };
  };
}; //passed test!

export const render = (selector: string, component: Template) => {
  const app_instance = document.querySelector(selector) as Element;
  patch(app_instance, component.template);
}; //passed test!
