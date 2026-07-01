import HighlightedText from './TextHighlighter';

const linkMap: Record<string, string> = {
  'API ViaCEP': 'https://viacep.com.br',
  'API OpenWeather': 'https://openweathermap.org/api',
};

export const highlightLinks = (text: string, highlights: string[] = []) => {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    const cleanPart = part.replace(/\*\*/g, '');
    if (linkMap[cleanPart]) {
      return (
        <a
          key={index}
          href={linkMap[cleanPart]}
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link"
        >
          {cleanPart}
        </a>
      );
    }
    return (
      <HighlightedText
        key={index}
        text={part}
        highlights={highlights}
        highlightClass="project-highlight"
      />
    );
  });
};
