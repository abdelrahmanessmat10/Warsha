import { Header } from './components/Header';
import { LeftSidebar } from './components/LeftSidebar';
import { Feed } from './components/Feed';
import './Home.css';

export function Home() {
  return (
    <div className="home-layout">
      <Header />
      <main className="home-content-container">
        <LeftSidebar />
        <Feed />
        {/* Right Sidebar will be slotted here next */}
      </main>
    </div>
  );
}
