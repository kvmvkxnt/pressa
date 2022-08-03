import { sign, verify } from 'jsonwebtoken';
import { SECRET } from '../config/index.js';

export default {
  sign: (payload: any) => {
    const token = sign(payload, SECRET);
    return token;
  },
  verify: (payload: string) => {
    const output = verify(payload, SECRET);
    return output;
  }
}
