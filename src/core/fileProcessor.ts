interface ProcessedFile {
  textContent: string;
  pageCount: number;
}

export const processFileUpload = async (file: File): Promise<ProcessedFile> => {
  if (file.type !== 'application/pdf') {
    throw new Error('Invalid file type. Only PDF files are accepted.');
  }

  const maxSize = 50 * 1024 * 1024; // 50MB
  if (file.size > maxSize) {
    throw new Error('File size exceeds the 50MB limit.');
  }

  // Simulate file reading and processing
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    textContent: "محتوى وهمي من ملف PDF",
    pageCount: 10,
  };
};
