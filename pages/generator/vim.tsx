import { useRef } from 'react';

import type { FormEvent } from 'react';
import type { NextPage } from 'next'

import DefaultLayout from '../../layouts/DefaultLayout';
import { generateVimscriptConfig, generateLuaConfig } from '../../functions/generation/vimGeneration';

import type { VimConfig } from '../../types/configTypes';

const defaultSpacingValue = 2;

const Vim: NextPage = () => {
  const resultRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const config: VimConfig = {
      syntax: target.syntax.checked,
      number: target.number.checked,
      ruler: target.ruler.checked,
      tabStop: target.tabstop.value,
      shiftWidth: target.shiftwidth.value,
      softTabStop: target.softtabstop.value,
      expandTab: target.expandtab.checked,
      plugin: target.plugin.value,
    };

    if (resultRef.current) {
      const language = target.language.value;
      let result = '';

      switch (language) {
        case 'vimscript':
          result = generateVimscriptConfig(config);
          break;

        case 'lua':
          result = generateLuaConfig(config);
          break;
      }

      resultRef.current.value = result;
    }
  }

  return (
    <DefaultLayout>
      <h1>Vim</h1>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <h2>Options</h2>
        <label htmlFor="syntax">Syntax</label>
        <input type="checkbox" name="syntax" /><br />
        <label htmlFor="syntax">Line numbers</label>
        <input type="checkbox" name="number" /><br />
        <label htmlFor="syntax">Ruler</label>
        <input type="checkbox" name="ruler" /><br/>
        <h2>Spacing</h2>
        <label htmlFor="tabstop">Tab stop</label>
        <input type="number" name="tabstop" defaultValue={defaultSpacingValue} required /><br />
        <label htmlFor="shiftwidth">Shift width</label>
        <input type="number" name="shiftwidth" defaultValue={defaultSpacingValue} required /><br />
        <label htmlFor="softtabstop">Soft tab stop</label>
        <input type="number" name="softtabstop" defaultValue={defaultSpacingValue} required /><br />
        <label htmlFor="expandtab">Expand tab</label>
        <input type="checkbox" name="expandtab" />
        <h2>Plugin Manager</h2>
        <select name="plugin">
          <option value="none">None</option>
          <option value="vimplug">VimPlug</option>
        </select>
        <h2>Language</h2>
        <input type="radio" name="language" value="vimscript" required />
        <label htmlFor="language">VimScript</label>
        <input type="radio" name="language" value="lua" required />
        <label htmlFor="language">Lua</label><br /><br />
        <input type="submit" defaultValue="Generate" />
      </form>
      <h2>Result</h2>
      <textarea
        ref={resultRef}
        name="result"
        cols={60}
        rows={20}
        style={{
          resize: 'none',
        }}
        readOnly
      ></textarea>
    </DefaultLayout>
  );
}

export default Vim;
