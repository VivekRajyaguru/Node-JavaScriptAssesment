
export default function asynchronousDelay(delay, callback) {
	// Your code here....
  setTimeout(() => {
    console.log('haha');
    callback();
  }, delay);
}
