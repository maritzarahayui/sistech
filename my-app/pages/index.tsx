import { Button, Card, CardListContainer, NavbarContainer, Footer } from "../components";
import { useRef } from "react";

export default function Page() {
  const cardListRef = useRef<HTMLDivElement>(null);

  const scrollToCardList = () => {
    if (cardListRef.current) {
      cardListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-lightPink min-h-screen">
      <NavbarContainer />
      
      <section id="home" className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.inews.co.id/media/600/files/inews_new/2023/01/17/contoh_my_study_habits.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10">
          <h1>Unlock Your Potential Anytime, Anywhere</h1>
          <p>Access a world of knowledge at your fingertips. Dive into courses designed to inspire and elevate your skills.</p>
          <Button onClick={scrollToCardList}>Start Your Journey</Button>
        </div>
      </section>

      <section id="about" ref={cardListRef} className="about-us py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-pink font-bold">About Us</h2>
          <p className="text-lg text-dark">
            Welcome to our e-learning platform, where knowledge meets accessibility. Our mission is to provide learners worldwide with the tools they need to succeed. Whether you are a student, a professional, or simply curious, our courses are designed to cater to all learning levels and interests.
          </p>
          <p className="text-lg text-dark">
            Join us on a journey of growth and discovery, as we empower individuals to learn at their own pace, on their own terms. Our expert instructors and comprehensive course offerings make it easy to dive deep into new subjects and build the skills that matter most.
          </p>
        </div>
      </section>

      <section id="courses" className="courses">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-pink font-bold">Courses</h2>
        </div>

        <div><CardListContainer /></div>
      </section>

      <div><Footer /></div>
    </div>
  );
}