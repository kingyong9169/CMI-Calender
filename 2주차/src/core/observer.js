let currentObserver = null;

export const observe = (fn) => {
  currentObserver = fn;
  console.log(fn);
  fn();
  currentObserver = null;
};

export const observable = (obj) => {
  Object.keys(obj).forEach((key) => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get() {
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },

      set(value) {
        console.log(key, !value.getMonth, value === _value);
        if (!value.getMonth && _value === value) return;
        if (!value.getMonth && JSON.stringify(_value) === JSON.stringify(value))
          return;
        _value = value;
        observers.forEach((fn) => fn());
      },
    });
  });
  return obj;
};
