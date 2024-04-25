type Mods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  additionalCls: string[] = [],
  mods: Mods = {}
): string {
  return [
    cls,
    ...additionalCls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
