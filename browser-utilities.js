export const isPhonePeBrowser = () => {
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    if (navigator.userAgent.indexOf('phonepe') !== -1) {
      return true;
    }
  }
  return false;
};

export const isPaytmBrowser = () => {
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    if (navigator.userAgent.indexOf('AppContainer') !== -1) {
      return true;
    }
  }
  return false;
};
