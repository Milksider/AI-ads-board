export const getMissingKeys = <T extends Record<string, unknown>>(
    obj: T,
    allKeys: (keyof T)[],
): (keyof T)[] => allKeys.filter((key) => obj[key] === undefined);
