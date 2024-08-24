import '@/styles/global.scss';
import style from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body id={style.root}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
