import * as remark from 'remark';
import type { VFileCompatible } from 'vfile';
import html from 'remark-html';

export const markdownToHtml = async (markdown: VFileCompatible): Promise<string> => {
  const result = await remark.remark().use(html).process(markdown);
  return result.toString();
};
