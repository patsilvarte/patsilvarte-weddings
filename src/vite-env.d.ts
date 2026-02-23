/// <reference types="vite/client" />

declare module "*.jpg?w=*" {
  const src: string[];
  export default src;
}

declare module "*.png?w=*" {
  const src: string[];
  export default src;
}

declare module "*?w=320;480;768;1024;1600;2200&format=webp" {
  const src: string[];
  export default src;
}
