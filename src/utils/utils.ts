export const extractParagraphs = (html:string) => {
  const regex = /<p>(.*?)<\/p>/g; // Регулярное выражение для поиска тегов <p>
  let matches;
  const paragraphs = [];

  while ((matches = regex.exec(html)) !== null) {
    paragraphs.push(matches[1]); // Добавляем текст между тегами <p> в массив
  }

  return paragraphs.join(' '); // Возвращаем массив с текстами
};
