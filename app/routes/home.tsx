import Navbar from "~/components/Navbar";
import type {Route} from "./+types/home";
import {title} from "process";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "ProfilePolish"},
    {
      name: "description",
      content: "Smart Feedback for your dream job resume..",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-center min-h-screen">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-Powered feedback</h2>
        </div>
      </section>
    </main>
  );
}
