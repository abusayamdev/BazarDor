export function getSafeRedirectPath(value: string | null | undefined) {
  if (
    value?.startsWith("/") &&
    !value.startsWith("//") &&
    !value.includes("\\") &&
    !/[\u0000-\u001f\u007f]/.test(value)
  ) {
    return value;
  }

  return "/";
}
