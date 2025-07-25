export interface Feature {
  id: string;
  icon: JSX.Element;
  titleKey: string;
  descriptionKey: string;
}

export const features: Feature[] = [
  {
    id: 'feature1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104m-5.891 12.096a3 3 0 01-2.812-2.812c1.148-1.148 2.812-1.148 4 0M9.75 3.104c2.813-2.812 7.365-2.812 10.178 0M9.75 3.104q.412-.413.894-.776M9 14v9a2 2 0 002 2h12a2 2 0 002-2v-9M4 12h16m-2 6v9m0 0h6v-9m-6 0h-12" />
      </svg>
    ),
    titleKey: "fullIntegration",
    descriptionKey: "fullIntegrationDescription",
  },
  {
    id: 'feature2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12.385a4 4 0 01-4 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12.385a4 4 0 004 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a4 4 0 01-4-4V5a2 2 0 014-4h4a2 2 0 012 2v14a2 2 0 01-4 4h-4z" />
      </svg>
    ),
    titleKey: "autonomousExecution",
    descriptionKey: "autonomousExecutionDescription",
  },
  {
    id: 'feature3',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: "localAI",
    descriptionKey: "localAIDescription",
  },
];

export interface UseCase {
  id: string;
  icon: JSX.Element;
  titleKey: string;
  descriptionKey: string;
}

export const useCases: UseCase[] = [
  {
    id: 'useCase1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m-3-3v8m-3 8a9 9 0 116 0M9 14a6 6 0 1112 0M9 14v6m12-6v6M9 14H5.232A2 2 0 004 16v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-1.232-1.968M12 14h.01M9 14h.01" />
      </svg>
    ),
    titleKey: "managementAndExecution",
    descriptionKey: "managementAndExecutionDescription",
  },
  {
    id: 'useCase2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-10M12 21l9-9-9-9-9 9 9 9z" />
      </svg>
    ),
    titleKey: "analysisAndWriting",
    descriptionKey: "analysisAndWritingDescription",
  },
  {
    id: 'useCase3',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m1 4h1m-6 8h2m4 0h2" />
      </svg>
    ),
    titleKey: "supportAndInteraction",
    descriptionKey: "supportAndInteractionDescription",
  },
];

export interface ConceptItem {
  id: string;
  icon: JSX.Element;
  titleKey: string;
  descriptionKey: string;
}

export const conceptItems: ConceptItem[] = [
  {
    id: 'concept1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.893m-5.893 3.746a3 3 0 004.474-1.49 17.5 17.5 0 014.037-9.09A9 9 0 1018.776 3.104" />
      </svg>
    ),
    titleKey: "physicalComputerTitle",
    descriptionKey: "physicalComputerDescription",
  },
  {
    id: 'concept2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    titleKey: "realisticInteractiveInterfaceTitle",
    descriptionKey: "realisticInteractiveInterfaceDescription",
  },
  {
    id: 'concept3',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
    titleKey: "autonomousExecutionTitle",
    descriptionKey: "autonomousExecutionDescription",
  },
];

export interface HowItWorksStep {
  id: string;
  number: string;
  titleKey: string;
  descriptionKey: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 'step1',
    number: "01",
    titleKey: "localModelsTitle",
    descriptionKey: "localModelsDescription",
  },
  {
    id: 'step2',
    number: "02",
    titleKey: "integrationTitle",
    descriptionKey: "integrationDescription",
  },
  {
    id: 'step3',
    number: "03",
    titleKey: "autonomousExecutionTitle",
    descriptionKey: "autonomousExecutionDescription",
  },
  {
    id: 'step4',
    number: "04",
    titleKey: "humanInteractionTitle",
    descriptionKey: "humanInteractionDescription",
  },
];