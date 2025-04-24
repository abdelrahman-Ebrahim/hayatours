import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Hayat Tours",
  description: "Hayat Tours Travels",
  icons: {
    icon: "/hayatLogo.png",
    shortcut: "/hayatLogo.png",
    apple: "/hayatLogo.png",
  },
};


export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const direction = locale === "ar" ? "rtl" : "ltr";
 
  return (
    <html lang={locale} dir={direction}>
      <body className={`overflow-x-hidden bg-[#d2c8ac]`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}