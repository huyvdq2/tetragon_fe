export interface RoutesType {
  path: string;
  element: React.ReactNode;
  layout?: React.ReactNode;
  guard?: React.ReactNode;
  children?: RoutesType[];
}
