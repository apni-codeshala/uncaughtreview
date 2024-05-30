import { z } from 'zod';

export const acceptMesssageSchema = z.object({
    acceptMessage: z.boolean()
});