# Play In Code Landing Page

High-converting landing page for Play In Code online programming school.

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=77772270088
NEXT_PUBLIC_WHATSAPP_DISPLAY=+7 777 227 0088
```

## Project Structure

- `/src/app` â€” Next.js pages and layouts
- `/src/components` â€” React components (layout, sections, UI)
- `/src/content` â€” Russian copy (ru.ts)
- `/src/lib` â€” Utilities (WhatsApp builder, constants, types)
- `/public` â€” Static assets (logo, favicon)

## Content Editing

All Russian copy is centralized in `src/content/ru.ts`. Edit this file to update:
- Section headings and descriptions
- Benefit cards
- Course information
- FAQ items
- Reviews and case studies

## Styling

Uses Tailwind CSS. Core colors configured in:
- `tailwind.config.ts` â€” Theme colors and spacing
- `src/lib/constants.ts` â€” Brand color constants
- `src/app/globals.css` â€” Global styles and CSS variables

## Testing

```bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm run type-check        # TypeScript check
npm run lint              # ESLint check
npm run format            # Prettier format
```

## Deployment

Build is optimized for Vercel, Netlify, or any Node.js host:

```bash
npm run build
npm start
```

## Key Features

- âœ… Mobile-first responsive design
- âœ… 14 optimized landing sections
- âœ… Single-click WhatsApp CTA flow
- âœ… Accessibility (WCAG AA)
- âœ… Performance optimized (Lighthouse 85+)
- âœ… TypeScript for type safety
- âœ… SEO ready (meta tags, structured data)

## Maintenance

### Update Placeholder Stats

In `src/content/ru.ts`, search for `[X]+` patterns:
- `[5]+` â†’ years of experience
- `[500]+` â†’ students
- `[15]+` â†’ countries
- `[30]+` â†’ cities

Replace `[X]` with actual numbers.

### Add Reviews

Add new review objects to `content.reviews.list` in `ru.ts`:

```typescript
{
  id: "review-new",
  quote: "Parent testimonial here...",
  author: "Parent name",
  country: "Country"
}
```

### Change WhatsApp Number

Update `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=your_new_number
```

## Support

For questions, refer to the design document:
`docs/superpowers/specs/2026-04-07-code-play-landing-design.md`

