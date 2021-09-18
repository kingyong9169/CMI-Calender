export const PREV = "PREV";
export const NEXT = "NEXT";

export const prev = (payload) => ({ type: PREV, payload });
export const next = (payload) => ({ type: NEXT, payload });
