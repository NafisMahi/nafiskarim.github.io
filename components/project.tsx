"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "@/lib/data";
import { useTheme } from "@/lib/hooks";

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  imageUrlDark,
  githubUrl,
  websiteUrl,
}: ProjectProps) {
  const { theme } = useTheme();
  const image = theme === "dark" && imageUrlDark ? imageUrlDark : imageUrl;

  return (
    <article className="flex flex-col rounded-lg border border-rule bg-card overflow-hidden transition-colors hover:border-accent/60">
      {image && (
        <Image
          src={image}
          alt={title}
          className="aspect-[16/9] w-full object-cover border-b border-rule"
          sizes="(min-width: 640px) 24rem, 100vw"
        />
      )}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-serif text-lg font-semibold leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-auto pt-4 flex items-end justify-between gap-3">
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-accent-soft text-accent px-2 py-0.5 text-[0.7rem] font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 gap-3 text-muted">
            {githubUrl && (
              <li>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} on GitHub`}
                  className="hover:text-accent transition-colors"
                >
                  <FaGithub className="size-5" />
                </a>
              </li>
            )}
            {websiteUrl && (
              <li>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} website`}
                  className="hover:text-accent transition-colors"
                >
                  <FaExternalLinkAlt className="size-4" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Project;
