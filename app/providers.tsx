'use client';

import React from 'react';
import posthog, { PostHog } from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

const posthog_key = process.env.NEXT_PUBLIC_POSTHOG_KEY || '';
const posthog_host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

if (typeof window !== 'undefined') {
  posthog.init(posthog_key, {
    api_host: posthog_host,
    //Disabled cookie tracking https://posthog.com/tutorials/cookieless-tracking
    autocapture: false,
    persistence: 'memory',
    bootstrap: {
      distinctID: '[user unique id]', // (If you have it)
    },
    // Enable debug mode in development
    loaded: (posthog_instance: PostHog) => {
      if (process.env.NODE_ENV === 'development') posthog_instance.debug();
    },
  });
}

const Providers = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export default Providers;
