// File: src/pages/ResearchDetailPage.tsx
    import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
    import { researchPapers, ResearchPaper } from '@/data/researchData';
    
    const ResearchDetailPage = () => {
      const { id } = useParams<{ id: string }>();
      const [paper, setPaper] = useState<ResearchPaper | null>(null);
      const [htmlContent, setHtmlContent] = useState('');
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const currentPaper = researchPapers.find(p => p.id === id);
        if (currentPaper) {
          setPaper(currentPaper);
          fetch(currentPaper.htmlContentPath)
            .then(response => response.text())
            .then(html => setHtmlContent(html))
            .finally(() => setLoading(false));
        } else {
          setLoading(false);
        }
      }, [id]);

      if (loading) {
        return <div className="text-center p-12">Loading research...</div>;
      }

      if (!paper) {
        return <div className="text-center p-12">Research paper not found.</div>;
      }

      return (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2">{paper.title}</h1>
          <p className="text-slate-400 mb-8">{paper.publishedDate} - {paper.category}</p>
          <div 
            className="prose prose-invert max-w-none" 
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />
        </div>
      );
    };

    export default ResearchDetailPage;