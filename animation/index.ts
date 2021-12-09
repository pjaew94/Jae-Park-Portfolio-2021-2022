export const slideDownTextVariant = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      delay: 0.3,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
};
export const slideUpTextVariant = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      delay: 0.3,
    },
  },
  exit: {
    y: "100%",
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
};

export const fadeInVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
};

export const fadeInQuickVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
};

export const projectDispImageVariant = {
  initial: {
    scaleX: 0.8,
  },
  animate: {
    scaleX: 1,

    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      delay: 0.2,
    },
  },
};

export const projectDispContainerVariant = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      type: "easeIn",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export const borderLineFadeInVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
};


export const fadeInWhileInView = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
}

export const  downRightArrowVariant = {
  initial: {
    x: "-100%",
    y: "-100%"
  },
  animate: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
}