export interface sectionDetails {
  org: string;
  orgLink?: string;
  date: string;
  position: string[];
  skills?: string[][];
  description?: (string | React.ReactNode)[][];
  icon?: string;
  link?: { [key: string]: string };
}
