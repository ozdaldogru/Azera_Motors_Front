# Azera Motors Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm, yarn, pnpm, or bun

### Environment Variables

Create a `.env` file in the root directory and fill in the following details:

```env
MONGODB_URL=

ADMIN_DASHBOARD_URL=
NEXT_PUBLIC_API_URL={ADMIN_DASHBOARD_URL}/api

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

### Development

To start the development server, run one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Running in Production

To run the production build, run:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Used Technologies

This project uses the following technologies:

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development
- [MongoDB](https://www.mongodb.com/) - A document-oriented NoSQL database
- [Google Maps API](https://developers.google.com/maps) - A set of APIs for integrating Google Maps into your applications

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - Your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.