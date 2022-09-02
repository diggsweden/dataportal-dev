import crypto from 'crypto';

export const getImageDomain = () => {
  const env = process.env.NODE_ENV;
  return env === 'development' ? 'http://localhost:1337' : 'strapi production url';
};

export const generateKey = (): string => {
  return crypto.randomBytes(16).toString('base64');
};
