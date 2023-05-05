import classNames from "classnames";

export const cn = classNames;

export function formatPrice(price: number) {
  const priceFormatter = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return "$" + priceFormatter.format(price);
}
