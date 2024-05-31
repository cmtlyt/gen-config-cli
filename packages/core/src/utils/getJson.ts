import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function getJson(target: string, isCliPath: boolean = false) {
  return JSON.parse(readFileSync(isCliPath ? resolve(__dirname, target) : target).toString());
}
