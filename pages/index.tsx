import Link from 'next/link';

import type { NextPage } from 'next'

import DefaultLayout from '../layouts/DefaultLayout';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <h1>Initial Commit!</h1>
      <h2>Generators</h2>
      <ul>
        <li><Link href="/generator/vim">Vim</Link></li>
        <li><Link href="/generator/i3">i3</Link></li>
      </ul>
    </DefaultLayout>
  );
}

export default Home;
