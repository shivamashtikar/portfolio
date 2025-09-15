import github from '/github-mark.svg'
import linkedin from '/LI-In-Bug.png'
import {ArrowDownTrayIcon, ChatBubbleOvalLeftEllipsisIcon} from '@heroicons/react/24/solid'
import Tooltip from './components/Tooltip'

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans leading-normal tracking-normal">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Shivam Ashtikar</h1>
          <div className="flex items-center space-x-4">
            <Tooltip text="GitHub" position="bottom">
              <a href="https://github.com/shivamashtikar" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="h-8 w-8 hover:opacity-75 transition"/>
              </a>
            </Tooltip>
            <Tooltip text="LinkedIn" position="bottom">
              <a href="https://www.linkedin.com/in/shivamashtikar" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="h-8 w-8 hover:opacity-75 transition"/>
              </a>
            </Tooltip>
            <Tooltip text="Download Resume" position="bottom">
              <a href="./resume/Shivam_Ashtikar_Resume.pdf" download>
                <ArrowDownTrayIcon className="h-8 w-8 text-blue-600 hover:text-blue-800 transition"/>
              </a>
            </Tooltip>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
        {/* Introduction */}
        <section id="about" className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Hi, I'm Shivam Ashtikar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate and experienced Software Development Engineer with over 6 years of hands-on expertise in building high-performance, scalable software systems. Currently innovating at Juspay as an SDE II.
          </p>
        </section>

        {/* What I Do */}
        <section id="what-i-do" className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-8">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Backend & Frontend</h4>
              <p>Architect and develop systems with a focus on scalability and performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Team Leadership</h4>
              <p>Lead cross-functional teams and provide technical mentorship to developers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Hands-On Coding</h4>
              <p>Actively involved in coding, debugging, and tuning software systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Infrastructure & Automation</h4>
              <p>Build infrastructure automation tools, payment systems, and data engineering pipelines.</p>
            </div>
          </div>
        </section>

        {/* Technical Toolkit */}
        <section id="toolkit" className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-8">Technical Toolkit</h3>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center flex-wrap gap-4">
              {['Haskell', 'PureScript', 'Python', 'JavaScript', 'Java', 'React', 'Android Native', 'Streamly', 'Kubernetes', 'Docker', 'Jenkins', 'Pytest', 'Katalon'].map(skill => (
                <span key={skill} className="bg-blue-100 text-blue-800 text-lg font-semibold px-4 py-2 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-8">Experience</h3>
          <div className="border-l-4 border-blue-500 pl-8 space-y-12">
            {/* Juspay */}
            <div className="relative">
              <div className="absolute -left-10 bg-blue-500 h-4 w-4 rounded-full"></div>
              <h4 className="text-2xl font-semibold">SDE II @ Juspay</h4>
              <p className="text-md text-gray-500 mb-2">Mar 2023 – Present</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Led the Euler Dashboard team, integrating features like Slack API, OAuth 2.0, and Passkey.</li>
                <li>Achieved 90% reduction in production bugs via canary deployments.</li>
                <li>Pioneered trunk-based development to boost release cycles.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-10 bg-blue-500 h-4 w-4 rounded-full"></div>
              <h4 className="text-2xl font-semibold">SDE I @ Juspay</h4>
              <p className="text-md text-gray-500 mb-2">Jun 2021 – Mar 2023</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Spearheaded onboarding for interns and new managers.</li>
                <li>Reduced Purescript compile time 6x, improving delivery speed.</li>
                <li>Built a DevTools app for payment flow testing and CI/CD improvements.</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-10 bg-blue-500 h-4 w-4 rounded-full"></div>
              <h4 className="text-2xl font-semibold">Associate SDE @ Juspay</h4>
              <p className="text-md text-gray-500 mb-2">Jul 2019 – Jun 2021</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Improved Android app render time by 66% with pre-rendering.</li>
                <li>Key role in data pipeline migration to Haskell using Streamly.</li>
                <li>Built a Haskell-based alternative to Fluentd for Kubernetes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="text-center">
          <h3 className="text-4xl font-bold mb-4">Education</h3>
          <p className="text-xl font-semibold">Bachelor of Engineering in Computer Engineering</p>
          <p className="text-lg text-gray-600">Pune University – Govt. College of Engineering and Research, Avasari(kd)</p>
          <p className="text-md text-gray-500">CGPA: 8.06 | 2015 – 2019</p>
        </section>
      </main>

      {/* Chatbot FAB */}
      <div className="fixed bottom-8 right-8">
        <Tooltip text="Chat with my AI assistant!" position="top">
          <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />
          </button>
        </Tooltip>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-16 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>Always curious, always building — let's connect!</p>
          <p>lightningshivam@gmail.com</p>
        </div>
      </footer>
    </div>
  )
}

export default App