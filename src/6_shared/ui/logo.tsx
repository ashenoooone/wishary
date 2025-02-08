type Props = {
  className?: string;
};

export const Logo = (props: Props) => {
  const { className } = props;
  return <span className={className}></span>;
};
