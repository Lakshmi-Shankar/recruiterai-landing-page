import Hero from "@/components/hero/Hero";
import Title from "@/components/flows/Title";
import FlowOne from "@/components/flows/FlowOne";
import FlowTwo from "@/components/flows/FlowTwo";
import FlowThree from "@/components/flows/FlowThree";
import BarGraph from "@/components/Charts/BarGraph";
import BottomBar from "@/components/Charts/BottomBar";
import ChartTitle from "@/components/Charts/ChartTitle";
import Track from "@/components/Company/Track";
import FeedbackTitle from "@/components/FeedBacks/FeedbackTitle";
import Feedback from "@/components/FeedBacks/Feedback";
import QuestionTitle from "@/components/FAQ/QuestionTitle";
import Questions from "@/components/FAQ/Questions";
import FooterBar from "@/components/Footer/FooterBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Title />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FlowOne />
            <FlowTwo />
            <FlowThree />
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <ChartTitle />
        <BarGraph />
        <BottomBar />
      </section>

      <section className="py-24 bg-slate-50">
        <Track />
      </section>

      <section className="bg-slate-50">
        <FeedbackTitle />
        <Feedback />
      </section>

      <section className="bg-white pt-16">
        <QuestionTitle />
        <Questions />
      </section>

      <FooterBar />
    </>
  );
}
