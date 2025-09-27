import { FaReact, FaJava, FaDocker, FaAws } from "react-icons/fa";
import { SiHaskell, SiPurescript, SiKubernetes, SiJenkins, SiGooglecloud, SiNixos, SiPython, SiJavascript, SiPostgresql, SiPrometheus, SiGrafana } from "react-icons/si";

const toolkit = [
  {
    category: "Languages",
    items: [
      { name: "Haskell", icon: <SiHaskell className="text-purple-600" />, desc: "Functional programming, type safety", link: "https://www.haskell.org/" },
      { name: "PureScript", icon: <SiPurescript className="text-indigo-600" />, desc: "Strongly-typed FP for frontend", link: "https://www.purescript.org/" },
      { name: "Python", icon: <SiPython className="text-yellow-500" />, desc: "Automation, scripting, ML tooling", link: "https://www.python.org/" },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, desc: "Frontend & backend apps", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Java", icon: <FaJava className="text-red-600" />, desc: "Backend & Android apps", link: "https://www.java.com/" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact className="text-sky-500" />, desc: "Modern web UI development", link: "https://react.dev/" },
      { name: "Android Native", icon: <FaJava className="text-green-600" />, desc: "Native Android development", link: "https://developer.android.com/" },
      { name: "Presto", icon: <SiPurescript className="text-indigo-600" />, desc: "Cross-Platform PureScript Framework", link: "https://github.com/juspay/purescript-presto" },
      { name: "Streamly", icon: <span className="font-bold">S</span>, desc: "Haskell streaming library", link: "https://streamly.composewell.com/" },
    ],
  },
  {
    category: "Databases",
    items: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, desc: "Relational database", link: "https://www.postgresql.org/" },
        { name: "Vespa", icon: <span className="font-bold">V</span>, desc: "Vector database for AI", link: "https://vespa.ai/" },
    ]
  },
  {
    category: "DevOps, Cloud & CI/CD",
    items: [
      { name: "AWS", icon: <FaAws className="text-orange-500" />, desc: "Cloud infrastructure & services", link: "https://aws.amazon.com/" },
      { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500" />, desc: "Cloud infrastructure & services", link: "https://cloud.google.com/" },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" />, desc: "Orchestration & scaling", link: "https://kubernetes.io/" },
      { name: "Docker", icon: <FaDocker className="text-sky-600" />, desc: "Containerization & deployments", link: "https://www.docker.com/" },
      { name: "Jenkins", icon: <SiJenkins className="text-red-500" />, desc: "CI/CD automation", link: "https://www.jenkins.io/" },
      { name: "Nix", icon: <SiNixos className="text-sky-500" />, desc: "Reproducible builds & environments", link: "https://nixos.org/" },
    ],
  },
  {
    category: "Monitoring",
    items: [
        { name: "Grafana", icon: <SiGrafana className="text-orange-500" />, desc: "Visualization and analytics", link: "https://grafana.com/" },
        { name: "Prometheus", icon: <SiPrometheus className="text-orange-600" />, desc: "Metrics and alerting", link: "https://prometheus.io/" },
        { name: "Loki", icon: <SiGrafana className="text-orange-500" />, desc: "Log aggregation", link: "https://grafana.com/oss/loki/" },
        { name: "Promtail", icon: <SiGrafana className="text-orange-500" />, desc: "Log agent for Loki", link: "https://grafana.com/docs/loki/latest/send-data/promtail/" },
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
        { name: "Ollama", icon: <span className="font-bold">O</span>, desc: "Local LLM serving", link: "https://ollama.com/" },
        { name: "vLLM", icon: <span className="font-bold">v</span>, desc: "High-throughput LLM serving", link: "https://vllm.ai/" },
        { name: "SGLang", icon: <span className="font-bold">S</span>, desc: "Structured Generation Language", link: "https://github.com/sgl-project/sglang" },
    ]
  },
  {
    category: "Testing",
    items: [
      { name: "Pytest", icon: <SiPython className="text-green-500" />, desc: "Unit & integration testing", link: "https://pytest.org/" },
      { name: "Katalon", icon: <span className="font-bold">K</span>, desc: "End-to-end automation", link: "https://katalon.com/" },
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
                <a href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-start space-x-3 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-md transition h-full">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-lg dark:text-gray-100">{item.name}</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
