import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { NotificationProvider } from '@/provider/NotificationProvider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => <NotificationProvider>{children}</NotificationProvider>;

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender };
