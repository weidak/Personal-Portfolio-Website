import React, { useRef, useEffect } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

const ScrollIndicator: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const indicatorEl = indicatorRef.current;

    if (!scrollEl || !indicatorEl) {
      return;
    }

    const updateIndicator = () => {
      const { scrollHeight, clientHeight, scrollTop } = scrollEl;
      const height = (clientHeight / scrollHeight) * clientHeight;
      const offset = (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - height);

      indicatorEl.style.height = `${height}px`;
      indicatorEl.style.transform = `translateY(${offset}px)`;
    };

    scrollEl.addEventListener('scroll', updateIndicator);

    return () => {
      scrollEl.removeEventListener('scroll', updateIndicator);
    };
  }, []);

  return (
    <Box ref={scrollRef} overflow="auto" height="100%">
        {/* content */}
      <Box
        ref={indicatorRef}
        position="absolute"
        right="0"
        top="0"
        width="8px"
        bg={colorMode === 'light' ? 'gray.300' : 'whiteAlpha.300'}
        borderRadius="4px"
        transition="transform 0.3s ease-out"
      />
    </Box>
  );
};

export default ScrollIndicator;
