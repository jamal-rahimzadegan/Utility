import { REGEX } from 'constant';

// check if string matches a regex
export default function testString(str: string, pattern: keyof typeof REGEX) {
  // @ts-ignore
  return REGEX[pattern].test(str);
}
