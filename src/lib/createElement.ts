export const createElement = (tagName: string) => {
  //function that returns a function that returns an object!
  return (strings: TemplateStringsArray, ...args: string[]) => {
    return {
      type: tagName,
      template: strings.reduce((acc, currentString, index) => {
        return acc + currentString + (args[index] || "");
      }, ""), //specify initial value as an empty string so it starts at correct index!
    };
  };
}; //passed test!
