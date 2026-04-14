# ETS RUNI Website

Bilingual institutional website for ETS RUNI built with Next.js App Router, TypeScript, Tailwind CSS, and Resend.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Route-based locales: `/fr` and `/en`
- React Hook Form + Zod
- Resend for contact email delivery

## Scripts

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=etsrunicasa@gmail.com
CONTACT_FROM_EMAIL=noreply@etsruni.com
```

## Project Structure

```text
app/
  [locale]/
  api/contact/
components/
  forms/
  home/
  layout/
  ui/
lib/
messages/
public/
```

## Notes

- `/` redirects to `/fr`.
- All public copy is centralized in `messages/fr.ts` and `messages/en.ts`.
- The contact form posts to `/api/contact` and sends mail through Resend.
- SEO output includes localized metadata, `robots.txt`, and `sitemap.xml`.
