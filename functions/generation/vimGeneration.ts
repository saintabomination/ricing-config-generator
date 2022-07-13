import type { VimConfig } from '../../types/configTypes';

const generateVimscriptConfig = (config: VimConfig): string => {
  const currentDate = new Date();
  let resultString = '';

  resultString += `" Generated on ${currentDate.getMonth() + 1}/${currentDate.getDate()}\n\n`;
  resultString += '" Options\n\n';
  if (config.syntax) resultString += 'syntax on\n';
  if (config.number) resultString += 'set number\n';
  if (config.ruler) resultString += 'set ruler\n\n';
  resultString += '" Spacing\n\n';
  resultString += `set tabstop=${config.tabStop}\n`;
  resultString += `set shiftwidth=${config.shiftWidth}\n`;
  resultString += `set softtabstop=${config.softTabStop}\n`;
  if (config.expandTab) resultString += 'set expandtab';

  return resultString;
}

const generateLuaConfig = (config: VimConfig): string => {
  return '';
}

export { generateVimscriptConfig, generateLuaConfig };
