let currentObserver = null;

const debounceFrame = (callback) => {
  let currentCallback = -1;
  return () => {
    cancelAnimationFrame(currentCallback);
    currentCallback = requestAnimationFrame(callback);
  };
};

export const observe = (fn) => {
  currentObserver = debounceFrame(fn);
  console.log(debounceFrame(fn));
  fn();
  currentObserver = null;
};

export const observable = (obj) => {
  const observerMap = {};

  return new Proxy(obj, {
    get(target, name) {
      observerMap[name] = observerMap[name] || new Set();
      if (currentObserver) observerMap[name].add(currentObserver);
      return target[name];
    },
    set(target, name, value) {
      // getMonth 없애는 것을 고려
      if (!value.getMonth && target[name] === value) return true;
      if (
        !value.getMonth &&
        JSON.stringify(target[name]) === JSON.stringify(value)
      )
        return true;
      target[name] = value;
      observerMap[name].forEach((fn) => fn());
      return true;
    },
  });
};
