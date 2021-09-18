import crypto from "crypto";

export const randomString = (length = 12): string =>
  crypto.randomBytes(length).toString("hex");

export const randomBoolean = (): boolean => Math.random() < 0.5;

export const randomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);
