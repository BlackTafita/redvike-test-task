import { ParserOptionsArgs, parseString } from '@fast-csv/parse';

export async function parseCsvString(
  csvString: string,
  options: ParserOptionsArgs = { headers: true, delimiter: ';' },
): Promise<{ [key: string]: string }[]> {
  return new Promise((resolve, reject) => {
    const result: { [key: string]: string }[] = [];
    parseString(csvString, options)
      .on('error', (error) => {
        console.error(error);
        reject(error);
      })
      .on('data', (row) => result.push(row))
      .on('end', () => {
        resolve(result);
      });
  });
}
