import { REGEX } from 'constant'; // {IS_MOBILE:SOME_REGEX}

// check if string matches a regex
export default function validateString(str: string, pattern: keyof typeof REGEX): boolean {
  return REGEX[pattern].test(str);
}
