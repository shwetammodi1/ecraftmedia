/* Shared line-style icon set (Heroicons-style outline, stroke-based) */

type IconProps = { className?: string }
const base = 'w-5 h-5'

export const SearchIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
)

export const MegaphoneIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c1.83.247 3.62.692 5.31 1.31m-5.31-1.31a32.36 32.36 0 011.71-.99M10.34 6.6a32.36 32.36 0 011.71-.99m-1.71.99c-.86-.18-1.7-.4-2.51-.66m9.86 4.06A6.75 6.75 0 0015.6 4.5m1.61 11.4a6.75 6.75 0 01-1.61-6.9" />
  </svg>
)

export const CodeIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 4.5l-4.5 15" />
  </svg>
)

export const SmartphoneIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
  </svg>
)

export const GlobeIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

export const CalendarIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0V11.25A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
)

export const UsersIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

export const HandshakeIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 9.75L3 13.5l3 3M17.25 9.75L21 13.5l-3 3M6.75 13.5h3l1.5 1.5h1.5l3-3M9.75 9.75l2.25-2.25 2.25 2.25" />
  </svg>
)

export const TrophyIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.5A.75.75 0 016 3.75h12a.75.75 0 01.75.75v.75c0 1.5-1.5 3-1.5 3M5.25 4.5A.75.75 0 004.5 5.25v.75c0 1.5 1.5 3 1.5 3m9-7.5v7.5m-9-7.5v7.5" />
  </svg>
)

export const LinkIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
)

export const DocumentIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

export const MailIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

export const PencilIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
  </svg>
)

export const ChartBarIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zm6.75-2.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.375c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V10.5zm6.75-4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 5.25 21 5.754 21 6.375v13.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V6.375z" />
  </svg>
)

export const AppleIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.014-.1-.04-.34-.04-.58 0-1.14.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.4.05.62zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.45-1.94 2.9-3.43 2.9-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.34-3.428-2.88C3.92 18.07 3 15.81 3 13.41c0-3.96 2.563-6.06 5.085-6.06 1.512 0 2.578.92 3.515.92.876 0 2.156-1 3.93-1 .835 0 3.45.13 4.4 2.87-.115.08-2.62 1.55-2.62 4.66 0 2.55 1.62 3.65 1.62 3.65z" />
  </svg>
)

export const AndroidIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.5 8.5v6a1 1 0 11-2 0v-6a1 1 0 112 0zm13 0v6a1 1 0 11-2 0v-6a1 1 0 112 0zM8 8h8v8a1 1 0 01-1 1h-.5v2a1 1 0 11-2 0v-2h-1v2a1 1 0 11-2 0v-2H9a1 1 0 01-1-1V8zm.7-1c.27-1.86 1.46-3.37 3.06-3.86l-.66-1.14a.35.35 0 01.6-.36l.74 1.28a5.6 5.6 0 011.12 0l.74-1.28a.35.35 0 01.6.36l-.66 1.14C15.84 3.63 17.03 5.14 17.3 7H8.7z" />
  </svg>
)

export const ChatIcon = ({ className = base }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-.99-.034-1.969-.094-2.937-.207a3.001 3.001 0 01-.99-.272m11.426-7.27a3.001 3.001 0 00-.992-.272 11.427 11.427 0 00-4.495 0 3.001 3.001 0 01-.992.272m6.479 0c-1.41.32-2.92.32-4.33 0M3.75 5.25c0-1.036.84-1.875 1.875-1.875h12.75c1.035 0 1.875.84 1.875 1.875v9.375a1.875 1.875 0 01-1.875 1.875H10.5l-3.75 3.75v-3.75H5.625a1.875 1.875 0 01-1.875-1.875V5.25z" />
  </svg>
)
