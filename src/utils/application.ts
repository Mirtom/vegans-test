import {IApplicationProps} from '../types/application';

export const getAppImage = (props: IApplicationProps) => {
  return props['im:image'][2]?.label;
};

export const getAppName = (props: IApplicationProps) => {
  return props['im:name'].label;
};

export const getAppArtist = (props: IApplicationProps) => {
  return props['im:artist'].label;
};

export const getAppDescription = (
  props: IApplicationProps,
  fullDescription?: boolean,
) => {
  return fullDescription
    ? props.summary.label
    : `${props.summary.label.slice(0, 150)}...`;
};
