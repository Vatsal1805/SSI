import React, { useState } from 'react';

export default function Avatar({
  src,
  name = '',
  sizeClass = 'w-12 h-12',
  textClass = 'text-[14px]',
  borderClass = 'border-2 border-accent-orange',
  fallbackBg = 'bg-bg-primary',
  fallbackText = 'text-accent-orange',
  className = ''
}) {
  const [error, setError] = useState(false);

  // Parse initials stripping periods (e.g. S.J. Maurya -> SM)
  const initials = name
    ? name
        .replace(/\./g, '')
        .split(' ')
        .filter(Boolean)
        .map(w => w[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : '??';

  // Format absolute image URL
  let imageUrl = src;
  if (src && !src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('data:')) {
    imageUrl = `https://www.shreesaiinstitute.in/images/${src}`;
  }

  if (error || !src) {
    return (
      <div 
        className={`${sizeClass} rounded-full ${fallbackBg} ${fallbackText} flex items-center justify-center font-space font-medium ${textClass} shrink-0 ${className}`}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={name}
      onError={() => setError(true)}
      className={`${sizeClass} rounded-full object-cover shrink-0 ${borderClass} ${className}`}
    />
  );
}
