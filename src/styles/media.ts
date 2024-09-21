const MOBILE_SIZE = 480;
const TABLET_SIZE = 768;
const DESKTOP_SIZE = 1024;

export const breakpoint = {
  desktop: DESKTOP_SIZE,
  tablet: TABLET_SIZE,
  mobile: MOBILE_SIZE,
}

export const mq = (device: keyof typeof breakpoint, type: 'min' | 'max' = 'max') => {
  return `@media (${type}-width: ${breakpoint[device]}px)`;
}