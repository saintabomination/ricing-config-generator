import PageNavigation from '../components/PageNavigation.component';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props): JSX.Element =>
  (
    <>
      <PageNavigation />
      {children}
    </>
  );

export default DefaultLayout;
