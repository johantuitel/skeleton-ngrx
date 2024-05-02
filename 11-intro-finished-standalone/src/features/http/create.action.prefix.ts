export const createActionPrefix = (prefix: string, actionType?: string) => (strings: TemplateStringsArray) => {
  if (actionType) {
    return [`[${prefix}] ${actionType} `, ...strings].join('');
  } else {
    return [`[${prefix}] `, ...strings].join('');
  }
};
