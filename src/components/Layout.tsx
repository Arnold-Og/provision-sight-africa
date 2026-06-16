import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityToolbar from './AccessibilityToolbar';
import PreorderPopup from './PreorderPopup';
import PreorderBanner from './PreorderBanner';
import { PreorderProvider } from '@/contexts/PreorderContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PreorderProvider>
      <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
          Skip to main content
        </a>
        <Navbar />
        <AccessibilityToolbar />
        <main id="main-content" className="flex-1 pt-16" role="main" tabIndex={-1}>
          <PreorderBanner />
          {children}
        </main>
        <Footer />
        <PreorderPopup />
      </div>
    </PreorderProvider>
  );
};

export default Layout;
