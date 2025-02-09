"use client"

interface StepIndicatorProps {
  currentStep: number
  steps: number
}


export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: steps }).map((_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              index + 1 === currentStep
                ? "bg-emerald-400 text-black"
                : index + 1 < currentStep
                  ? "bg-emerald-400/20 text-white"
                  : "bg-white/10 text-white"
            }`}
          >
            {index + 1}
          </div>
          {index < steps - 1 && (
            <div className={`ml-2 h-[2px] w-16 ${index + 1 < currentStep ? "bg-emerald-400" : "bg-white/10"}`} />
          )}
        </div>
      ))}
    </div>
  )
}

