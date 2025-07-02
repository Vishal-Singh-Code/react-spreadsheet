# 📊 React Spreadsheet

A minimal, interactive, spreadsheet-like table built with **React**, **TailwindCSS**, and **@tanstack/react-table**. Designed to deliver an experience similar to Excel or Google Sheets, with real-time inline editing, sorting, filtering, and column resizing.

---

## 🚀 Features

- 🔍 Global search filter
- ↕️ Column sorting
- 🎛️ Resizable columns
- ✏️ Inline editing (on specific fields)
- 🎨 Styled with Tailwind CSS
- 🧠 TypeScript + React best practices
- 🧼 ESLint and Prettier setup for clean code

---

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **@tanstack/react-table v8**
- **Tailwind CSS**
- **Lucide React Icons**
- **Vite** (for development & build)
- **ESLint + Prettier** (for linting & formatting)

---

## 📝 Trade-offs & Limitations

- `#` **Row numbers** are generated using `row.index` and **do not reflect sorted order**. Sorting other columns doesn't update the row numbers.
- 💾 **No persistent state** — all edits are in-memory only.
- 📜 **No pagination** — currently renders all rows directly.
- 🔍 **Search is global**, filtering across all columns rather than per-column.

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── FooterTabs.tsx      
│   ├── Spreadsheet.tsx      
│   ├── Toolbar.tsx      
│   ├── Topbar.tsx      
├── App.tsx                 
└── main.tsx   
```

## 📦 Setup Instructions

### Clone and install
```
git clone https://github.com/vishal-singh-code/react-spreadsheet.git
cd react-spreadsheet
npm install
```

### Start dev server
```
npm run dev
```

### Run lint checks
```
npm run lint
```

### Type-check the project
```
npx tsc --noEmit
```

🔗 [Live Demo](https://react-spreadsheet-three.vercel.app/)


