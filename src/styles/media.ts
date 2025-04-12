const MOBILE_SIZE = 480;
const TABLET_SIZE = 768;
const DESKTOP_SIZE = 1024;

export const breakpoint = {
  desktop: DESKTOP_SIZE,
  tablet: TABLET_SIZE,
  mobile: MOBILE_SIZE,
};

export const mq = (
  device: keyof typeof breakpoint | undefined,
  customSize: number | undefined = undefined,
  type: 'min' | 'max' = 'max'
) => {
  if (!device && !customSize)
    throw new Error(`Breakpoint ${device || customSize} not found`);
  return `@media (${type}-width: ${device ? breakpoint[device] : customSize}px)`;
};
