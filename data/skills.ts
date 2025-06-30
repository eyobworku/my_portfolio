export interface Skill {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // Type for React SVG component
}

// Import your icon components here
import NodeJsIcon from '@/components/icons/NodeJsIcon';
import ExpressJsIcon from '@/components/icons/ExpressJsIcon';
import MongoDbIcon from '@/components/icons/MongoDbIcon';
import PythonIcon from '@/components/icons/PythonIcon';
import JavaScriptIcon from '@/components/icons/JavaScriptIcon';
import TypeScriptIcon from '@/components/icons/TypeScriptIcon';
import NextJsIcon from '@/components/icons/NextJsIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import PostgreSqlIcon from '@/components/icons/PostgreSqlIcon';
import DockerIcon from '@/components/icons/DockerIcon';
import GitIcon from '@/components/icons/GitIcon';
import TelegramBotApiIcon from '@/components/icons/TelegramIcon';
import RestApiIcon from '@/components/icons/RestApiIcon';


export const skillsData: Skill[] = [
  { id: "nodejs", name: "Node.js", icon: NodeJsIcon },
  { id: "expressjs", name: "Express.js", icon: ExpressJsIcon },
  { id: "mongodb", name: "MongoDB", icon: MongoDbIcon },
  { id: "python", name: "Python", icon: PythonIcon },
  { id: "javascript", name: "JavaScript", icon: JavaScriptIcon },
  { id: "typescript", name: "TypeScript", icon: TypeScriptIcon },
  { id: "nextjs", name: "Next.js", icon: NextJsIcon },
  { id: "react", name: "React", icon: ReactIcon },
  { id: "postgresql", name: "PostgreSQL", icon: PostgreSqlIcon },
  // { id: "docker", name: "Docker", icon: DockerIcon },
  { id: "git", name: "Git", icon: GitIcon },
  { id: "telegrambot", name: "Telegram Bot API", icon: TelegramBotApiIcon },
  { id: "restapis", name: "REST APIs", icon: RestApiIcon },
];