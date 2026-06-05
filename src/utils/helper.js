export function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
