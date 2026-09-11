import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Konnektoren · MediaKit', description: 'Media kit for Konnektoren.help' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
