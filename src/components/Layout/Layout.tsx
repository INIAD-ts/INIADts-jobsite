import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      <SideBar array={[]} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;