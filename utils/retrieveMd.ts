import * as fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const getDir = (dir: string): string[] => {
  return fs.readdirSync(join(join(process.cwd(), 'data'), dir));
};

const retrieveFile = <D extends MarkdownData<D>>(dirName: string, file: string) => {
  const realFile = file.replace(/\.md$/, '');
  const fullPath = join(join(join(process.cwd(), 'data'), dirName), file);

  const fileContent = fs.readFileSync(fullPath, 'utf-8');

  const { data, content } = matter(fileContent);

  return { ...data, content };
};

type PropertyMap<D> = { [key in keyof D]: string };

interface Content {
  content: string;
}

type MarkdownData<D> = PropertyMap<D> & Content;
export const retrieveMd = <D extends Record<string, unknown>>(dirName: string) => {
  const dirFiles = getDir(dirName);

  return dirFiles.map((file) => retrieveFile(dirName, file));
};
