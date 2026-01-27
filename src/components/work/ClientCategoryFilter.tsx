// src/components/work/ClientCategoryFilter.tsx
"use client";

import { useState } from "react";
import { Row, Button, Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components"; // assume this is ok

// Assume Project type from your utils (or define here)
type Project = {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    images: string[];
    category?: string;
    publishedAt: string;
    team?: Array<{ avatar: string }>;
    link?: string;
  };
  content: string;
};

interface ClientCategoryFilterProps {
  initialProjects: Project[];
}

export default function ClientCategoryFilter({ initialProjects }: ClientCategoryFilterProps) {
  const [currentCategory, setCurrentCategory] = useState<string>("All");

  const categories = [
    "All",
    "UI/UX",
    "Mobile App Development",
    "Website Development",
    "IoT",
  ];

  // Filter on client (no fs needed)
  const filteredProjects = currentCategory === "All"
    ? initialProjects
    : initialProjects.filter(
        (post) => post.metadata.category?.toLowerCase() === currentCategory.toLowerCase()
      );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
  const dateA = new Date(a.metadata.publishedAt).getTime();
  const dateB = new Date(b.metadata.publishedAt).getTime();

  // Jika salah satu tanggal tidak valid, pindahkan ke paling bawah
  if (isNaN(dateA)) return 1;
  if (isNaN(dateB)) return -1;

  return dateB - dateA; // Terbaru ke terlama
});

  return (
    <>
      <Row gap="8" horizontal="center" marginBottom="24">
        {categories.map((category) => (
          <Button
            key={category}
            variant={currentCategory === category ? "primary" : "secondary"}
            size="s"
            onClick={() => setCurrentCategory(category)}
            className={`filter-button ${currentCategory === category ? "active" : ""}`}
          >
            {category}
          </Button>
        ))}
      </Row>

      <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
        {sortedProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
          />
        ))}
      </Column>
    </>
  );
}