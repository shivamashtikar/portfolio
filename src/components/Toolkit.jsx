import { FaReact, FaJava, FaDocker } from "react-icons/fa";
import { SiHaskell, SiPurescript, SiKubernetes, SiJenkins, SiGooglecloud, SiNixos, SiPython, SiJavascript } from "react-icons/si";

const toolkit = [
  {
    category: "Languages",
    items: [
      { name: "Haskell", icon: <SiHaskell className="text-purple-600" />, desc: "Functional programming, type safety" },
      { name: "PureScript", icon: <SiPurescript className="text-indigo-600" />, desc: "Strongly-typed FP for frontend" },
      { name: "Python", icon: <SiPython className="text-yellow-500" />, desc: "Automation, scripting, ML tooling" },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, desc: "Frontend & backend apps" },
      { name: "Java", icon: <FaJava className="text-red-600" />, desc: "Backend & Android apps" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact className="text-sky-500" />, desc: "Modern web UI development" },
      { name: "Android Native", icon: <FaJava className="text-green-600" />, desc: "Native Android development" },
      { name: "Presto", icon: <SiPurescript className="text-indigo-600" />, desc: "Cross-Platform PureScript Framework" },
      { name: "Streamly", icon: <span className="font-bold">S</span>, desc: "Haskell streaming library" },
    ],
  },
  {
    category: "DevOps & CI/CD",
    items: [
      { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500" />, desc: "Cloud infrastructure & services" },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" />, desc: "Orchestration & scaling" },
      { name: "Docker", icon: <FaDocker className="text-sky-600" />, desc: "Containerization & deployments" },
      { name: "Jenkins", icon: <SiJenkins className="text-red-500" />, desc: "CI/CD automation" },
      { name: "Nix", icon: <SiNixos className="text-sky-500" />, desc: "Reproducible builds & environments" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Pytest", icon: <SiPython className="text-green-500" />, desc: "Unit & integration testing" },
      { name: "Katalon", icon: <span className="font-bold">K</span>, desc: "End-to-end automation" },
    ],
  },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="mb-16 scroll-mt-20">
      <h3 className="text-4xl font-bold text-center mb-12 dark:text-gray-100">Technical Toolkit</h3>
      <div className="max-w-5xl mx-auto grid gap-8">
        {toolkit.map(group => (
          <div key={group.category}>
            <h4 className="text-2xl font-semibold mb-4 dark:text-gray-200">{group.category}</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map(item => (
                <div key={item.name} className="flex items-start space-x-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-md transition">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h5 className="font-bold text-lg dark:text-gray-100">{item.name}</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
