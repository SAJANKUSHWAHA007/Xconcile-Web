'use client';

import * as React from 'react';

/**
 * Premium Momentum Smooth Scroll Provider
 * Enhances wheel, key, and anchor scroll interactions with physics-based interpolation
 * without external dependencies, maintaining 60fps performance and native touch behaviors.
 */
export default function SmoothScrollProvider({ children }) {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Preserve native high-refresh-rate touch momentum on mobile / tablets
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
      return;
    }

    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let isRunning = false;
    let rafId = null;

    // Easing factor: 0.085 gives that luxurious, fluid glide
    const ease = 0.085;

    const getMaxScroll = () => {
      const doc = document.documentElement;
      const body = document.body;
      return Math.max(
        body ? body.scrollHeight : 0,
        doc.scrollHeight,
        body ? body.offsetHeight : 0,
        doc.offsetHeight,
        doc.clientHeight
      ) - window.innerHeight;
    };

    const update = () => {
      const diff = targetY - currentY;

      if (Math.abs(diff) > 0.5) {
        currentY += diff * ease;
        window.scrollTo(0, Math.round(currentY));
        rafId = requestAnimationFrame(update);
      } else {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isRunning = false;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const onWheel = (e) => {
      // Don't intercept if ctrl is held (page zoom)
      if (e.ctrlKey) return;

      e.preventDefault();

      const maxScroll = Math.max(0, getMaxScroll());
      let delta = e.deltaY;

      // Normalize lines vs pixels across mechanical wheels and trackpads
      if (e.deltaMode === 1) {
        delta *= 35;
      } else if (e.deltaMode === 2) {
        delta *= window.innerHeight;
      }

      targetY = Math.max(0, Math.min(targetY + delta, maxScroll));

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(update);
      }
    };

    // When the user drags the browser scrollbar or window scrolls
    const onScroll = () => {
      if (!isRunning) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    // Keyboard navigation (arrows, space, page up/down, home/end)
    const onKeyDown = (e) => {
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (
        ['input', 'textarea', 'select'].includes(activeTag) ||
        document.activeElement?.isContentEditable
      ) {
        return;
      }

      const maxScroll = Math.max(0, getMaxScroll());
      let keyDelta = 0;

      if (e.key === 'ArrowDown') keyDelta = 120;
      else if (e.key === 'ArrowUp') keyDelta = -120;
      else if (e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) keyDelta = window.innerHeight * 0.8;
      else if (e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) keyDelta = -window.innerHeight * 0.8;
      else if (e.key === 'Home') keyDelta = -targetY;
      else if (e.key === 'End') keyDelta = maxScroll - targetY;

      if (keyDelta !== 0) {
        e.preventDefault();
        targetY = Math.max(0, Math.min(targetY + keyDelta, maxScroll));
        if (!isRunning) {
          isRunning = true;
          rafId = requestAnimationFrame(update);
        }
      }
    };

    // Smooth anchor navigation
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#' || hash.length < 2) return;

      const targetEl = document.querySelector(hash);
      if (!targetEl) return;

      e.preventDefault();
      const maxScroll = Math.max(0, getMaxScroll());
      const elTop = targetEl.getBoundingClientRect().top + window.scrollY;
      targetY = Math.max(0, Math.min(elTop - 30, maxScroll));

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(update);
      }
    };

    // Update target if window resizes
    const onResize = () => {
      const maxScroll = Math.max(0, getMaxScroll());
      if (targetY > maxScroll) {
        targetY = maxScroll;
        currentY = maxScroll;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('click', onClick);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <>{children}</>;
}
