import { ceil } from "lodash";

export default function waitAMinute(start_date, end_date) {
	// code goes here!
  start_date = new Date(start_date);
  end_date = new Date(end_date);
  let total_time = ceil((end_date - start_date) / 1000 / 60);
  let break_counter = 0;
  while (total_time > 0) {
    total_time = total_time - 25;
    if (total_time > 0) {
      break_counter += 1;
      const break_time = (break_counter % 4 == 0) ? 15 : 5
      total_time = total_time - break_time;
      
    }
  }
  return break_counter;
}