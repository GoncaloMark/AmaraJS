import { h, eventListenersModule, On } from "snabbdom";
import * as snabbdom from "snabbdom";
import { VNode } from "snabbdom/build/vnode";
import { EVT } from "./eventHandling";

const patch = snabbdom.init([eventListenersModule]);

interface Template {
  type: string;
  template: VNode;
}

interface State {
  template: string;
  on: On;
}

const state: State = {
  template: "",
  on: {},
};

const ReduceTemplate =
  (args: unknown[]) => (acc: State, currentString: string, index: number) => {
    const CArg = args[index] as EVT;
    if (CArg && CArg.type === "event") {
      return {
        ...acc,
        on: {
          click: CArg.callback,
        },
      };
    }
    return {
      ...acc,
      template: acc.template + currentString + (args[index] || ""),
    };
  }; //Reducer prototype to clean the code below!

export const createElement = (tagName: string, id?: string) => {
  //function that returns a function that returns an object!
  return (strings: TemplateStringsArray, ...args: unknown[]): Template => {
    const { template, on } = strings.reduce(ReduceTemplate(args), state); //specify initial value as an empty string so it starts at correct index!
    return {
      type: "ElementNode",
      template: h(tagName + `#${id}`, { on }, template),
    };
  };
}; //passed test!

export const render = (selector: string, component: Template) => {
  const app_instance = document.querySelector(selector) as Element;
  patch(app_instance, component.template);
}; //passed test!
