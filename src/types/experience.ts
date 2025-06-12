export interface Company {
  id: number;
  name: string;
  position: string;
  period: string;
  descriptions: string[];
}

export type CompanyList = Company[];

export interface ExperienceProps {
  selectedCompany: Company;
  setSelectedCompany: React.Dispatch<React.SetStateAction<Company>>;
}
