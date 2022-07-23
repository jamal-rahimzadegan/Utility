import { REGEX } from 'constant';

// check if string matches a regex
export default function testString(str: string, pattern: keyof typeof REGEX): boolean {
  return REGEX[pattern].test(str);
}
