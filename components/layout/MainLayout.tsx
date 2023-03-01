import { ReactNode, ReactElement } from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export interface Props {
  children: ReactNode;
}

export default function MainLayout(props: Props): ReactElement {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-white">
      <Header />

      <div className="grow">{props.children}</div>

      <Footer />
    </div>
  );
}
