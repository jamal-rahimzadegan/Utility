function handleRetry() {
  const executeWithDelay = (fn: Function, duration: number) => {
    return new Promise((resolve) => setTimeout(() => resolve(fn()), duration));
  };

  const runPassedFunction = async (currentTry: number, cb, tries, delay) => {
    try {
      return await cb();
    } catch (err) {
      if (currentTry <= tries) {
        const nextTry = currentTry + 1;
        return executeWithDelay(() => runPassedFunction(nextTry, cb, tries, delay), delay * 1000);
      } else throw err;
    }
  };

  return (cb: Function, tries: number, delay: number) => runPassedFunction(1, cb, tries, delay);
}

const retry = handleRetry();
export default retry;

/**
 * Usage: 2 tries that each one runs after 4 seconds -->  await retry(requestServer, 2, 4);
 */
