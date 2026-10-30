import { Trophy, Circle, X } from "lucide-react";

 const Scoreboard =  ({ score }) => {
  const items = [
    {
      label: "X Wins",
      value: score.xWins,
      icon: <X size={23} />,
      color: "text-indigo-600",
    },
    {
      label: "Draws",
      value: score.draws,
      icon: <Trophy size={21} />,
      color: "text-slate-500",
    },
    {
      label: "O Wins",
      value: score.oWins,
      icon: <Circle size={21} />,
      color: "text-rose-500",
    },
  ];

  return (
    <section className="mb-5 grid grid-cols-3 gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
        >
          <div className={`flex justify-center ${item.color}`}>
            {item.icon}
          </div>
          <p className="mt-2 text-xs text-slate-500">{item.label}</p>
          <p className="mt-1 text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </section>
  );
}

export default Scoreboard