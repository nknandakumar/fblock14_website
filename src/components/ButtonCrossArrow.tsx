"use client";
import Link from "next/link";
import React from "react";

export default function ButtonCrossArrow({ 
  href, 
  text, 
  onClick, 
  className = "" 
}: { 
  href?: string; 
  text: string; 
  onClick?: () => void; 
  className?: string 
}) {
  const content = (
    <>
      <div className='relative overflow-hidden flex items-center h-full pl-5 pr-4 shrink-0 min-w-0'>
        <div className='inline-flex translate-y-0 items-center transition duration-500 group-hover:-translate-y-[250%] text-xs md:text-sm font-black uppercase tracking-widest'>
          {text}
        </div>
        <div className='absolute inset-0 pl-5 pr-4 inline-flex translate-y-[250%] items-center transition duration-500 group-hover:translate-y-0 text-xs md:text-sm font-black uppercase tracking-widest'>
          {text}
        </div>
      </div>
      <div className='relative h-10 w-10 overflow-hidden bg-accent rounded-full mr-1 shrink-0'>
        <div className='absolute top-[0.8em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-300 group-hover:-translate-y-6 group-hover:translate-x-5'>
          <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 fill-bg-dark'>
            <path d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z' fillRule='evenodd' clipRule='evenodd'></path>
          </svg>
          <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mb-1 -translate-x-5 fill-bg-dark'>
            <path d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z' fillRule='evenodd' clipRule='evenodd'></path>
          </svg>
        </div>
      </div>
    </>
  );

  const baseClasses = `group relative flex h-14 items-center justify-between border-2 border-accent/80 hover:border-accent rounded-full bg-transparent font-medium text-white transition-all duration-300 overflow-hidden ${className}`;

  if (href) {
    // Determine if it's an anchor link
    if (href.startsWith("#")) {
      return <a href={href} onClick={onClick} className={baseClasses}>{content}</a>;
    }
    return <Link href={href} onClick={onClick} className={baseClasses}>{content}</Link>;
  }
  return <button onClick={onClick} className={baseClasses}>{content}</button>;
}
