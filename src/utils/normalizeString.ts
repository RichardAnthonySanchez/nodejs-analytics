export interface NormalizeOptions {
  lowercase?: boolean;
  trim?: boolean;
  collapseSpaces?: boolean;
}

export function normalizeString(
  str: string,
  options?: NormalizeOptions
): string {
  let s = str;
  if (options?.trim ?? true) s = s.trim();
  if (options?.lowercase ?? true) s = s.toLowerCase();
  if (options?.collapseSpaces ?? true) s = s.replace(/\s+/g, " ");
  return s;
}
