interface Company {
  name: string;
  position: string;
  period: string;
  descriptions: string[];
}

interface ExperienceProps {
  selectedCompany: Company;
  setSelectedCompany: React.Dispatch<React.SetStateAction<Company>>;
}

export type { Company, ExperienceProps };
