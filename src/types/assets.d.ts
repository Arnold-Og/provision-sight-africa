declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  import type { FunctionComponent, SVGProps } from "react";
  const content: string;
  export default content;
  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
}


