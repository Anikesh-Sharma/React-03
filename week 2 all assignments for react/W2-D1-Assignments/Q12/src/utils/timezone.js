import { format } from 'date-fns-tz';

export const formatDueDate = (date, timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone });
};
