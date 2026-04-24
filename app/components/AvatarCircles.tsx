'use client'

import React from "react";
import Image from "next/image";

interface AvatarCirclesProps {
  numPeople?: number;
  avatarUrls: string[];
  className?: string;
}

export default function AvatarCircles({
  numPeople,
  avatarUrls,
  className,
}: AvatarCirclesProps) {
  return (
    <div className={`flex -space-x-3 rtl:space-x-reverse ${className || ""}`}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="h-8 w-8 rounded-full border-2 border-bg-white object-cover shadow-sm"
          src={url}
          width={32}
          height={32}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {(numPeople !== undefined && numPeople > 0) ? (
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg-white bg-bg-white text-center text-[10px] font-bold text-fg shadow-sm">
          +{numPeople >= 1000 ? `${(numPeople / 1000).toFixed(1)}k` : numPeople}
        </div>
      ) : (
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg-white bg-bg-white text-fg shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
      )}
    </div>
  );
}
