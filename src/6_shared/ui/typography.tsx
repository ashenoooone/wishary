import React from 'react';
import {
  cva,
  VariantProps,
} from 'class-variance-authority';

const typographyVariants = cva('font-bold', {
  variants: {
    variant: {
      h1: 'text-5xl font-bold',
      h2: 'text-4xl font-bold',
      h3: 'text-3xl font-semibold',
      h4: 'text-2xl font-semibold',
      h5: 'text-xl font-medium',
      h6: 'text-lg font-medium',
      span: 'text-base',
      link: '',
    },
  },
  defaultVariants: {
    variant: 'span',
  },
});

export type TypographyProps = {
  className?: string;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
} & VariantProps<typeof typographyVariants>;

const defaultElements: Record<
  string,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  span: 'span',
  link: 'span',
};

const Typography = ({
  as,
  variant,
  className,
  children,
  ...props
}: TypographyProps) => {
  const Component =
    as || (variant ? defaultElements[variant] : 'span');

  return (
    <Component
      className={typographyVariants({ variant, className })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
