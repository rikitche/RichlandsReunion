"use client";

import React from "react";

interface AttributionProps {
  title: string;
  author: string;
  source: string;
  license: string;
  licenseUrl?: string;
  className?: string;
}

export default function Attribution({
  title,
  author,
  source,
  license,
  licenseUrl,
  className = "",
}: AttributionProps) {
  return (
    <div
      className={`text-xs text-gray-400 text-center mt-2 leading-snug ${className}`}
    >
      {title && <span className="italic">“{title}”</span>}{" "}
      {author && (
        <>
          by{" "}
          {source ? (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              {author}
            </a>
          ) : (
            author
          )}
        </>
      )}
      {license && (
        <>
          {" "}
          licensed under{" "}
          {licenseUrl ? (
            <a
              href={licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              {license}
            </a>
          ) : (
            license
          )}
          .
        </>
      )}
    </div>
  );
}
