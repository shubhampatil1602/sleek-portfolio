import { IconCode } from "@tabler/icons-react";
import {
  ReactLogo,
  TypeScriptLogo,
  JavaScriptLogo,
  NextLogo,
  TailwindLogo,
  NodeLogo,
  PythonLogo,
  MongodbLogo,
  PostgresLogo,
  GitLogo,
  DockerLogo,
  AwsLogo,
  ReduxLogo,
  MotionLogo,
  UnityLogo,
  CSharpLogo,
  HtmlLogo,
  CssLogo,
  ExpressLogo,
} from "../icons/stack";

export const getLogoFortechnology = (technology: string) => {
  const logoMap: Record<string, React.ReactNode> = {
    React: (
      <ReactLogo className="size-4 shrink-0" color="#06b6d4" stroke={1.5} />
    ),
    TypeScript: (
      <TypeScriptLogo
        className="size-4 shrink-0"
        color="#2563eb"
        stroke={1.5}
      />
    ),
    JavaScript: (
      <JavaScriptLogo
        className="size-4 shrink-0"
        color="#facc15"
        stroke={1.5}
      />
    ),
    "Next.js": (
      <NextLogo className="size-4 shrink-0" color="currentColor" stroke={1.5} />
    ),
    "Tailwind CSS": (
      <TailwindLogo className="size-4 shrink-0" color="#38bdf8" stroke={1.5} />
    ),
    Node: <NodeLogo className="size-4 shrink-0" color="#16a34a" stroke={1.5} />,
    Python: (
      <PythonLogo className="size-4 shrink-0" color="#eab308" stroke={1.5} />
    ),
    MongoDB: (
      <MongodbLogo className="size-4 shrink-0" color="#15803d" stroke={1.5} />
    ),
    Express: <ExpressLogo className="size-4 shrink-0" color="#10b981" />,
    PostgreSQL: <PostgresLogo className="size-4 shrink-0" color="#075985" />,
    Git: <GitLogo className="size-4 shrink-0" color="#f97316" stroke={1.5} />,
    Docker: (
      <DockerLogo className="size-4 shrink-0" color="#3b82f6" stroke={1.5} />
    ),
    AWS: <AwsLogo className="size-4 shrink-0" color="#fb923c" stroke={1.5} />,
    Redux: <ReduxLogo className="size-4 shrink-0" color="#764abc" />,
    Motion: (
      <MotionLogo className="size-4 shrink-0" color="#ec4899" stroke={1.5} />
    ),
    Unity: (
      <UnityLogo
        className="size-4 shrink-0"
        color="currentColor"
        stroke={1.5}
      />
    ),
    CSharp: (
      <CSharpLogo className="size-4 shrink-0" color="#9179E4" stroke={1.5} />
    ),
    HTML: <HtmlLogo className="size-4 shrink-0" color="#e34f26" stroke={1.5} />,
    CSS: <CssLogo className="size-4 shrink-0" color="#264de4" stroke={1.5} />,
  };

  return (
    logoMap[technology] || (
      <IconCode className="size-4 shrink-0" color="currentColor" stroke={1.5} />
    )
  );
};
