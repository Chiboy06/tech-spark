import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What is the Innovation Club?",
      answer: "The Innovation Club is a vibrant community dedicated to fostering creativity and collaboration in tech and innovation. We organize hackathons, workshops, and training to help individuals explore the latest tools and technologies."
    },
    {
      question: "Do I need any prior experience in tech or innovation to join?",
      answer: "No prior experience is needed! Our club welcomes members of all skill levels, from beginners to experts. We provide resources, workshops, and a supportive environment to help you grow, no matter where you start."
    },
    {
      question: "How can I participate in a hackathon?",
      answer: "Joining a hackathon is simple! Just sign up for upcoming events, form a team (or join one), and start working on solving real-world challenges using innovative tech solutions. You’ll learn, collaborate, and showcase your creativity."
    },
    {
      question: "Do I need any specific tools or software to participate?",
      answer: "While some hackathons or workshops may require specific software or hardware, we make sure to provide clear guidelines in advance. You can always reach out to us for recommendations, or we’ll help you find tools that best fit your skills and interests."
    },
    {
      question: "Can I contribute even if I don’t have technical skills?",
      answer: "Absolutely! Innovation is not just about coding. Whether you're a designer, marketer, or have ideas to share, your contributions are invaluable. We encourage collaboration across different skill sets to bring diverse perspectives to every project."
    }
  ];
  
  
  export function FAQSection() {
    return (
      <section id="faq" className="w-full px-5 lg:px-15 py-20 bg-orange-100">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    )
  }
  
  