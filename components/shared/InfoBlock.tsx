import type { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faProjectDiagram,
  faServer,
  faTerminal,
  faMobile,
  faMapMarker,
  faMailbox,
} from '@fortawesome/pro-duotone-svg-icons';

interface Props {
  center?: boolean;
  title: string;
  content: ReactNode;
  icon: string;
}

const getIcon = (iconWanted: string): FontAwesomeIconProps['icon'] => {
  switch (iconWanted) {
    case 'code':
      return faCode;
    case 'contract':
      return faTerminal;
    case 'data':
      return faServer;
    case 'library':
      return faProjectDiagram;
    case 'phone':
      return faMobile;
    case 'location':
      return faMapMarker;
    case 'email':
      return faMailbox;
    default:
      return faEthereum;
  }
};
export const InfoBlock: FC<Props> = ({ center, content, title, icon }) => (
  <div className={`my-4 mx-3 p-4 bg-white rounded-lg border  border-gray-300 h-56 ${center ? 'items-center' : ''}`}>
    <div className="text-xl flex items-center justify-center w-full text-green-500  min-h-max  mb-2  ">
      <div className="border border-green-500 rounded-full p-4 h-fit">
        <FontAwesomeIcon size="2x" icon={getIcon(icon)} />
      </div>
    </div>
    <div className={center ? 'text-center' : ''}>
      <h3 className="text-md mt-1 font-semibold">{title}</h3>
      <p className="mt-2 overflow-hidden hover:overflow-visible focus:overflow-visible md:overflow-visible text-ellipsis">
        {content}
      </p>
    </div>
  </div>
);
