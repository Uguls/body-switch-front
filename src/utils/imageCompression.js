/**
 * 이미지 압축 유틸리티
 * React Quill에서 base64 이미지 크기를 줄이기 위한 압축 함수들
 */

/**
 * base64 이미지를 압축하는 함수
 * @param {string} base64String - 압축할 base64 이미지 문자열
 * @param {number} maxWidth - 최대 너비 (기본값: 1200px)
 * @param {number} maxHeight - 최대 높이 (기본값: 1200px)
 * @param {number} quality - 압축 품질 0-1 (기본값: 0.8)
 * @returns {Promise<string>} 압축된 base64 이미지 문자열
 */
export const compressBase64Image = (base64String, maxWidth = 1200, maxHeight = 1200, quality = 0.8) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      let { width, height } = img;
      
      // 비율 유지하면서 크기 조정
      if (width > height) {
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      // 이미지 그리기
      ctx.drawImage(img, 0, 0, width, height);

      // 압축된 base64 반환
      const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
      resolve(compressedBase64);
    };

    img.src = base64String;
  });
};

/**
 * HTML 콘텐츠 내의 모든 base64 이미지를 압축하는 함수
 * @param {string} htmlContent - HTML 콘텐츠
 * @param {number} maxWidth - 최대 너비
 * @param {number} maxHeight - 최대 높이  
 * @param {number} quality - 압축 품질
 * @returns {Promise<string>} 압축된 이미지가 포함된 HTML 콘텐츠
 */
export const compressImagesInHTML = async (htmlContent, maxWidth = 1200, maxHeight = 1200, quality = 0.8) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const images = doc.querySelectorAll('img[src^="data:image"]');

  for (const img of images) {
    try {
      const originalSrc = img.src;
      const compressedSrc = await compressBase64Image(originalSrc, maxWidth, maxHeight, quality);
      img.src = compressedSrc;
    } catch (error) {
      console.error('이미지 압축 실패:', error);
      // 압축 실패시 원본 이미지 유지
    }
  }

  return doc.body.innerHTML;
};

/**
 * React Quill용 커스텀 이미지 핸들러
 * 이미지 붙여넣기시 자동으로 압축 적용
 */
export const createCompressedImageHandler = (maxWidth = 1200, maxHeight = 1200, quality = 0.8) => {
  return function imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      // 파일 타입 체크
      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.');
        return;
      }

      // 파일 크기 체크 (10MB 제한)
      if (file.size > 10 * 1024 * 1024) {
        alert('파일 크기는 10MB 이하로 제한됩니다.');
        return;
      }

      try {
        // 파일을 base64로 변환
        const base64 = await fileToBase64(file);
        
        // base64 이미지 압축
        const compressedBase64 = await compressBase64Image(base64, maxWidth, maxHeight, quality);
        
        // Quill 에디터에 압축된 이미지 삽입
        const range = this.quill.getSelection();
        this.quill.insertEmbed(range.index, 'image', compressedBase64);
        this.quill.setSelection(range.index + 1);
      } catch (error) {
        console.error('이미지 처리 실패:', error);
        alert('이미지 처리에 실패했습니다. 다시 시도해주세요.');
      }
    };
  };
};

/**
 * File 객체를 base64 문자열로 변환
 * @param {File} file - 변환할 파일
 * @returns {Promise<string>} base64 문자열
 */
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * 이미지 압축률 계산 함수
 * @param {string} originalBase64 - 원본 base64
 * @param {string} compressedBase64 - 압축된 base64
 * @returns {object} 압축 정보
 */
export const getCompressionInfo = (originalBase64, compressedBase64) => {
  const originalSize = originalBase64.length;
  const compressedSize = compressedBase64.length;
  const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
  
  return {
    originalSize: (originalSize / 1024).toFixed(1) + 'KB',
    compressedSize: (compressedSize / 1024).toFixed(1) + 'KB',
    compressionRatio: compressionRatio + '%'
  };
};