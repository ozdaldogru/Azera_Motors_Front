import React from 'react';

interface PdfModalProps {
  pdfUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const PdfModal: React.FC<PdfModalProps> = ({ pdfUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl p-4 rounded-lg">
        <button onClick={onClose} className="text-black float-right">Close</button>
        <iframe
          src={`${pdfUrl}#toolbar=0`}
          className="w-full h-[80vh]"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default PdfModal;