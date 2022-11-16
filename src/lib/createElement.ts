import { h } from "snabbdom";
import * as snabbdom from "snabbdom";
import { VNode } from "snabbdom/build/vnode";
import { EVT } from "./eventHandling";

interface Template {
  type: string;
  template: VNode;
}

interface State {
  template: string;
  on: Record<string, unknown>;
}

const state: State = {
  template: "",
  on: {},
};

const patch = snabbdom.init([]);

const ReduceTemplate =
  (args: unknown[]) => (acc: State, currentString: string, index: number) => {
    //const arg = args[index] as EVT<unknown>;

    return {
      ...acc,
      template: acc.template + currentString + (args[index] || ""),
    };
  }; //Reducer prototype to clean the code below!

export const createElement = (tagName: string) => {
  //function that returns a function that returns an object!
  return (strings: TemplateStringsArray, ...args: unknown[]): Template => {
    const { template } = strings.reduce(ReduceTemplate(args), state); //specify initial value as an empty string so it starts at correct index!
    return {
      type: "ElementNode",
      template: h(tagName, {}, template),
    };
  };
}; //passed test!

export const render = (selector: string, component: Template) => {
  const app_instance = document.querySelector(selector) as Element;
  patch(app_instance, component.template);
}; //passed test!
