# 🐕 The Doge House

A fun, interactive web application for dog lovers to discover random cute dog images of various breeds.

![The Doge House App](https://dog.ceo/img/dog-api-logo.svg)

## 🦴 Features

- **Random Dog Images**: Fetch adorable dog photos with a single click
- **Breed Detection**: Automatically identifies and displays the dog breed
- **Beautiful UI**: Elegant animations and visual effects
- **Image Counter**: Tracks how many dogs you've discovered
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Fast Performance**: Optimized images with Next.js Image component

## 🐾 Technologies Used

- **Next.js 15.1.7**: React framework with App Router
- **React 19**: Latest version of React
- **Node.js v22.13.1**: JavaScript runtime
- **TypeScript**: For type-safe code
- **TailwindCSS 3.4.1**: For styling and animations
- **Dog CEO API**: Source of dog images data (https://dog.ceo/dog-api/)
- **Vercel**: Deployment and hosting

## 🐶 Getting Started

### System Requirements

- Node.js 18.17 or later
- macOS, Windows, or Linux operating system

First, clone this repository:

```bash
git clone https://github.com/yourusername/Puppy-API.git
cd Puppy-API
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## 🦮 How It Works

The app fetches random dog images from the Dog CEO API and extracts breed information from the image URL. With each new image, it updates a counter to track how many dogs you've discovered.

The UI features subtle animations, including:
- Hover effects on dog images
- Pulsing and bouncing decorations
- Loading animations
- Interactive button effects

## 🐩 Customization

You can customize various aspects of the app:

- Change the color scheme by modifying the amber/gold tones in the TailwindCSS classes
- Add new animations or visual effects
- Implement breed filtering functionality
- Add favorites or a gallery feature

## 📷 Screenshots

*[Screenshots would be added here once the app is deployed]*

## 📱 Responsive Design

This app is designed to work beautifully on all screen sizes:
- **Desktop**: Full experience with all animations
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Compact design that maintains all functionality

## 🐕‍🦺 API Information

This project uses the [Dog CEO API](https://dog.ceo/dog-api/), a free, public API for dog images.

## 🦴 License

This project is open source and available under the [MIT License](LICENSE).

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Learn More About Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

### Deployment

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
