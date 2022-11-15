interface Template {
    type: string;
    template: string;
}
export declare const createElement: (tagName: string) => (strings: TemplateStringsArray, ...args: string[]) => Template;
export declare const render: (selector: string, component: Template) => void;
export {};
