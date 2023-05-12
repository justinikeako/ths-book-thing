import classNames from "classnames";
import { differenceInCalendarDays, format } from "date-fns";

export const cn = classNames;
export function formatRestockDate(date?: Date) {
  if (!date) return null;

  const difference = differenceInCalendarDays(date, new Date());

  if (difference === 0) return format(date, "'Restocks at' h:mm bbb");
  else if (difference === 1) return "Restocks tomorrow";

  return format(date, "'Restocks' EEE, LLL d");
}
export function formatPrice(price: number) {
  const priceFormatter = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return "$" + priceFormatter.format(price);
}
