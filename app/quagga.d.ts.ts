// quagga.d.ts
declare module 'quagga' {
  interface QuaggaConfig {
    inputStream: {
      name?: string;
      type?: string;
      target?: HTMLElement | null;
      constraints?: {
        facingMode?: string;
      };
    };
    decoder: {
      readers?: string[];
    };
  }

  interface QuaggaResult {
    codeResult: {
      code: string;
    };
  }

  function init(config: QuaggaConfig, callback: (err: any) => void): void;
  function start(): void;
  function stop(): void;
  function onDetected(callback: (data: QuaggaResult) => void): void;
  function offDetected(): void;
}