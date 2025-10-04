import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/favicon.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Engineer, Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">








              <p className="text-white">
                🚀 Passionate Engineer & Full-Stack Developer, I turn ideas into concrete and high-performance digital solutions.

                💡 Curious and innovative, I explore the bridges between web, mobile, IoT, and artificial intelligence to bring projects to life.
                I have contributed to diverse initiatives, ranging from academic management platforms to real-time solar monitoring systems integrating AI predictive models to anticipate performance and maintenance needs.{" "} <br />
                <span className="font-bold text-white">
                  👉 My playground:
                </span>
                frontend & backend development, building robust APIs, and integrating connected, intelligent, and secure solutions.
              </p>
              <p className="text-white">
                🎯 My approach: combining technical expertise with project management, leading every step — from needs analysis to production — to deliver solutions that create real value and impact. <br />

                ✨ My goal is not just to develop applications, but to create digital experiences that transform daily life.
                Whether for an innovative startup, a company undergoing digital transformation, or an organization seeking to optimize its impact, I deliver solutions that blend performance, simplicity, and forward-thinking vision.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">

                    🤝 Looking to bring an ambitious project to life? Let’s talk!
                    I’m always open to exchanging ideas, exploring collaborations, and contributing to initiatives that make a difference.
                    One message is all it takes to start something big. 🚀
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Fabrino PR , Developer Full-Stack
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Fabrino PR</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
