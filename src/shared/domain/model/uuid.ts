import { v7 as uuidv7, validate as uuidValidate } from 'uuid';

/**
 * Generates a new UUID (version 7).
 * @returns {string} A newly generated UUID.
 */
export const generateUUID = (): string => { return uuidv7(); };

/**
 * Validates a UUID (version 7).
 * @param {string} uuid - The UUID to validate.
 * @returns {boolean} True if the UUID is valid, false otherwise.
 */
export const validateUUID = (uuid: string): boolean => { return uuidValidate(uuid); };
