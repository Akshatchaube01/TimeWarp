// AnimatedBackground.jsx
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBackground = () => {
  const props = useSpring({
    from: { transform: 'translate3d(0,0,0)' },
    to: async (next) => {
      while (1) {
        await next({ transform: 'translate3d(100px,0,0)' });
        await next({ transform: 'translate3d(-100px,0,0)' });
        await next({ transform: 'translate3d(0,100px,0)' });
        await next({ transform: 'translate3d(0,-100px,0)' });
      }
    },
    config: { duration: 5000 }
  });

  return (
    <animated.div
      style={{
        ...props,
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        zIndex: -1,
      }}
    />
  );
};

export default AnimatedBackground;
