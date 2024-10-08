import '@/app/ui/global.css';
import Sidenav from '@/app/ui/navbar';


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
