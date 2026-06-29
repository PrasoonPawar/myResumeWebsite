# Quick Start Guide

Get your portfolio running in 5 minutes!

## Prerequisites

- Node.js 18.17+ ([Download](https://nodejs.org/))
- npm or yarn
- Git (optional, for version control)

## Installation

### 1. Install Dependencies

```bash
npm install
```

This installs all required packages including Next.js, React, TypeScript, and Tailwind CSS.

### 2. Run Development Server

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
```

### 3. Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

**You now have a fully functional portfolio running locally!** 🎉

## Next Steps

### Add Your Resume

1. Create your resume PDF
2. Place it in the `public/` folder
3. Name it: `Prasoon_Pawar_Resume.pdf`

### Customize Content

1. Open `data/portfolio.ts`
2. Update your personal information
3. Add your projects, experience, skills, etc.
4. Changes auto-reload in the browser

### Try Dark Mode

Click the moon/sun icon in the top navigation bar to toggle dark mode.

### Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build.

## File Structure Quick Reference

```
├── app/
│   ├── layout.tsx          ← Root layout (metadata, providers)
│   ├── page.tsx            ← Main portfolio page
│   └── globals.css         ← Global styles
├── components/
│   ├── Hero.tsx            ← Hero section
│   ├── About.tsx           ← About section
│   ├── SkillsGrid.tsx      ← Skills
│   └── ... (other sections)
├── data/
│   └── portfolio.ts        ← ALL YOUR CONTENT HERE
└── public/
    └── Prasoon_Pawar_Resume.pdf  ← Your resume file
```

## Common Tasks

### Update Your Name

Open `data/portfolio.ts` and change:
```typescript
personal: {
  name: 'Your Name',  // ← Change this
  // ...
}
```

### Add a Project

In `data/portfolio.ts`, find `projects` array and add:

```typescript
{
  id: 5,
  title: 'My New Project',
  startDate: 'January 2024',
  endDate: 'Present',
  description: 'Project description...',
  keyContributions: ['Contribution 1', 'Contribution 2'],
  technologies: ['Tech1', 'Tech2'],
}
```

### Change Colors

Edit `tailwind.config.js` and update color definitions.

### Deploy to Vercel

1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your site is live. See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for details.

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run TypeScript type checking
npm run type-check

# Run ESLint
npm run lint
```

## Troubleshooting

### Port 3000 already in use?

```bash
npm run dev -- -p 3001
```

### Changes not appearing?

1. Save the file
2. Check browser console for errors
3. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Can't find module?

```bash
# Clear Next.js cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Next: Customization

Ready to make it yours? Check out [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

## Next: Deployment

Ready to go live? Check out [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

**Happy building! 🚀**
