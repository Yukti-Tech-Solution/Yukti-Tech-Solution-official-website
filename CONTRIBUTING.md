# Contributing to Yukti Tech Solution Website

Thank you for your interest in contributing to the Yukti Tech Solution website! This document provides guidelines and instructions for contributing.

## 🌟 About Yukti Tech Solution

**Official Website:** [https://yuktitechsolution.co.in/](https://yuktitechsolution.co.in/)

### Leadership Team

- **Pranav P. Kapse** - Co-Founder & CEO
- **Vedant R. Sawaleshwarkar** - Co-Founder & CTO
- **Vaibhav S. Waghalkar** - Co-Founder & Head of Engineering
- **Lahu K. Chavan** - Co-Founder & COO

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/OS information

### Suggesting Features

We welcome feature suggestions! Please create an issue with:
- Clear description of the feature
- Use cases and benefits
- Mockups or examples if possible

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Write meaningful commit messages
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   npm run build
   npm run lint
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: Add your feature description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear description
   - Reference any related issues
   - Add screenshots for UI changes

## 📋 Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Avoid `any` types - use proper types
- Use interfaces for object shapes
- Add JSDoc comments for public APIs

### React
- Use functional components with hooks
- Keep components small and focused
- Use meaningful prop names
- Extract reusable logic into custom hooks

### Styling
- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure responsive design
- Maintain dark mode compatibility

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Constants: `UPPER_SNAKE_CASE.ts`

## 🧪 Testing

Before submitting:
- Test in multiple browsers
- Test responsive design
- Check accessibility
- Verify dark mode works
- Run linting: `npm run lint`

## 📝 Commit Message Format

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Example:
```
feat: Add project filtering by category
fix: Resolve image loading issue on mobile
docs: Update README with deployment instructions
```

## 🔍 Code Review Process

1. All PRs require review
2. Address review comments promptly
3. Keep PRs focused and small
4. Update documentation as needed
5. Ensure CI checks pass

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## ❓ Questions?

Feel free to:
- Open an issue for questions
- Contact us through [our website](https://yuktitechsolution.co.in/)

Thank you for contributing! 🎉

