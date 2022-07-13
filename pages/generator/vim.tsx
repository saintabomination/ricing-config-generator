import type { FormEvent } from 'react';
import type { NextPage } from 'next'

import DefaultLayout from '../../layouts/DefaultLayout';

const defaultSpacingValue = 2;

const Vim: NextPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
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
        <input type="number" name="tabstop" defaultValue={defaultSpacingValue} /><br />
        <label htmlFor="shiftwidth">Shift width</label>
        <input type="number" name="shiftwidth" defaultValue={defaultSpacingValue} /><br />
        <label htmlFor="softtabstop">Soft tab stop</label>
        <input type="number" name="softtabstop" defaultValue={defaultSpacingValue} /><br />
        <label htmlFor="expandtab">Expand tab</label>
        <input type="checkbox" name="expandtab" />
        <h2>Language</h2>
        <input type="radio" name="language" required />
        <label htmlFor="language">VimScript</label>
        <input type="radio" name="language" required />
        <label htmlFor="language">Lua</label><br /><br />
        <input type="submit" defaultValue="Generate" />
      </form>
      <h2>Result</h2>
      <textarea
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
