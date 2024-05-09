import StuntingChart from "@/components/pages/landing-page/StuntingChart";
import ContactForm from "@/components/pages/landing-page/ContactForm";
import ExpertsSay from "@/components/pages/landing-page/ExpertSays";
import Hero from "@/components/pages/landing-page/Hero";
import Statistics from "@/components/pages/landing-page/Statistics";
import VerticalTimeline from "@/components/pages/landing-page/Timeline";

export default function Home() {
  return (
    <div>
      <Hero />
      <Statistics />
      <VerticalTimeline />
      <StuntingChart />
      <ExpertsSay />
      <ContactForm />
    </div>
  )
}
