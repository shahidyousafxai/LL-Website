// TruncateString Fn
export function truncateString(text: string, maxWords: number): string {
  const words: string[] = text.split(' ');
  if (words.length <= maxWords) {
    return text;
  }
  const truncatedText: string = words.slice(0, maxWords).join(' ');
  return truncatedText + '...';
}

export const dateFormate = (date: string) => {
  const originalDate = new Date(date);
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const formattedDate = `${
    months[originalDate.getMonth()]
  } ${originalDate.getDate()}, ${originalDate.getFullYear()}`;
  return formattedDate;
};
