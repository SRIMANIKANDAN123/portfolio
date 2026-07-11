import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Manikandan — Software Engineer & MERN Developer" },
      { name: "description", content: "Portfolio of Sri Manikandan — Full Stack MERN developer and Java programmer building premium, futuristic web experiences." },
      { property: "og:title", content: "Sri Manikandan — Software Engineer" },
      { property: "og:description", content: "Full Stack MERN developer, Java programmer, problem solver." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
