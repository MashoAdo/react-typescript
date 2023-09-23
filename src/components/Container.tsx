import { ContainerProps } from '../types/component-props';

function Container({ styles, children }: ContainerProps) {
  return <div style={styles}>{children}</div>;
}

export default Container;
