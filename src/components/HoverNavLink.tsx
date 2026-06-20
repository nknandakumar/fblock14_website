"use client";
import Link from "next/link";
import React from "react";

export default function HoverNavLink({ 
  href, 
  text, 
  onClick, 
  className = "", 
  isButton = false 
}: { 
  href?: string; 
  text: string; 
  onClick?: () => void; 
  className?: string; 
  isButton?: boolean 
}) {
  const content = (
    <>
      <div className='inline-flex h-full translate-y-0 items-center justify-center transition duration-500 group-hover:-translate-y-[150%]'>
        {text}
      </div>
      <div className='absolute inline-flex h-full w-full translate-y-full items-center justify-center transition duration-500 group-hover:translate-y-0 text-bg-dark'>
        <span className='absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-accent transition duration-500 group-hover:translate-y-0 group-hover:scale-150 rounded-sm'></span>
        <span className='z-10'>{text}</span>
      </div>
    </>
  );

  const buttonContent = (
    <>
      <div className='inline-flex h-full translate-y-0 items-center justify-center px-4 sm:px-6 transition duration-500 group-hover:-translate-y-[150%] text-white'>
        {text}
      </div>
      <div className='absolute inline-flex h-full w-full translate-y-full items-center justify-center text-bg-dark transition duration-500 group-hover:translate-y-0'>
        <span className='absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-accent transition duration-500 group-hover:translate-y-0 group-hover:scale-150'></span>
        <span className='z-10'>{text}</span>
      </div>
    </>
  );

  if (isButton) {
    const btnClasses = `group relative inline-flex h-12 sm:h-14 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 hover:border-accent font-black uppercase tracking-widest text-[10px] sm:text-xs md:text-sm bg-neutral-900 transition-all duration-300 ${className}`;
    if (href) {
      if (href.startsWith("#")) {
        return <a href={href} onClick={onClick} className={btnClasses}>{buttonContent}</a>;
      }
      if (href.startsWith("http")) {
        return <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className={btnClasses}>{buttonContent}</a>;
      }
      return <Link href={href} onClick={onClick} className={btnClasses}>{buttonContent}</Link>;
    }
    return <button onClick={onClick} className={btnClasses}>{buttonContent}</button>;
  }

  // Just a navlink
  const navClasses = `group relative inline-flex h-8 items-center justify-center overflow-hidden font-bold uppercase tracking-wider text-xs lg:text-sm text-white/70 hover:text-white transition-colors duration-300 ${className}`;
  if (href) {
    if (href.startsWith("#")) {
      return <a href={href} onClick={onClick} className={navClasses}>{content}</a>;
    }
    if (href.startsWith("http")) {
      return <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className={navClasses}>{content}</a>;
    }
    return <Link href={href} onClick={onClick} className={navClasses}>{content}</Link>;
  }
  return <button onClick={onClick} className={navClasses}>{content}</button>;
}
