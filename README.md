# Krumuk NewsV2

A modern web application for news and articles management built with Laravel and React.

## 🚀 Overview

Krumuk NewsV2 is a comprehensive news and articles web application that combines the power of Laravel's robust backend with React's dynamic frontend capabilities. The application uses Inertia.js to seamlessly bridge the gap between server and client, providing a smooth single-page application experience.

## ✨ Features

- **Modern Stack**: Laravel backend with React frontend
- **Seamless Integration**: Inertia.js for smooth client-server communication
- **Article Management**: Create, read, update, and delete articles
- **User Management**: Authentication and authorization system
- **Responsive Design**: Mobile-first approach for all devices
- **Search Functionality**: Find articles quickly and efficiently
- **Category Management**: Organize articles by categories
- **Rich Text Editor**: Create and edit articles with rich formatting
- **Image Upload**: Support for article images and media
- **SEO Optimized**: Clean URLs and meta tags for better search visibility

## 🛠️ Technology Stack

### Backend
- **Laravel** - PHP framework for web applications
- **MySQL/SQLite** - Database management
- **PHP** - Server-side scripting language

### Frontend
- **React** - JavaScript library for building user interfaces
- **Inertia.js** - Modern monolith approach
- **Tailwind CSS** - Utility-first CSS framework (if used)
- **Vite** - Fast build tool and development server
- **Shadcn** - Component Library for building user interface

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- PHP >= 8.1
- Composer
- Node.js >= 16.x
- npm or yarn
- MySQL/PostgreSQL database server

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CHUNSOKNA1997/__Articles_Web.git
   cd __Articles_Web
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Environment Setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configure your database**
   Edit the `.env` file and update the database configuration:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

6. **Run database migrations**
   ```bash
   php artisan migrate
   ```

7. **Seed the database (optional)**
   ```bash
   php artisan db:seed
   ```

8. **Build frontend assets**
   ```bash
   npm run build
   # or for development
   npm run dev
   ```

## 🚀 Running the Application

1. **Start the Laravel development server**
   ```bash
   php artisan serve
   ```

2. **Start the Vite development server** (in a separate terminal)
   ```bash
   npm run dev
   ```

3. **Access the application**
   Open your browser and navigate to `http://localhost:8000`

## 📁 Project Structure

```
__Articles_Web/
├── app/                    # Laravel application logic
│   ├── Http/Controllers/   # Controllers
│   ├── Models/            # Eloquent models
│   └── ...
├── database/              # Database migrations and seeders
├── resources/             # Frontend resources
│   ├── js/               # React components and JavaScript
│   ├── views/            # Blade templates
│   └── css/              # Stylesheets
├── routes/               # Application routes
├── storage/              # File storage
├── public/               # Public assets
├── .env.example          # Environment variables template
├── composer.json         # PHP dependencies
├── package.json          # Node.js dependencies
└── README.md            # This file
```

## 🔑 Key Features Explained

### Article Management
- Create, edit, and delete articles
- Rich text editor for content creation
- Image and media upload support
- Category and tag management

### User Authentication
- User registration and login
- Role-based access control
- Password reset functionality

### Search & Filter
- Full-text search across articles
- Filter by categories, tags, and date
- Advanced search options

## 🌐 API Endpoints

The application provides RESTful API endpoints for:

- `/admin/posts` - Articles management
- `/admin/posts/create` - Create a new article
- `/admin/posts/uuid` - Show details of a specific post
- `/admin/posts/uuid/edit` - Edit a post details
## 🧪 Testing

Run the test suite:

```bash
# PHP tests
php artisan test

# JavaScript tests
npm run test
```

## 🔄 Development Workflow

1. **Backend Development**
   - Create/modify Laravel controllers, models, and migrations
   - Test with `php artisan test`

2. **Frontend Development**
   - Develop React components in `resources/js/`
   - Use `npm run dev` for hot reloading
   - Build for production with `npm run build`

## 📈 Performance Optimization

- **Caching**: Laravel's built-in caching system
- **Database Optimization**: Proper indexing and query optimization
- **Asset Optimization**: Vite for efficient bundling and minification
- **CDN Integration**: For static assets delivery

## 🔧 Configuration

### Environment Variables
Key environment variables to configure:

```env
APP_NAME="Krumuk NewsV2"
APP_ENV=production
APP_URL=http://your-domain.com
DB_CONNECTION=mysql
MAIL_MAILER=smtp
```

### Laravel Configuration
- Database settings in `config/database.php`
- Mail configuration in `config/mail.php`
- Cache settings in `config/cache.php`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **CHUNSOKNA1997** - *Initial work* - [GitHub Profile](https://github.com/CHUNSOKNA1997)

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/CHUNSOKNA1997/__Articles_Web/issues) page
2. Create a new issue if needed
3. Contact the maintainers

## 🙏 Acknowledgments

- Laravel community for the excellent framework
- React team for the powerful frontend library
- Inertia.js for seamless integration
- All contributors and users of this project

---

**Made with ❤️ by CHUNSOKNA1997**
