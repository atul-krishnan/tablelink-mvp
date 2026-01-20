# TableLink Landing Page

A premium, high-trust MVP landing page for TableLink — a trust-first dinner club for real friendships, launching in Bangalore with women-only tables.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- **Google Sheets** for form submissions (via Apps Script)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SHEETS_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

> **Note:** Leave this empty for now if you haven't set up Google Sheets yet. The form will simulate success.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## Google Sheets Setup

### Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it "TableLink Applications" or similar
3. Rename the first tab to "Applications"
4. Add these column headers in row 1:

| Timestamp | Full Name | Age | WhatsApp | Neighborhood | Max Travel | Work Type | Hopes | Social URL | New to Bangalore | How Long | Submitted At |
|-----------|-----------|-----|----------|--------------|------------|-----------|-------|------------|-----------------|----------|--------------|

5. Copy the **Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```

### Step 2: Deploy the Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any default code
3. Copy the contents of `apps-script/Code.gs` and paste it
4. Update the `SHEET_ID` constant with your Sheet ID
5. Click **Run > testSheetAccess** to verify setup (authorize when prompted)
6. Check the execution log to confirm it worked

### Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon and select **Web app**
3. Configure:
   - Description: "TableLink Form Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Copy the **Web app URL**

### Step 4: Update Environment Variable

Add the Web app URL to your `.env.local`:

```env
NEXT_PUBLIC_SHEETS_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart your dev server if running.

---

## Deploying to Vercel

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add the environment variable:
   - Name: `NEXT_PUBLIC_SHEETS_ENDPOINT`
   - Value: Your Apps Script Web app URL
4. Deploy

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variable
vercel env add NEXT_PUBLIC_SHEETS_ENDPOINT
```

---

## Project Structure

```
├── apps-script/
│   └── Code.gs              # Google Apps Script for form submission
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & CSS variables
│   │   ├── layout.tsx       # Root layout with fonts & metadata
│   │   ├── page.tsx         # Main landing page
│   │   ├── privacy/         # Privacy policy
│   │   └── terms/           # Terms of service
│   ├── components/
│   │   ├── sections/        # Page sections (Hero, FAQ, etc.)
│   │   └── ui/              # Reusable UI components
│   └── lib/
│       ├── site-config.ts   # Centralized content/copy
│       └── utils.ts         # Utility functions
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

---

## Customization

### Changing Copy

All website copy is centralized in `src/lib/site-config.ts`. Edit this file to update:
- Headlines and descriptions
- FAQ questions and answers
- Location cards
- Form labels and validation messages

### Changing Colors

The color palette is defined as CSS variables in `src/app/globals.css`:

```css
:root {
  --background: 40 20% 98%;
  --foreground: 30 10% 12%;
  --accent: 25 80% 55%;
  /* ... */
}
```

### Adding New Locations

Add new entries to `locations.cards` in `site-config.ts`:

```typescript
{
  tag: "COMING SOON",
  title: "HSR Layout",
  body: "Join the waitlist...",
  button: "Join HSR waitlist",
  value: "HSR Layout (Coming soon)"
}
```

Don't forget to also add to `joinForm.neighborhoods`.

---

## License

Private - TableLink © 2026
