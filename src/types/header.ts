export interface NavItem {
  id: string;
  label: string;
  isPrimary?: boolean;
}

export interface HeaderProps {
  scrollToSection: (id: string) => void;
}
