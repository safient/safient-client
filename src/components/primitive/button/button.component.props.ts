interface ButtonProps {
  wide?: string | boolean;
  variant?: string;
  children?: React.ReactNode | never;
}

interface StyledButtonProps {
  wide: string | any;
  variant?: string | any;
  theme?: any;
  children?: React.ReactNode | never;
}

export type { ButtonProps, StyledButtonProps };