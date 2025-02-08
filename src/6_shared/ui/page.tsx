import { cn } from '../lib/utils';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Page = (props: Props) => {
  const { className, children } = props;
  return (
    <div className={cn('container mx-auto', className)}>
      {children}
    </div>
  );
};
