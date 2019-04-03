let cache = {};

const fib = n => {
  if (cache[n]) {
    return cache[n];
  }

  cache[n] = n === 0 || n === 1 ? n : fib(n-1) + fib(n-2);
  return cache[n];
};

export default fib;
