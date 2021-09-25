export const PREV = 'PREV' as const;
export const NEXT = 'NEXT' as const;

export const prev = (payload: number) => ({ type: PREV, payload });
export const next = (payload: number) => ({ type: NEXT, payload });

export type HeaderAction = ReturnType<typeof prev> | ReturnType<typeof next>;
