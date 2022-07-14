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

  switch (config.plugin) {
    case 'vimplug':
      resultString += '\n" VimPlug\n';
      resultString += 'call plug#begin()\n\n';
      resultString += 'call plug#end()';
      break;
  }

  return resultString;
}

const generateLuaConfig = (config: VimConfig): string => {
  const currentDate = new Date();
  let resultString = '';

  resultString += `-- Generated on ${currentDate.getMonth() + 1}/${currentDate.getDate()}\n\n`;
  resultString += '-- Options\n\n';
  if (config.syntax) resultString += `vim.opt.syntax = 'on';\n`;
  if (config.number) resultString += `vim.opt.number = true;\n`;
  if (config.ruler) resultString += `vim.opt.ruler = true;\n\n`;
  resultString += '-- Spacing\n\n';
  resultString += `vim.opt.tabstop = ${config.tabStop};\n`;
  resultString += `vim.opt.shiftwidth = ${config.shiftWidth};\n`;
  resultString += `vim.opt.softtabstop = ${config.softTabStop};\n`;
  if (config.expandTab) resultString += 'vim.opt.expandtab = true;';

  switch (config.plugin) {
    case 'vimplug':
      resultString += '\n-- VimPlug\n';
      resultString += `local Plug = vim.fn['plug#'];\n`;
      resultString += `vim.call('plug#begin');\n\n`;
      resultString += `vim.call('plug#end');`;
      break;
  }

  return resultString;
}

export { generateVimscriptConfig, generateLuaConfig };
