import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
}

const SITE_TITLE = "中国古代建筑艺术与科技融合";
const DEFAULT_DESCRIPTION =
  "以礼制、结构、工艺、空间与保护为线索，重新阅读中国古代建筑的文化内核与技术智慧。";

function ensureNamedMeta(name: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.append(tag);
  }

  return tag;
}

function ensurePropertyMeta(property: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.append(tag);
  }

  return tag;
}

export default function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = title === SITE_TITLE ? title : `${title} | ${SITE_TITLE}`;
    const normalizedDescription = description.trim() || DEFAULT_DESCRIPTION;

    document.title = fullTitle;

    ensureNamedMeta("description").setAttribute("content", normalizedDescription);
    ensureNamedMeta("theme-color").setAttribute("content", "#0a1011");
    ensurePropertyMeta("og:type").setAttribute("content", "website");
    ensurePropertyMeta("og:locale").setAttribute("content", "zh_CN");
    ensurePropertyMeta("og:site_name").setAttribute("content", SITE_TITLE);
    ensurePropertyMeta("og:title").setAttribute("content", fullTitle);
    ensurePropertyMeta("og:description").setAttribute("content", normalizedDescription);
  }, [description, title]);
}

export { DEFAULT_DESCRIPTION, SITE_TITLE };
