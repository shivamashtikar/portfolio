import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
import {useEffect} from 'react'
import {scroller} from 'react-scroll'
import Toolkit from './components/Toolkit'
import Tooltip from './components/Tooltip'
import Header from './components/Header'
import Hero from './components/Hero'
// import Projects from './components/Projects'

function App() {
  useEffect(() => {
    scroller.scrollTo("hero", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <div className="bg-gray-50 text-gray-800 font-sans leading-normal tracking-normal dark:bg-gray-900 dark:text-gray-200">
    <Header/>
    <Hero/>

      {/* Main Content */}
      <main id="content" className="container max-w-screen-lg mx-auto px-6 py-12 scroll-mt-20">

        {/* What I Do */}
        <section id="what-i-do" className="mb-24">
          <h3 className="text-4xl font-bold text-center mb-8 dark:text-gray-100">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 dark:text-gray-100">Backend & Frontend</h4>
              <p className="dark:text-gray-300">Architect and develop systems with a focus on scalability and performance.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 dark:text-gray-100">Team Leadership</h4>
              <p className="dark:text-gray-300">Lead cross-functional teams and provide technical mentorship to developers.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 dark:text-gray-100">Hands-On Coding</h4>
              <p className="dark:text-gray-300">Actively involved in coding, debugging, and tuning software systems.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 dark:text-gray-100">Infrastructure & Automation</h4>
              <p className="dark:text-gray-300">Build infrastructure automation tools, payment systems, and data engineering pipelines.</p>
            </div>
          </div>
        </section>

        {/* Technical Toolkit */}
        <Toolkit/>


        {/* Experience */}
        <section id="experience" className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-8 dark:text-gray-100">Experience</h3>
          <div className="flex justify-center">
            <div className="border-l-4 border-blue-500 pl-8 space-y-12">
              {/* Juspay */}
              <div className="relative">
                <div className="absolute -left-10 bg-blue-500 h-4 w-4 rounded-full"></div>
                <h4 className="text-2xl font-semibold dark:text-gray-100">SDE II @ <a href="https://juspay.io/in" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Juspay</a></h4>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-2">Mar 2023 – Present</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Led cross-functional teams to deliver and maintain the Xyne open-source platform and Euler Dashboard.</li>
                  <li>Deployed on-premise LLM solutions using Ollama, vLLM, and SGLang on GPU infrastructure.</li>
                  <li>Architected and built a RAG system with VespaDB and Postgres.</li>
                  <li>Managed scalable DevOps infrastructure on AWS/GCP.</li>
                  <li>Reduced production bugs by 90% with canary deployments and pioneered trunk-based development.</li>
                  <li>Lead team while integrating Slack API, OAuth 2.0, and Passkey for enhanced functionality.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-10 bg-blue-500 h-4 w-4 rounded-full"></div>
                <h4 className="text-2xl font-semibold dark:text-gray-100">SDE I @ <a href="https://juspay.io/in" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Juspay</a></h4>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-2">Jun 2021 – Mar 2023</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Spearheaded onboarding for interns and new managers.</li>
                  <li>Reduced Purescript compile time 6x, improving delivery speed.</li>
                  <li>Built a DevTools app for payment flow testing and CI/CD improvements.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-10 bg-blue-500 h-4 w-4 rounded-full"></div>
                <h4 className="text-2xl font-semibold dark:text-gray-100">Associate SDE @ <a href="https://juspay.io/in" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Juspay</a></h4>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-2">Jul 2019 – Jun 2021</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Improved Android app render time by 66% with pre-rendering.</li>
                  <li>Key role in data pipeline migration to Haskell using Streamly.</li>
                  <li>Built a Haskell-based alternative to Fluentd for Kubernetes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="text-center">
          <h3 className="text-4xl font-bold mb-4 dark:text-gray-100">Education</h3>
          <p className="text-xl font-semibold dark:text-gray-100">Bachelor of Engineering in Computer Engineering</p>
          <p className="text-lg text-gray-600 dark:text-gray-300">Pune University – Govt. College of Engineering and Research, Avasari(kd)</p>
          <p className="text-md text-gray-500 dark:text-gray-400">CGPA: 8.06 | 2015 – 2019</p>
        </section>
      </main>

      {/* Chatbot FAB */}
    {/*
      <div className="fixed bottom-8 right-8">
        <Tooltip text="Chat with my AI assistant!" position="top">
          <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />
          </button>
        </Tooltip>
      </div>
    */}

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-16 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-300">
          <p>Always curious, always building — let's connect!</p>
          <p>
          <a
    href="mailto:&#108;&#105;&#103;&#104;&#116;&#110;&#105;&#110;&#103;&#115;&#104;&#105;&#118;&#97;&#109;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
    className="text-blue-600 dark:text-blue-400 hover:underline"
    onClick={(e) => {
      e.preventDefault();
      window.open("mailto:&#108;&#105;&#103;&#104;&#116;&#110;&#105;&#110;&#103;&#115;&#104;&#105;&#118;&#97;&#109;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;", "_blank");
    }}
    dangerouslySetInnerHTML={{
      __html: '&#108;&#105;&#103;&#104;&#116;&#110;&#105;&#110;&#103;&#115;&#104;&#105;&#118;&#97;&#109;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
    }}
  />         </p>
        </div>
      </footer>
    </div>
  )
}

export default App
