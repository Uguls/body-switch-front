import React from 'react';

const ImageSkeleton = ({ className = '', aspectRatio = 'aspect-video' }) => {
  return (
    <div className={`relative overflow-hidden bg-gray-200 rounded ${aspectRatio} ${className}`}>
      {/* Base skeleton */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
      
      {/* Placeholder icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          className="w-8 h-8 text-gray-400" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    </div>
  );
};

const EventCardSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center w-full min-h-48 md:h-64 relative rounded-2xl bg-white shadow-[0px_0px_12px_0_rgba(0,0,0,0.16)] overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="flex-grow-0 flex-shrink-0 w-full md:w-[30%] h-48 md:h-full relative overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none bg-gray-200">
        <ImageSkeleton className="w-full h-full rounded-none" />
      </div>
      
      {/* Content skeleton */}
      <div className="flex flex-col justify-between items-start flex-grow p-4 md:p-6">
        <div className="flex flex-col justify-start items-start self-stretch gap-3 md:gap-6 w-full">
          {/* Title skeleton */}
          <div className="w-3/4 h-6 md:h-8 bg-gray-200 rounded animate-pulse" />
          
          {/* Subtitle skeleton */}
          <div className="w-full h-4 md:h-6 bg-gray-200 rounded animate-pulse" />
          <div className="w-2/3 h-4 md:h-6 bg-gray-200 rounded animate-pulse" />
        </div>
        
        {/* Date skeleton */}
        <div className="w-24 h-4 md:h-5 bg-gray-200 rounded animate-pulse mt-3 md:mt-0" />
      </div>
    </div>
  );
};

const EventListSkeleton = ({ count = 3 }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full max-w-[1200px] gap-6 md:gap-12 mt-8 md:mt-12">
      {Array.from({ length: count }, (_, index) => (
        <EventCardSkeleton key={index} />
      ))}
    </div>
  );
};

export { ImageSkeleton, EventCardSkeleton, EventListSkeleton };