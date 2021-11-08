import type { FC, ReactNode } from 'react';

interface Props {
  center?: boolean;
  title: string;
  content: ReactNode;
  icon: string;
}

export const InfoBlock: FC<Props> = ({ center, content, title, icon }) => (
  <div
    className={`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300 ${center ? 'items-center' : ''}`}
  >
    <span className="flex flex-items-center justify-content-center w-10 h-10 text-green-500 border border-green-200 rounded-full mb-2">
      {icon}
    </span>
    <div className={center ? 'text-center' : ''}>
      <h3 className="text-md mt-1 font-semibold">{title}</h3>
      <p className="mt-1">{content}</p>
    </div>
  </div>
);
