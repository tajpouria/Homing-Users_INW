/***
 find element(s) by given attribute in corresponding wrapper
 
 @arg {ShallowWrapper}
 @arg {string}
 
 @returns {ShallowWrapper<HTMLAttributes, any, React.Component<{}, {}, any>> | Error}
 */
export const findByTestAttribute = (component: any, attr: string) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper ? wrapper : new Error(`utils:findByTestAttribute: ${component} not found!`);
};

export * from "./custom_test";
