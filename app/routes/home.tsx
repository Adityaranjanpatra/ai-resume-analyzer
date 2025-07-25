import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "InsightResume" },
    { name: "description", content: "InsightResume is an AI-powered tool that analyzes resumes to extract key information and provide actionable feedback for improved hiring outcomes." },
  ];
}

export default function Home() {
  return <Welcome />;
}
