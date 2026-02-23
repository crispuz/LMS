export default function StatCard({ title, value }) {
  return (
    <div className="bg-[#c7d2fe] p-6 rounded-xl shadow-sm">
      <h3 className="text-[#000000] text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}   