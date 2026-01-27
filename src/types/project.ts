export type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

export type ProjectMetadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team?: Team[];
  link?: string;
};

export type ProjectPost = {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
};
