type Props = {
  children: React.ReactNode;
  [x:string]: any;
};

const Button = ({ children, ...otherProps }: Props): JSX.Element =>
  (
    <button
      {...otherProps}
    >{children}</button>
  );

export default Button;
