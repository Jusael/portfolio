export type Project = {
  projectId: string;
  title: string;
  subTitle: string;
  desc: string[];
  tech: string[];
  image: string;
};

export type ProjectDetail = {
  projectId: string;
  gif: string;
  architecture: string;
  summary: string[];
  techDetail: string[];
    notionDocs? : NotionDoc[];
};

export type NotionDoc = {
  title: string;
  url: string;
};