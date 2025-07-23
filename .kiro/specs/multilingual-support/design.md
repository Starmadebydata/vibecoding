# Design Document

## Overview

This design implements a comprehensive multilingual support system for the Vibe Coding website using Next.js 14 App Router with a custom internationalization solution. The system will support Chinese (zh) and English (en) languages with automatic language detection, manual language switching, and proper SEO optimization.

## Architecture

### Route Structure
```
app/
├── layout.tsx (root redirect)
├── page.tsx (root redirect)
├── [locale]/
│   ├── layout.tsx (localized layout)
│   ├── page.tsx (localized homepage)
│   ├── guides/
│   │   └── page.tsx
│   ├── tools/
│   │   └── page.tsx
│   ├── tutorials/
│   │   └── page.tsx
│   ├── best-practices/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   └── submit-project/
│       └── page.tsx
```

### Middleware Layer
- Language detection from Accept-Language headers
- Automatic redirection to appropriate locale
- URL rewriting for clean language-prefixed URLs

### Translation System
- JSON-based translation files stored in `/messages/` directory
- Nested key structure for organized translations
- Custom hook for accessing translations in components

## Components and Interfaces

### Core Components

#### 1. Language Switcher Component
```typescript
interface LanguageSwitcherProps {
  className?: string;
}

// Features:
// - Toggle between zh/en languages
// - Preserve current page context
// - Smooth transition with proper routing
```

#### 2. Localization Hook
```typescript
interface LocalizationHook {
  t: (key: string) => string;
  locale: 'zh' | 'en';
  isZh: boolean;
  isEn: boolean;
  switchLocale: (locale: string) => void;
}

// Usage: useLocalization(namespace?: string)
```

#### 3. Middleware Configuration
```typescript
interface MiddlewareConfig {
  locales: string[];
  defaultLocale: string;
  matcher: string[];
}
```

### Page Structure

#### Localized Layout
- Provides locale context to all child components
- Handles metadata generation for SEO
- Integrates with existing theme and auth providers

#### Page Components
- Each page wrapped in locale-specific route
- Metadata generation with localized titles/descriptions
- Consistent component reuse across languages

## Data Models

### Translation File Structure
```json
{
  "common": {
    "navigation": {
      "guides": "指南",
      "tools": "工具",
      "tutorials": "教程",
      "bestPractices": "最佳实践"
    },
    "language": {
      "switch": "切换语言"
    }
  },
  "pages": {
    "home": {
      "hero": {
        "headline": "Vibe Coding",
        "subheadline": "知识库",
        "description": "探索 AI 驱动的编程方法，发现效率提升的最佳实践",
        "typedText": "探索 • 学习 • 分享"
      },
      "categories": {
        "guides": {
          "title": "入门指南",
          "description": "从这里开始了解 AI 编程"
        }
      }
    }
  }
}
```

### Locale Configuration
```typescript
const localeConfig = {
  locales: ['zh', 'en'],
  defaultLocale: 'zh',
  localeDetection: true
};
```

## Error Handling

### Missing Translations
- Fallback to translation key if translation not found
- Development warnings for missing translations
- Graceful degradation to default language

### Route Handling
- 404 handling for invalid locale combinations
- Proper redirects for legacy URLs
- Canonical URL management

### Build-time Validation
- Verify translation file completeness
- Validate route structure consistency
- Check for missing locale implementations

## Testing Strategy

### Unit Tests
- Translation hook functionality
- Language switcher component behavior
- Middleware routing logic
- Metadata generation accuracy

### Integration Tests
- End-to-end language switching
- SEO metadata validation
- Route preservation across language changes
- Browser language detection

### Accessibility Tests
- Screen reader compatibility with language switching
- Proper lang attribute management
- Keyboard navigation support

## Implementation Phases

### Phase 1: Core Infrastructure
- Set up i18n request configuration
- Implement middleware for language detection
- Create basic translation system
- Fix current build errors

### Phase 2: Component Localization
- Update all existing components to use translations
- Implement language switcher
- Create localized page routes
- Add proper metadata generation

### Phase 3: Content Translation
- Complete Chinese translations
- Add English translations
- Implement fallback mechanisms
- Optimize for SEO

### Phase 4: Testing and Optimization
- Add comprehensive test coverage
- Performance optimization
- Accessibility improvements
- Documentation updates

## SEO Considerations

### Hreflang Implementation
- Automatic hreflang tag generation
- Proper canonical URL structure
- Language-specific sitemaps

### Metadata Localization
- Localized page titles and descriptions
- Language-specific keywords
- Open Graph and Twitter Card localization

### URL Structure
- Clean language-prefixed URLs (/zh/, /en/)
- Proper 301 redirects for legacy URLs
- Consistent internal linking structure