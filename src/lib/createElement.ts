interface Template {
  type: string;
  template: string;
}

export const createElement = (tagName: string) => {
  //function that returns a function that returns an object!
  return (strings: TemplateStringsArray, ...args: string[]): Template => {
    return {
      type: tagName,
      template: strings.reduce((acc, currentString, index) => {
        return acc + currentString + (args[index] || "");
      }, ""), //specify initial value as an empty string so it starts at correct index!
    };
  };
}; //passed test!

export const render = (selector: string, component: Template) => {
  const app_instance = document.getElementById(selector);
  const render_element = document.createElement(component.type);
  const render_text = document.createTextNode(component.template);

  render_element.append(render_text);
  app_instance?.append(render_element);
}; //tested with a webpack dev server gotta install mocha jsdom for writing the complete unit test!
