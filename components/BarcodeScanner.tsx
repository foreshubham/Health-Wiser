'use client'
import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga';

// Define the props interface for the BarcodeScanner component
interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onScan }) => {
  const [result, setResult] = useState<string>('');
  const [manualBarcode, setManualBarcode] = useState<string>('');
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if getUserMedia is supported
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('getUserMedia is not supported in this browser');
      return;
    }

    // Initialize QuaggaJS
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: videoRef.current!, // Use the ref to attach the video stream
          constraints: {
            facingMode: 'environment', // Use the rear camera on mobile devices
          },
        },
        decoder: {
          readers: ['ean_reader'], // Specify the barcode formats you want to support
        },
      },
      (err: any) => {
        if (err) {
          console.error('Failed to initialize Quagga:', err);
          return;
        }
        console.log('Quagga initialized successfully');
        Quagga.start();
      }
    );

    // Handle barcode detection
    Quagga.onDetected((data: any) => {
      const barcode = data.codeResult.code;
      setResult(barcode);
      onScan(barcode);
    });

    // Clean up Quagga on component unmount
    return () => {
      Quagga.stop();
      Quagga.offDetected();
    };
  }, [onScan]);

  // Handle manual barcode submission
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualBarcode) {
      setResult(manualBarcode);
      onScan(manualBarcode);
    }
  };

  return (
    <div className="text-center">
      {/* Video stream for barcode scanning */}
      <div ref={videoRef} style={{ width: '100%', height: 'auto' }} />

      {/* Manual barcode input */}
      <form onSubmit={handleManualSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Enter barcode manually"
          value={manualBarcode}
          onChange={(e) => setManualBarcode(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>

      {/* Display the scanned barcode */}
      <p className="mt-4">Scanned Code: {result}</p>
    </div>
  );
};

export default BarcodeScanner;