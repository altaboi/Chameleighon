# Chameleighon — Design System Guide

> **Palette:** Cool Sage & Slate  
> **Typeface:** Roboto Serif  
> **Base font size:** 18px · Minimum font size: 16px

---

## 1. Colour Palette

| Token | Name | Hex | Role |
|---|---|---|---|
| `--color-deep` | Deep forest | `#2C3A35` | Navbar, footer, primary CTA fill |
| `--color-sage` | Sage | `#5C7F72` | Interactive elements, card accents, hover states |
| `--color-deep-sage` | Deep sage | `#3A6058` | Button hover, link hover |
| `--color-mist` | Mist | `#A8C4BA` | Decorative dividers, badge tints, image overlays |
| `--color-jade` | Pale jade | `#D6E6E1` | Testimonials bg, callout boxes, tag pills |
| `--color-barely` | Barely there | `#F3F8F6` | Primary page background, alternating sections |
| `--color-foam` | Foam | `#E8F2EE` | CTA banner background, form section fill |
| `--color-white` | White | `#FFFFFF` | Service cards, gallery frames, form inputs |
| `--color-slate` | Slate grey | `#4A5550` | Body text, descriptions |
| `--color-muted` | Muted | `#A8C4BA` | Footer body links, copyright |

### CSS Custom Properties

```css
:root {
  --color-deep:       #2C3A35;
  --color-sage:       #5C7F72;
  --color-deep-sage:  #3A6058;
  --color-mist:       #A8C4BA;
  --color-jade:       #D6E6E1;
  --color-barely:     #F3F8F6;
  --color-foam:       #E8F2EE;
  --color-white:      #FFFFFF;
  --color-slate:      #4A5550;
}
```

---

## 2. Colour Roles — What Each Colour Does

### Deep forest `#2C3A35`
The brand anchor. Used at the extremes of the page — navbar and footer — to create a strong visual frame. Also the fill for primary CTA buttons. Use sparingly; its weight carries authority only when reserved.

### Sage `#5C7F72`
The primary interactive colour. Buttons, active nav underlines, card left-border accents, icon fills, focus rings, and hover states. This is the colour users associate with "clickable".

### Mist `#A8C4BA`
Decorative only. Dividers, badge background tints, subtle image overlay tints. **Never** use as a text background — contrast fails WCAG AA at any text size.

### Pale jade `#D6E6E1`
Warm tint surfaces. Testimonial section background, highlight callout boxes, form focus halos, tag pills. Creates warmth without competing with sage.

### Barely there `#F3F8F6`
The page background. Also used for alternating section fills. Prevents the site from feeling cold or clinical while maintaining a clean, airy tone.

### Foam `#E8F2EE`
The CTA banner and contact section fill. Bridges the light content sections and the dark footer.

### White `#FFFFFF`
Reserved for content surfaces — service cards, gallery image frames, form inputs. The clean contrast layer against barely-there backgrounds.

### Slate grey `#4A5550`
All body copy, card descriptions, testimonial attribution, form labels. Never black — slate grey is softer and reads better against warm-tinted backgrounds.

---

## 3. Section Colour Map — Top to Bottom

```
┌─────────────────────────────────────────────────────┐
│  NAVBAR          bg: #2C3A35   logo: white           │
├─────────────────────────────────────────────────────┤
│  HERO            bg: #2C3A35 → #5C7F72 gradient      │
├─────────────────────────────────────────────────────┤
│  SERVICES        bg: #F3F8F6   cards: white          │
├─────────────────────────────────────────────────────┤
│  GALLERY         bg: #FFFFFF                         │
├─────────────────────────────────────────────────────┤
│  TESTIMONIALS    bg: #D6E6E1   cards: white          │
├─────────────────────────────────────────────────────┤
│  CTA BANNER      bg: #E8F2EE                         │
├─────────────────────────────────────────────────────┤
│  FOOTER          bg: #2C3A35   logo: white           │
└─────────────────────────────────────────────────────┘
```

**Alternation rule:** Never place two identical background colours back-to-back. The sequence barely-there → white → pale jade → barely-there must be maintained.

### Navbar
- Background: `#2C3A35`
- Logo: white PNG (transparent source renders cleanly on dark)
- Nav links: `#D6E6E1`
- Active / hover underline: `#5C7F72` (sage)
- CTA pill button: white fill, deep forest text
- Height: `70px` desktop · `58px` mobile

### Hero
- Background: gradient `#2C3A35` → `#5C7F72` (this is the **one permitted gradient** on the site)
- Headline: white, Roboto Serif 500
- Tagline / subheading: `#D6E6E1`
- Primary CTA: white fill + deep forest text
- Ghost CTA: transparent + `#D6E6E1` border + `#D6E6E1` text

### Services section
- Background: `#F3F8F6`
- Cards: white, `border-left: 3px solid #5C7F72`, `border-radius: 10px`
- Card heading: `#2C3A35`
- Card body: `#4A5550`
- Icons: `#5C7F72`

### Gallery / Before & After
- Background: `#FFFFFF`
- Photography is the visual hero — no coloured overlays
- Caption badges: mist `#A8C4BA`
- Image frame border: `1px solid #D6E6E1`
- Image border-radius: `8px`

### Testimonials
- Background: `#D6E6E1`
- Quote cards: white
- Quotation marks (decorative): `#5C7F72`
- Quote text: italic, `#4A5550`
- Client name: `#2C3A35`, upright weight

### CTA Banner
- Background: `#E8F2EE`
- Headline: `#2C3A35`
- CTA button: deep forest fill + white text
- Hover: `#3A6058`

### Footer
- Background: `#2C3A35`
- Logo: white (mirrors navbar — bookends the page)
- Column headings: `#5C7F72`
- Body links: `#D6E6E1`
- Copyright / small text: `#A8C4BA`
- Social icons: `#A8C4BA` idle · `#D6E6E1` hover

---

## 4. Typography — Roboto Serif

**Import (Google Fonts)**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,300;0,8..144,400;0,8..144,500;1,8..144,300;1,8..144,400&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Size | Weight | Colour | Notes |
|---|---|---|---|---|
| H1 | 48–56px | 500 | `#2C3A35` | Hero headline |
| H2 | 32–36px | 500 | `#2C3A35` | Section headings |
| H3 | 24–26px | 500 | `#5C7F72` | Card / subsection headings |
| Body | **18px** | 400 | `#4A5550` | Base size — never go below |
| Testimonial | 18px | 300 italic | `#4A5550` | Italic reserved for quotes only |
| Eyebrow label | 16px | 500 | `#5C7F72` | All caps · letter-spacing: 0.1em |
| Button text | 16px | 500 | varies | See button system below |
| Nav links | 16px | 400 | `#D6E6E1` | On dark nav |
| Captions | 16px | 400 | `#A8C4BA` | Minimum — never below |
| Footer body | 16px | 400 | `#D6E6E1` | Minimum — never below |

### Font Size Rule — Enforced
- **18px** is the base for all body copy, card descriptions, and form labels
- **16px** is the absolute floor — used only for nav links, button text, eyebrow labels, captions, and footer copy
- **Nothing on the website goes below 16px**, including on mobile

### Line Heights
```css
h1, h2        { line-height: 1.15; }
h3            { line-height: 1.3; }
body, p       { line-height: 1.8; }
blockquote    { line-height: 1.7; }
button, label { line-height: 1.4; }
```

### Letter Spacing
```css
h1, h2     { letter-spacing: -0.01em; }
h3         { letter-spacing: 0; }
.eyebrow   { letter-spacing: 0.1em; text-transform: uppercase; }
```

### Italic Usage
Roboto Serif italic is **reserved for testimonials and pull-quotes only**. All headings, UI labels, body copy, and buttons use the upright (roman) style.

---

## 5. Button System

### Primary Button
```css
background: #2C3A35;
color: #FFFFFF;
font-family: 'Roboto Serif', serif;
font-size: 16px;
font-weight: 500;
padding: 15px 30px;
border-radius: 4px;
border: none;
cursor: pointer;
transition: background 0.2s ease;
```
Hover: `background: #3A6058`

### Secondary Button
```css
background: transparent;
color: #5C7F72;
font-family: 'Roboto Serif', serif;
font-size: 16px;
font-weight: 500;
padding: 14px 30px;
border-radius: 4px;
border: 1.5px solid #5C7F72;
cursor: pointer;
transition: background 0.2s ease, color 0.2s ease;
```
Hover: `background: #5C7F72; color: #FFFFFF`

### Ghost Button (hero only)
```css
background: transparent;
color: #D6E6E1;
font-size: 16px;
font-weight: 500;
padding: 14px 30px;
border-radius: 4px;
border: 1px solid #D6E6E1;
```
Hover: `background: rgba(214,230,225,0.12)`

**Border radius rule:** Buttons use `4px` — rectangular-leaning, not pill-shaped. This communicates professionalism and trustworthiness for a service business.

---

## 6. Card System

### Service Card
```css
background: #FFFFFF;
border-radius: 10px;
border: 0.5px solid #D6E6E1;
border-left: 3px solid #5C7F72;
padding: 28px 28px;
```
- Heading: Roboto Serif 500, 24px, `#2C3A35`
- Body: Roboto Serif 400, 18px, `#4A5550`
- Icon: `#5C7F72`, 24px

### Testimonial Card
```css
background: #FFFFFF;
border-radius: 10px;
border: 0.5px solid #D6E6E1;
padding: 28px 28px;
```
- Quote: Roboto Serif 300 italic, 18px, `#4A5550`
- Attribution: Roboto Serif 500 upright, 16px, `#2C3A35`

---

## 7. Logo Placement

| Context | Background | Logo colour | Min width |
|---|---|---|---|
| Navbar | `#2C3A35` | White (PNG transparent) | 130px |
| Footer | `#2C3A35` | White (PNG transparent) | 110px |
| Hero (if used) | Sage gradient | White or `#F3F8F6` | 120px |
| Light bg (print/email only) | `#F3F8F6` | `#2C3A35` | 120px |

**Clear space:** Maintain padding equal to the cap-height of the "C" in CHAMELEIGHON on all four sides. No text, icons, or borders within this zone.

**Never** recolour the logo in sage, mist, jade, or any tint. White and deep forest only.

---

## 8. Spacing & Layout

| Property | Value |
|---|---|
| Container max-width | `1140px` · centred |
| Container side padding | `24px` mobile · `48px` tablet · auto desktop |
| Section padding (vertical) | `96px` desktop · `56px` mobile |
| Card inner padding | `28px` |
| Card border-radius | `10px` |
| Image border-radius | `8px` |
| Navbar height | `70px` desktop · `58px` mobile |
| Grid gap (service cards) | `24px` |
| Focus ring | `2px solid #5C7F72` · `2px offset` |
| Sage card left border | `3px solid #5C7F72` |

---

## 9. Gradient Rule

Only **one gradient** is permitted on the entire website:

```css
/* Hero section background only */
background: linear-gradient(160deg, #2C3A35 0%, #5C7F72 100%);
```

No other gradients, mesh backgrounds, noise textures, or decorative effects anywhere on the site.

---

## 10. Accessibility

- All body text (`#4A5550` on `#F3F8F6` or white) passes **WCAG AA** (contrast ratio ≥ 4.5:1)
- All headings (`#2C3A35` on light backgrounds) pass **WCAG AAA**
- Mist `#A8C4BA` must **never** be used as a text background — it fails contrast at all text sizes
- Gold-adjacent warning: if any decorative tints are added, verify contrast before deploying
- Minimum font size 16px is enforced partly for accessibility — Roboto Serif at small sizes reduces legibility for older users
- Focus ring: `2px solid #5C7F72` with `outline-offset: 2px` on all interactive elements

---

## 11. Do's and Don'ts

### Do
- Alternate section backgrounds: barely-there → white → pale jade → barely-there
- Use sage as the single interactive colour system-wide (buttons, links, focus, accents)
- Use Roboto Serif italic exclusively for testimonials and pull-quotes
- Keep the hero gradient (`#2C3A35` → `#5C7F72`) as the only gradient on the site
- Give photography full bleed in the gallery section — no colour overlays
- Keep buttons at `4px` border-radius — professional, not pill-shaped

### Don't
- Never place text on mist `#A8C4BA` background
- Never use two identical section backgrounds back-to-back
- Never go below 16px font size, anywhere, on any device
- Never recolour the logo in sage, mist, or any tint — white and deep forest only
- Never use more than two brand colours in a single UI component
- Never use Roboto Serif italic outside testimonial and pull-quote contexts
- Never add a second gradient — the hero gradient is the only one permitted

---

*Design guide version 1.0 — Chameleighon · Cool Sage & Slate · Roboto Serif*
