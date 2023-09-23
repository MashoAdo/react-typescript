export type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: number;
};

export type ContainerProps = {
  styles: React.CSSProperties;
  children?: React.ReactNode;
};

export type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export type HeadingProps = {
  children: string;
};

export type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type OscarProps = {
  children: React.ReactNode;
};

export type Name = {
  first: string;
  last: string;
};

export type PersonProps = {
  name: Name;
};

export type PersonListProps = {
  names: Name[];
};

export type StatusProps = {
  status: 'loading' | 'success' | 'error';
};
