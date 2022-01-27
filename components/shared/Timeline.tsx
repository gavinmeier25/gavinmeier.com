import type { FC } from 'react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-duotone-svg-icons';

const Point: FC = () => (
  <span className="w-3 h-3 border border-green-200 bg-green-100 rounded-full absolute -left-1 top-4" />
);

const TimeSpan: FC<{ startDate: string; endDate: string }> = ({ startDate, endDate }) => (
  <div className="text-xs border border-green-400 rounded-full py-1 px-2 w-max">
    {startDate} - {endDate}
  </div>
);

interface Props {
  title: string;
  subtitle: string;
  content: string;
  startDate: string;
  endDate: string;
}

export const Timeline: FC<Props> = ({ startDate, endDate, content, subtitle, title }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full p-4 relative border-l border-green-200">
      <Point />
      <div className="w-full sm:w-1/3">
        <TimeSpan startDate={startDate} endDate={endDate} />
        <p className="font-semibold mt-3">{title}</p>
        <p className="text-xs">{subtitle}</p>
      </div>
      <ul className="w-full sm:w-2/3 mt-4 sm:mt-0 list-none">
        {content &&
          content
            .split('\n')
            .filter((sentence) => sentence)
            .map((sentence, index) => (
              <div className="inline-flex mb-2" key={sentence}>
                <FontAwesomeIcon className="mt-1 text-green-600" icon={faChevronRight} size="1x" />
                <li className="pl-1" key={sentence}>
                  {sentence}
                </li>
              </div>
            ))}
      </ul>
    </div>
  );
};

export type { Props as TimelineProps };
