# Book Management System

A lightweight, efficient Angular application for managing your book collection. This single-page application allows users to add, display, and delete books with data persistence through the browser's local storage.

## Features

- **Add Books**: Create new book entries with title and author information
- **View Books**: Display your entire collection in a clean, tabular format
- **Edit Books**: Modify existing book information with inline editing
- **Delete Books**: Remove books from your collection with a single click
- **Persistent Storage**: All data is stored in the browser's local storage
- **Responsive Design**: Works on desktop and mobile devices

## Screenshots

![Book Management System Screenshot](https://github.com/pheyboer/book-management-system/blob/main/public/BookManangementSystemAngular.jpg)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/book-management-system.git

# Navigate to the project directory
cd book-management-system

# Install dependencies
npm install

# Start the development server
ng serve
```

Then open your browser and navigate to http://localhost:4200/.

## Technologies Used

- 🅰️ **Angular 19.2.12**: Front-end framework
- 🟦 **TypeScript**: Programming language
- 🌐 **HTML/CSS**: Structure and styling
- 💾 **Local Storage API**: Data persistence
- 📝 **Angular Forms**: Form handling with two-way binding

## Project Structure

```txt
book-management-system/
├── src/
│   ├── app/
│   │   ├── book/                         # Book Component
│   │   │   ├── book.component.ts         # Component logic & data management
│   │   │   ├── book.component.html       # UI template with form and book list
│   │   │   └── book.component.css        # Component-specific styling
│   │   │
│   │   ├── app.component.ts              # Root application component
│   │   ├── app.component.html            # Main application template
│   │   ├── app.component.css             # Application-wide styles
│   │   ├── app.routes.ts                 # Application routing configuration
│   │   └── app.config.ts                 # Application configuration
│   │
│   ├── assets/                           # Static assets (images, icons)
│   ├── index.html                        # Main HTML entry point
│   ├── main.ts                           # Application bootstrap file
│   └── styles.css                        # Global styles
│
├── package.json                          # Project dependencies & scripts
├── tsconfig.json                         # TypeScript configuration
├── angular.json                          # Angular workspace configuration
└── [README.md](http://_vscodecontentref_/0)                             # Project documentation (this file)
```

## Usage

### Adding a Book:

- Enter the book title and author in the form fields
- Click "Add Book" to save it to your collection

### Viewing Books:

- All saved books appear in the table below the form
- Books are automatically loaded from local storage

### Editing a Book:

- Click the "Edit" button next to any book you want to modify
- Update the title and/or author in the inline form
- Click "Save" to confirm changes or "Cancel" to discard them

### Deleting a Book:

- Click the "Delete" button next to any book to remove it

## Development Commands

### Building

To build the project run:

```
ng build
```

This will compile your project and store the build artifacts in the dist/ directory.

### Running Unit Tests

To execute unit tests with Karma, use:

```
ng test
```

## Future Enhancements

- Book categorization and filtering
- Search functionality
- Book details page with additional information
- User accounts with cloud storage

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Created with ❤️ using Angular 19 - June 2025
