import styles from './NasAiResearchesPage.module.css';

// You can easily edit your research papers here
const researchesData = [
      {
        title: 'Attention Is All You Need',
        authors: 'Ashish Vaswani, et al.',
        summary: 'This seminal paper introduced the Transformer architecture, a novel network architecture based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.',
        link: 'https://arxiv.org/abs/1706.03762',
      },
      {
        title: 'Mastering the game of Go with deep neural networks and tree search',
        authors: 'David Silver, et al. (DeepMind)',
        summary: 'The paper details AlphaGo, a computer program that combines deep neural networks with advanced tree search to defeat a professional human Go player.',
        link: 'https://www.nature.com/articles/nature16961',
      },
      {
        title: 'Generative Adversarial Networks',
        authors: 'Ian J. Goodfellow, et al.',
        summary: 'Introducing a new framework for estimating generative models via an adversarial process, in which two models are trained simultaneously: a generative model G and a discriminative model D.',
        link: 'https://arxiv.org/abs/1406.2661',
      }
    ];

const NasAiResearchesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>NAS-AI Research</h1>
        <p>Exploring the frontiers of artificial intelligence and machine learning.</p>
      </header>

      <main className={styles.researchesGrid}>
        {researchesData.map((research, index) => (
          <div className={styles.researchCard} key={index}>
            <h3 className={styles.title}>{research.title}</h3>
            <p className={styles.authors}>By: {research.authors}</p>
            <p className={styles.summary}>{research.summary}</p>
            <a href={research.link} target="_blank" rel="noopener noreferrer" className={styles.readMoreButton}>
              Read Paper
            </a>
          </div>
        ))}
      </main>
    </div>
  );
};

export default NasAiResearchesPage;