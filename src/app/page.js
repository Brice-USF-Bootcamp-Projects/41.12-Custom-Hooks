// src/app/page.js

import CardTable from "./components/CardTable/CardTable";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">React Box App</h1>
      <CardTable />
    </div>
  );
}