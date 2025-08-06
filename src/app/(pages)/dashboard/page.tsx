import Link from "next/link";
import EventPage from "./events/page";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-8"> Dashboard</h1>
      <Link href="/dashboard/events" className="text-[#FD5900] hover:underline">
        Go to Events
      </Link>
    </div>
  );
}
