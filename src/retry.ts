const executeWithDelay = (fn: Function, duration: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(fn()), duration));
};

export default async function retry(cb: Function, tries: number = 1, delay: number = 1) {
  const runPassedFunction = async (currentTry: number) => {
    try {
      return await cb();
    } catch (err) {
      if (currentTry <= tries) {
        const nextTry = currentTry + 1;
        return executeWithDelay(() => runPassedFunction(nextTry), delay * 1000);
      } else throw err;
    }
  };

  return runPassedFunction(1);
}

/**
  usage:
  await retry(requestServerForData(), 2, 4);
 */
