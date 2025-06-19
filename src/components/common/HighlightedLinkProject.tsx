const linkMap: Record<string, string> = {
  ViaCEP: 'https://viacep.com.br',
  'OpenWeather API': 'https://openweathermap.org/api',
};

export const highlightLinks = (text: string) => {
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
    return part;
  });
};
