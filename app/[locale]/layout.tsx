import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { LocaleHtmlUpdater } from "@/components/layout/LocaleHtmlUpdater";
import { Navbar } from "@/components/layout/Navbar";
import { getDictionary, isLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <>
      <LocaleHtmlUpdater locale={locale} />
      <Navbar dictionary={dictionary} locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer dictionary={dictionary} locale={locale} />
    </>
  );
}
