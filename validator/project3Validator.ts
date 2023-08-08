import {z} from 'zod';

export const project3Validator = z.object({
  passwordLength: z.coerce
    .number()
    .min(8, 'The password should be at least 8 characters long')
    .max(20, 'The password should be at most 20 characters long'),
});

export type project3ValidatorType = z.infer<typeof project3Validator>;
