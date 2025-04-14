import Items from "../components/Items";
import Splash from "../components/Splash";
import connectMongoDB from "../config/mongodb";


export default function Home() {
  connectMongoDB();
  
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <Splash />
      </div>
    </main>
  );
}
