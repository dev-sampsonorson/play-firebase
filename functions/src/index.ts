/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const generateImage = onRequest((request, response) => {
  const { query } = request.body.data;
  logger.info('Hello logs!', { structuredData: true });
  response
    .status(200)
    .json({
      data: {
        foo: `You typed ${query}`,
      },
    });
});
