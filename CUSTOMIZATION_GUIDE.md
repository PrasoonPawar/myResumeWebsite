# Customization Guide

Quick reference for customizing your portfolio.

## 📝 Updating Content

All content is stored in `data/portfolio.ts`. Edit this file to update your information across the entire site.

### Personal Information

```typescript
personal: {
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  email: 'your.email@example.com',
  phone: '+1 XXX-XXX-XXXX',
  linkedin: 'https://www.linkedin.com/in/yourprofile',
  resumePath: '/your_resume.pdf',
}
```

### Hero Section

```typescript
hero: {
  headline: 'Your Headline',
  subheadline: 'Your Subheadline',
  highlights: [
    'Highlight 1',
    'Highlight 2',
    // ... more highlights
  ],
}
```

### About Section

```typescript
about: {
  summary: 'Your professional summary...',
  stats: [
    { label: 'Years of Experience', value: '10+' },
    // ... more stats
  ],
}
```

### Skills

```typescript
skills: {
  categories: [
    {
      name: 'Category Name',
      skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    },
    // ... more categories
  ],
}
```

### Projects

```typescript
projects: [
  {
    id: 1,
    title: 'Project Title',
    startDate: 'Month Year',
    endDate: 'Month Year',
    description: 'Project description...',
    keyContributions: ['Contribution 1', 'Contribution 2'],
    technologies: ['Tech 1', 'Tech 2'],
  },
  // ... more projects
]
```

### Experience

```typescript
experience: [
  {
    id: 1,
    title: 'Job Title',
    company: 'Company Name',
    location: 'City, State, Country',
    startDate: 'Month Year',
    endDate: 'Month Year',
    responsibilities: ['Responsibility 1', 'Responsibility 2'],
  },
  // ... more positions
]
```

### Certifications

```typescript
certifications: [
  {
    id: 1,
    title: 'Certification Title',
    issuer: 'Issuer Name',
    date: 'Year',
  },
  // ... more certifications
]
```

### Education

```typescript
education: [
  {
    id: 1,
    degree: 'Degree Name',
    institution: 'University/Institution Name',
    year: 'Year',
  },
  // ... more education
]
```

## 🎨 Design Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      azure: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... more shades
      },
      slate: {
        // ... slate colors
      },
    },
  },
}
```

**Color Recommendations**:
- Primary: Azure blue (corporate, tech-forward)
- Secondary: Slate gray (professional, neutral)
- Accent: Any contrasting color for highlights

### Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${yourFont.className} ...`}>
        {children}
      </body>
    </html>
  );
}
```

**Font Suggestions**:
- Professional: Inter, Roboto, Open Sans
- Modern: Poppins, Space Grotesk
- Elegant: Playfair Display, Lora

### Spacing & Layout

Edit Tailwind configuration in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    spacing: {
      // custom spacing
    },
    animation: {
      // custom animations
    },
  },
}
```

## 🎯 Section Customization

### Hero Section Visual

Edit `components/Hero.tsx`:

1. **Change background**: Modify gradient in the `bg-gradient-to-b` class
2. **Change visualization**: Edit the SVG in the visual concept section
3. **Adjust layout**: Change `grid lg:grid-cols-2` for different layouts

### About Section Layout

Edit `components/About.tsx`:

- Change `lg:grid-cols-3` to adjust the layout
- Modify card styles by updating class names
- Adjust spacing with `gap-*` classes

### Skills Grid

Edit `components/SkillsGrid.tsx`:

- Change `md:grid-cols-2 lg:grid-cols-3` to adjust columns
- Update skill badge colors by changing `bg-azure-50` class
- Adjust animation delays by changing `animationDelay`

### Experience Timeline

Edit `components/ExperienceTimeline.tsx`:

- Expand/collapse behavior controlled by `expandedId` state
- Change card styles with Tailwind classes
- Modify icon colors in responsibility bullets

### Projects Section

Edit `components/Projects.tsx` and `components/ProjectCard.tsx`:

- Change grid layout in `Projects.tsx`
- Modify modal styles in `ProjectCard.tsx`
- Update technology badge colors

## 🔗 Navigation

Edit `components/Navbar.tsx`:

```typescript
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  // ... add or remove items
];
```

Add corresponding section IDs to components using `id="section-name"`.

## 📱 Responsive Breakpoints

Common Tailwind breakpoints:

- `sm`: 640px (tablets)
- `md`: 768px (small laptops)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)
- `2xl`: 1536px (large screens)

Example usage:
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3">
  {/* Single column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

## 🔔 Notifications & Messages

### Success Message

In `components/ContactForm.tsx`, update the success message:

```typescript
{submitted && (
  <div className="p-4 bg-green-50 ...">
    Your custom message
  </div>
)}
```

## 📄 Resume File

1. Place your resume PDF in `public/` folder
2. Name it: `Prasoon_Pawar_Resume.pdf`
3. Update path in `data/portfolio.ts` if different:
   ```typescript
   resumePath: '/your_resume.pdf',
   ```

## 🎬 Animations

Adjust animations in `tailwind.config.js`:

```javascript
animation: {
  fadeIn: 'fadeIn 0.6s ease-in-out',
  slideUp: 'slideUp 0.6s ease-out',
  slideDown: 'slideDown 0.3s ease-out',
}
```

Add to components with:
```jsx
<div className="animate-fadeIn">Content</div>
```

Control timing by setting `animationDelay`:
```jsx
style={{ animationDelay: `${index * 100}ms` }}
```

## ♿ Accessibility

### Focus States

All interactive elements include `focus-ring` class for keyboard navigation:

```typescript
className="... focus-ring ..."
```

### ARIA Labels

Add ARIA labels to buttons:

```jsx
<button aria-label="Toggle theme">
  {theme === 'light' ? <Moon /> : <Sun />}
</button>
```

### Color Contrast

Ensure text has sufficient contrast:

- Light background: Dark text (#0f172a)
- Dark background: Light text (#f8fafc)

## 🚀 Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Lazy Loading**: Components automatically code-split
3. **Minification**: Next.js handles automatically
4. **Caching**: Configure in `next.config.js`

## 📊 Analytics

Add Google Analytics or Vercel Analytics:

1. Get tracking ID
2. Add to `app/layout.tsx` or use Next.js Script component
3. Monitor traffic and user behavior

## 🔒 Security

1. **Environment Variables**: Keep secrets in `.env.local`
2. **API Routes**: Validate input in backend
3. **HTTPS**: Automatic on Vercel
4. **Content Security Policy**: Configure headers in `next.config.js`

## 🐛 Common Customizations

### Change Button Colors

Find button classes:
- `.btn-primary` - Blue primary buttons
- `.btn-secondary` - Gray secondary buttons
- `.btn-outline` - Outlined buttons

Edit the corresponding Tailwind classes in `app/globals.css`.

### Change Logo/Brand

Edit in `components/Navbar.tsx` and `components/Footer.tsx`:

```jsx
<div className="w-8 h-8 bg-gradient-to-br from-azure-500 to-blue-600 ...">
  PP
</div>
```

Replace "PP" with your initials or add a logo image.

### Hide Sections

To hide a section, comment it out in `app/page.tsx`:

```typescript
// <Education />
```

Or conditionally render:

```typescript
{showEducation && <Education />}
```

### Change Section Order

Reorder components in `app/page.tsx`:

```typescript
export default function Home() {
  return (
    <>
      <Hero />
      <SkillsGrid />      {/* Moved before About */}
      <About />
      {/* ... rest of sections */}
    </>
  );
}
```

## 📞 Getting Help

For specific customizations:

1. Check component props in `components/` folder
2. Review `data/portfolio.ts` structure
3. Reference Tailwind CSS docs: https://tailwindcss.com
4. Check Next.js docs: https://nextjs.org/docs

---

**Happy customizing! 🎉**
