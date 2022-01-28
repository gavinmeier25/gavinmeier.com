import type { FC } from 'react';

interface Props {
  center?: boolean;
  title: string;
  subTitle?: string;
}

export const Title: FC<Props> = ({ center, title, subTitle }) => {
  return (
    <div className="flex flex-col w-full">
      {subTitle && (
        <h2 className={`text-xs text-grey-700 font-bold w-full text-left ${center ? 'text-center' : ''}`}>
          {subTitle}
        </h2>
      )}
      <h2 className={`uppercase mb-1 text-lg font-bold w-full text-left ${center ? 'text-center' : ''}`}>{title}</h2>
      <span
        className={`relative w-2 h-8 mb-6 mt-1 ${
          center ? 'mx-auto' : ''
        } before:bg-green-700 before:h-full before:w-0.5 before:absolute before:left-0 after:bg-green-500 after:h-6 after:w-0.5 after:absolute after:ml-1`}
      ></span>
    </div>
  );
};
