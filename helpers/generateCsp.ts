import env from "@beam-australia/react-env";

interface Options {
  prodOnly?: boolean;
}

interface generateCSPProps {
  nonce?: string;
}

/**
 * @param options nonce: string
 * @returns A string with multiple CSP directives and corresponding values
 */
const generateCSP = ({ nonce }: generateCSPProps = {}) => {
  const policy: Partial<Record<CSPDirective, string[]>> = {};

  /**
   * ads a directive to the CSP
   * @param directive ex style-src
   * @param value dirctive value, ex 'self' https://example.com
   * @param options {prodOnly: boolean}
   * @returns A CSP directive and value
   */
  const add = (directive: CSPDirective, value: string, options: Options = {}) => {
    if (options.prodOnly && process.env.NODE_ENV === 'development') return;
    /** eslint-disable */
    // console.log({ directive, value });
    const curr = policy[directive];
    policy[directive] = curr ? [...curr, value] : [value];
  };

  add('default-src', `'self'`, { prodOnly: true });
  add('script-src', `'self' https://webbanalys.digg.se`, { prodOnly: true });
  add('font-src', `'self'`);
  add('base-uri', `'self'`);
  add('prefetch-src', `'self'`);
  add('manifest-src', `'self'`);
  add('form-action', `'none'`);
  add(
    'img-src',
    `'self'${` ${
      env('MEDIA_BASE_URL') || ''
    }`} https://diggdrstoragetest.blob.core.windows.net/ data: *`
  );
  add('media-src', `'self'${` ${env('MEDIA_BASE_URL') || ''}`}`);
  add('style-src', `'self' 'unsafe-inline'`);
  add('style-src-elem', `'self' 'unsafe-inline'`);
  add('style-src-attr', `'self' 'unsafe-inline'`);
  add('connect-src', `'self' https://webbanalys.digg.se`);

  // return the object in a formatted value (this won't work on IE11 without a polyfill!)
  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ');
};

export default generateCSP;
