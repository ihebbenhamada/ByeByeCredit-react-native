import {EMAIL_REGEX} from './regx';

export const parsePasswordRequiredErrorType = (text: string) => {
  if (text?.trim() === '') {
    return 'Mot de passe obligatoire!';
  }
  if (text?.trim()?.length < 5) {
    return 'Mot de passe très courte! ';
  }
  return '';
};
export const parseEmailErrorType = (text: string) => {
  if (text?.trim() === '') {
    return 'Email obligatoire!';
  }
  if (!EMAIL_REGEX.test(text)) {
    return 'Email invalide!';
  }
  return '';
};
