import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function getRelativeTimeString(dateValue: number) {
  return dayjs().to(dateValue * 1000);
}
