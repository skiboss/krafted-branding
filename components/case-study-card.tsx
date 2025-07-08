interface CaseStudyCardProps {
  title: string
  description: string
  metrics: Array<{
    label: string
    value: string
    description: string
  }>
  className?: string
}

export function CaseStudyCard({ title, description, metrics, className = "" }: CaseStudyCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${className}`}>
      {/* Header Badge */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#3730A3] text-white px-4 py-1 rounded-full flex items-center gap-2 transition-all duration-500 opacity-100 translate-y-0">
          <div className="w-2 h-2 bg-red-500 rounded-full border border-blue-300"></div>
          <span className="font-medium text-xs uppercase tracking-wide">CASE STUDY</span>
          <div className="w-2 h-2 bg-red-500 rounded-full border border-blue-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">{metric.label}</div>
              <p className="text-xs text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
