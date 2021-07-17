
export default function magicArray(arr) {
	// Rock it!
  let sum = 0;
  arr.map((e) => {
    if (e % 7 != 0) {
      sum += e;
    }
  });
  return sum;
}