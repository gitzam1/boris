'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Item from './Item';
import Searchbar from './Searchbar';
import './Items.css';

interface Report {
  _id: string;
  userId: string;
  ticker: string;
  logoURL: string;
  description: string;
  notes: string;
  createdAt: string;
}

const Items = () => {
  const [stockItems, setStockItems] = useState<Report[]>([]);
  const { data: session, status } = useSession();
  const router = useRouter();

  // Fetch user's reports from backend
  useEffect(() => {
    const fetchReports = async () => {
      if (status === 'authenticated' && session?.user?.id) {
        try {
          const res = await fetch(`/api/report?userId=${session.user.id}`);
          const data = await res.json();
          setStockItems(data);
        } catch (err) {
          console.error('Error fetching reports:', err);
        }
      }
    };

    fetchReports();
  }, [status, session]);

  const handleAddItem = (newItem: Report) => {
    setStockItems(prevItems => [...prevItems, newItem]);
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  return (
    <section className="items-section">
      <div className="searchbar-wrapper">
        <Searchbar handleSearch={handleAddItem} />
      </div>
      <div className="items-container">
        {stockItems.length === 0 ? (
          <p>No stocks in portfolio.</p>
        ) : (
          <div className="items-grid">
            {stockItems.map((item) => (
              <Item key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Items;
