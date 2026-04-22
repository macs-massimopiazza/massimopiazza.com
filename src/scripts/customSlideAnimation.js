export default {
  forwards: {
    old: {
      name: 'fade-out',
      duration: '0.1s',
      easing: 'linear',
      fillMode: 'forwards',
    },
    new: {
      name: 'slide-in-right',
      duration: '0.5s',
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      fillMode: 'backwards',
    }
  },
  backwards: {
    old: {
      name: 'fade-out',
      duration: '0.1s',
      easing: 'linear',
      fillMode: 'forwards',
    },
    new: {
      name: 'slide-in-left',
      duration: '0.5s',
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      fillMode: 'backwards',
    }
  }
};