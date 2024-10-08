import '@/app/ui/global.css';
import NavBar from '@/app/ui/navbar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
