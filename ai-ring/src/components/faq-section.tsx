"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    question: "What is the Health Ring made of?",
    answer: "The Health Ring is crafted from high-quality, hypoallergenic materials including surgical-grade stainless steel with a durable coating for comfort and longevity."
  },
  {
    question: "What health metrics does it track?",
    answer: "The Health Ring tracks various metrics including heart rate, sleep patterns, activity levels, stress levels, and body temperature. All data is synced to our mobile app for comprehensive health monitoring."
  },
  {
    question: "How do I find my ring size?",
    answer: "We offer ring sizes from 7 to 12. You can use our size guide in the product section, or request a free sizing kit that we'll ship to you before your purchase to ensure the perfect fit."
  },
  {
    question: "What's included in the package?",
    answer: "Your Health Ring package includes the ring itself, a charging dock, quick start guide, and a premium storage case for safekeeping."
  },
 
  {
    question: "Can I wear it during workouts?",
    answer: "Absolutely! The Health Ring is designed to be worn 24/7, including during workouts. Its durable construction and sweat-resistant properties make it perfect for any physical activity."
  }
]

export function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-emerald-400/80">
              Everything you need to know about the Health Ring
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-emerald-400/30 rounded-lg px-6 bg-[#132120]/50 backdrop-blur"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 