---
name: Industrial Precision
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#43474c'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4e6073'
  primary: '#162839'
  on-primary: '#ffffff'
  primary-container: '#2c3e50'
  on-primary-container: '#96a9be'
  inverse-primary: '#b5c8df'
  secondary: '#944a00'
  on-secondary: '#ffffff'
  secondary-container: '#fc8f34'
  on-secondary-container: '#663100'
  tertiary: '#362308'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e381c'
  on-tertiary-container: '#c1a17d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4fb'
  primary-fixed-dim: '#b5c8df'
  on-primary-fixed: '#091d2e'
  on-primary-fixed-variant: '#36485b'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb783'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#713700'
  tertiary-fixed: '#ffddb7'
  tertiary-fixed-dim: '#e3c19b'
  on-tertiary-fixed: '#291802'
  on-tertiary-fixed-variant: '#5a4225'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  cobalt-pigment: '#2980B9'
  deep-slate: '#34495E'
  industrial-orange: '#D35400'
  surface-white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style
This design system is built for a premium corporate catalog environment, emphasizing **Modern Industrial Minimalism**. The brand personality is authoritative, precise, and high-performance. It balances the raw, structural nature of the paint industry with a highly polished, editorial execution.

The aesthetic utilizes "Architectural Whites" to create vast breathing room, allowing the product—the paint pigments themselves—to become the focal point. The target audience includes architects, industrial contractors, and premium retailers who value technical reliability and sophisticated presentation.

## Colors
The palette is rooted in **Deep Slate Neutrals** and **Crisp Whites**, reflecting the professional stability of a global corporate entity. 

- **Primary:** Deep Slate (#2C3E50) is used for primary text, structural navigation, and core branding elements.
- **Secondary/Accent:** Architectural Orange (#E67E22) is used sparingly for call-to-actions and technical highlights, representing energy and precision.
- **Neutral:** A range of high-clarity whites and cool-toned greys create a "gallery-like" environment for product imagery.
- **Data/Technical:** Cobalt Blue is reserved for technical data sheets, specifications, and certification badges to ensure clarity and trust.

## Typography
The typography system relies on **High-Contrast Sans-Serifs** to convey a modern, industrial tone. 

**Montserrat** is used for headlines to provide a geometric, sturdy presence that feels architectural. **Inter** is utilized for body text and technical data due to its exceptional legibility and neutral, systematic character. All labels and secondary metadata should be rendered in uppercase with increased letter spacing to mimic industrial blueprints and technical documentation.

## Layout & Spacing
The layout follows a **Fixed-Grid System** on desktop to maintain the rigorous structure of a corporate catalog. 

- **Grid:** A 12-column grid with generous 24px gutters. 
- **Rhythm:** An 8px baseline grid ensures vertical harmony across data tables and product specs.
- **Responsibility:** On mobile, the grid collapses to a single column with 20px margins. Content density should remain low; use "negative space" as a functional element to emphasize the premium nature of the brand. Product collections should use asymmetrical spacing to break the industrial monotony.

## Elevation & Depth
To maintain the industrial-modern aesthetic, this design system avoids heavy shadows. Depth is communicated through:

1.  **Tonal Layering:** Using different shades of Deep Slate and light grey to distinguish between surface containers and backgrounds.
2.  **Low-Contrast Outlines:** Elements like cards and inputs use 1px solid borders in a light slate tone (#DCDDE1) rather than drop shadows.
3.  **Hard Overlays:** For modal or menu states, use a semi-transparent Deep Slate backdrop with a subtle blur (10px) to maintain focus without losing the structural context of the page.

## Shapes
The shape language is **Strict and Functional**. 

We utilize a "Soft" rounding (4px / 0.25rem) for UI elements. This provides enough of a modern touch to prevent the UI from feeling dated or overly aggressive, while remaining sharp enough to feel industrial and precise. Product swatches and paint chips should remain perfectly sharp (0px) to represent the literal "cut" of the material.

## Components
- **Buttons:** Primary buttons use a solid Deep Slate background with white Montserrat caps. No gradients. Secondary buttons use a 2px stroke.
- **Product Cards:** Minimalist containers with a subtle 1px border. The paint color swatch should occupy the top 60% of the card area. 
- **Chips:** Used for technical tags (e.g., "Fast Drying", "Anti-Corrosive"). These should be rectangular with the 4px radius and light grey backgrounds.
- **Input Fields:** Bottom-border only or full outline with 1px Deep Slate. Focus states should switch the border to Architectural Orange.
- **Data Tables:** Highly structured with alternate-row shading in very light grey. Headers must be in `label-caps` typography.
- **Technical Badges:** Circular icons with Cobalt Blue accents to highlight certifications (ISO, Eco-friendly).