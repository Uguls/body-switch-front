import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  quality = 80,
  placeholder = '/body_switch_logo.jpg',
  sizes = "100vw",
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // priority가 true면 즉시 로드
  const [hasError, setHasError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const imgRef = useRef(null);
  const progressInterval = useRef(null);

  // WebP 지원 확인
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  // 이미지 URL 최적화
  const getOptimizedImageUrl = (originalUrl) => {
    if (!originalUrl) return placeholder;
    
    // 이미 최적화된 URL이거나 외부 CDN인 경우 그대로 사용
    if (originalUrl.includes('webp') || originalUrl.includes('cdn')) {
      return originalUrl;
    }

    // 이미지 크기와 품질 매개변수 추가 (이미지 서버에 따라 조정 필요)
    const params = new URLSearchParams();
    if (width) params.append('w', width);
    if (height) params.append('h', height);
    params.append('q', quality);
    if (supportsWebP()) params.append('format', 'webp');

    const separator = originalUrl.includes('?') ? '&' : '?';
    return `${originalUrl}${separator}${params.toString()}`;
  };

  useEffect(() => {
    if (priority) return; // priority가 true면 intersection observer 스킵

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px' // 뷰포트 100px 전에 미리 로드
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // 가짜 로딩 프로그레스 (실제 프로그레스는 브라우저 지원 한계로 어려움)
  useEffect(() => {
    if (isInView && !isLoaded && !hasError) {
      progressInterval.current = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 90) return prev; // 90%에서 멈춤
          return prev + Math.random() * 20;
        });
      }, 200);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isInView, isLoaded, hasError]);

  const handleLoad = () => {
    setIsLoaded(true);
    setLoadingProgress(100);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
    setLoadingProgress(0);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
  };

  const optimizedSrc = getOptimizedImageUrl(src);

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden bg-gray-100 ${className}`} 
      {...props}
    >
      {/* Base placeholder - 항상 표시 */}
      <div 
        className={`absolute inset-0 bg-gray-200 transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <img
          src={placeholder}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      
      {/* Loading progress bar */}
      {isInView && !isLoaded && !hasError && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
          <div 
            className="h-full bg-[#58B9C1] transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      )}
      
      {/* Shimmer loading effect */}
      {isInView && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      )}
      
      {/* Actual optimized image */}
      {isInView && !hasError && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          decoding="async"
        />
      )}
      
      {/* Error state - 브랜드 로고 표시 */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <img 
            src={placeholder}
            alt="BODY switch 로고"
            className="w-full h-full object-contain opacity-80"
          />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;