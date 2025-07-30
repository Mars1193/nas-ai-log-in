    // File: src/data/researchData.ts
    export type ResearchCategory = 'AI in Medicine' | 'General AI';

    export interface ResearchPaper {
      id: string; // A unique URL-friendly identifier
      category: ResearchCategory;
      title: string;
      summary: string;
      publishedDate: string;
      htmlContentPath: string; // Path to the HTML file in /public
    }

    export const researchPapers: ResearchPaper[] = [
      {
        id: 'scientific-economic-proof',
        category: 'General AI',
        title: 'The Scientific and Economic Proof of the NAS AI Employee',
        summary: 'The definitive and fortified argument that answers all criticisms and proves the technical feasibility and economic value of our project with data-backed evidence. This is our official statement to the market.',
        publishedDate: 'July 2025',
        htmlContentPath: '/research/general-ai/scientific-economic-proof.html',
      },
      {
        id: 'future-of-on-premise-ai',
        category: 'General AI',
        title: 'The Future of On-Premise AI in Enterprise',
        summary: 'An in-depth analysis of data sovereignty, performance benefits, and the strategic advantages of on-premise AI solutions.',
        publishedDate: 'July 2025',
        htmlContentPath: '/research/general-ai/future-of-on-premise-ai.html',
      },
      {
        id: 'autism-early-detection',
        category: 'AI in Medicine',
        title: 'AI-Powered Early Detection of Autism Spectrum Disorder',
        summary: 'A proof-of-concept demonstrating how machine learning models can identify early markers of ASD from behavioral data.',
        publishedDate: 'June 2025',
        htmlContentPath: '/research/medicine/autism-early-detection.html',
      },
      {
        id: 'adaptive-prompting',
        category: 'General AI',
        title: 'A New Hybrid Model for Adaptive Prompt Engineering',
        summary: 'Introducing a novel approach that combines contextual and historical data to dynamically adapt prompts for more accurate AI responses.',
        publishedDate: 'May 2025',
        htmlContentPath: '/research/general-ai/adaptive-prompting.html',
      },
    ];