import { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar/Navbar';
import Sidebar from '../components/Header/Sidebar/Sidebar';
import { Container } from './LayoutStyles';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Navbar toggleMenu={toggleMenu} />
      <Sidebar toggleMenu={toggleMenu} isOpen={isOpen} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
