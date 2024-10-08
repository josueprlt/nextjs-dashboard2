import '@/app/ui/global.css';
import { Sidenav } from './ui/NavBar/page';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidenav />

        {children}
      </body>
    </html>
  );
}
