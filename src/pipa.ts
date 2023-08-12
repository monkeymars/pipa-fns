type Func<T, R> = (arg: T) => R | Promise<R>;

export default async function pipe(...fns: Func<any, any>[]): Promise<Func<any, Promise<any>>> {
  return async (arg: any): Promise<any> => {
    return fns.reduce(async (result, fn) => {
      const previousResult = await result;
      return fn(previousResult);
    }, Promise.resolve(arg));
  };
}
