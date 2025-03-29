import Link from 'next/link';
import React from 'react';

interface CommonButtonProps {
  href: string;
  text: string;
  className?: string;
}

export const CommonButton: React.FC<CommonButtonProps> = ({ href, text, className = '' }) => {
  return (
    <Link href={href}>
      <span className={`bg-black/90 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition ${className}`}>
        {text}
      </span>
    </Link>
  );
};
