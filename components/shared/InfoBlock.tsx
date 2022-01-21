import type { FC, ReactNode } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCommit } from '@fortawesome/pro-light-svg-icons';

interface Props {
  center?: boolean;
  title: string;
  content: ReactNode;
  icon: ReactNode;
}

export const InfoBlock: FC<Props> = ({ center, content, title, icon }) => (
  <div
    className={`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300 ${center ? 'items-center' : ''}`}
  >
    <span className="text-xl flex justify-content-center text-green-500 border border-green-200 rounded-full mb-2">
      <FontAwesomeIcon className="w-full h-full" icon={faCodeCommit} />
    </span>
    <div className={center ? 'text-center' : ''}>
      <h3 className="text-md mt-1 font-semibold">{title}</h3>
      <p className="mt-1">{content}</p>
    </div>
  </div>
);
