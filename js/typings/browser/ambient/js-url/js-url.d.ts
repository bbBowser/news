// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/1d345f6c1471fab46b7eb54ebe90013f578c78ca/js-url/js-url.d.ts
// Type definitions for url v1.8.6
// Project: https://github.com/websanova/js-url
// Definitions by: MIZUNE Pine <https://github.com/pine613>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface UrlStatic {
  (): string;
  (pattern: string): string;
  (pattern: number): string;
  (pattern: string, url: string): string;
  (pattern: number, url: string): string;
}

declare var url: UrlStatic;