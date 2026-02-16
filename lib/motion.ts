export const motionEaseOut = [0.22, 1, 0.36, 1] as const;

export function motionTransition(reduced: boolean, delay = 0, duration = 0.24) {
  if (reduced) {
    return { duration: 0.01, delay: 0 };
  }

  return {
    duration,
    delay,
    ease: motionEaseOut,
  };
}

export function fadeUp(reduced: boolean, delay = 0, y = 14) {
  if (reduced) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: motionTransition(true),
    };
  }

  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: motionTransition(false, delay),
  };
}
