import Link from 'next/link';

const PageNavigation = (): JSX.Element =>
  (
    <nav>
      <h2>Page Navigation</h2>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
      </ul>
    </nav>
  );

export default PageNavigation;
