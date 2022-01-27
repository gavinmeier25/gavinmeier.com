import { forwardRef, ReactNode } from 'react';

interface Props {
  href?: string;
  onClick?: () => void;
  content: string | ReactNode;
  type?: 'primary' | 'secondary' | 'primary-link' | 'secondary-link';
  downloadable?: boolean;
  id?: string;
}

export const Button = forwardRef<HTMLAnchorElement, Props>(
  ({ href, downloadable, onClick, content, type = 'primary', id }, ref) => {
    const isLink = type === 'primary-link' || type === 'secondary-link';
    const primaryOrSecondaryClassName =
      type === 'primary' || type === 'primary-link'
        ? 'bg-green-700 border-green-500 text-white'
        : 'bg-grey-200 border-none';

    const linkProps = downloadable ? { rel: 'noreferrer noopener', target: '_blank' } : {};
    const idProp = id !== undefined ? { id } : {};
    return (
      <>
        {isLink && (
          <span className="transition-all ">
            <a
              onClick={onClick}
              href={href}
              ref={ref}
              className={`py-2 px-8 rounded-full border  cursor-pointer transition-all  ${primaryOrSecondaryClassName}`}
              {...linkProps}
              {...idProp}
            >
              {content}
            </a>
          </span>
        )}
        {!isLink && (
          <button
            {...idProp}
            className={
              'py-2 px-8 rounded-full border border-green-500 text-white cursor-pointer transition-all bg-green-700'
            }
          >
            {content}
          </button>
        )}
      </>
    );
  },
);

Button.displayName = 'Button';
