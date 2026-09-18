import { Header } from './components/Header';
import { LeftSidebar } from './components/LeftSidebar';
import './Home.css';

export function Home() {
  return (
    <div className="home-layout">
      <Header />
      <main className="home-content-container">
        <LeftSidebar />
        {/* Center Feed and Right Sidebar will be slotted here next */}
      </main>
    </div>
  );
}
