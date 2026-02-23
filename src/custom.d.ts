declare module "*.HEIC" {
  const value: string;
  export default value;
}

// Added support for image imports with query parameters and formats
declare module "*.jpg?w=*" {
  const src: string;
  export default src;
}

declare module "*.png?w=*" {
  const src: string;
  export default src;
}

declare module "*.svg?w=*" {
  const src: string;
  export default src;
}

declare module "*.jpg?webp" {
  const src: string;
  export default src;
}

declare module "*.png?webp" {
  const src: string;
  export default src;
}

declare module "*.svg?webp" {
  const src: string;
  export default src;
}
