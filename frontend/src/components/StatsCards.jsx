function StatsCards({ documents }) {
  const totalDocuments = documents.length;

  const highRiskDocuments = documents.filter(
    (doc) => doc.risks.length > 0
  ).length;

  const documentsWithRecommendations = documents.filter(
    (doc) => doc.recommendations.length > 0
  ).length;

  // Placeholder until we implement expiry date extraction properly
  const expiringSoon = 0;

  const stats = [
    {
      title: "Total Documents",
      value: totalDocuments,
      color: "text-indigo-600",
    },
    {
      title: "High Risk",
      value: highRiskDocuments,
      color: "text-red-600",
    },
    {
      title: "Expiring Soon",
      value: expiringSoon,
      color: "text-orange-500",
    },
    {
      title: "AI Recommendations",
      value: documentsWithRecommendations,
      color: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
        >
          <p className="text-sm text-slate-500">{stat.title}</p>

          <h2 className={`text-4xl font-bold mt-3 ${stat.color}`}>
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;