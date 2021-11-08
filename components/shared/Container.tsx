import type { FC, ReactNode } from 'react';

interface Props {
  isSection?: boolean;
  children: ReactNode;
}

export const Container: FC<Props> = ({ isSection, children }) => {
  return <div className={`max-w-3xl mx-auto px-8 md:px-0 ${isSection ? 'py-8 sm:py-16' : ''}`}>{children}</div>;
};
