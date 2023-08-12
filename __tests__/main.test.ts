import pipe from '../src/pipa';

describe('pipe', () => {
  it('should return a function that returns the input argument when no functions are provided', async () => {
    const pipedFn = await pipe();
    const result = await pipedFn('test');
    expect(result).toBe('test');
  });

  it('should pipe the input argument through the provided functions', async () => {
    const addOne = (num: number) => num + 1;
    const multiplyByTwo = (num: number) => num * 2;
    const subtractThree = (num: number) => num - 3;

    const pipedFn = await pipe(addOne, multiplyByTwo, subtractThree);
    const result = await pipedFn(5);
    expect(result).toBe(9); // (5 + 1) * 2 - 3 = 7
  });

  it('should work with asynchronous functions', async () => {
    const asyncAddOne = async (num: number) => {
      return new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(num + 1);
        }, 100);
      });
    };

    const asyncMultiplyByTwo = async (num: number) => {
      return new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(num * 2);
        }, 100);
      });
    };

    const asyncSubtractThree = async (num: number) => {
      return new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(num - 3);
        }, 100);
      });
    };

    const pipedFn = await pipe(asyncAddOne, asyncMultiplyByTwo, asyncSubtractThree);
    const result = await pipedFn(5);
    expect(result).toBe(9); // (5 + 1) * 2 - 3 = 7
  });
});
