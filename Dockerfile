# Use PHP 8.2 with necessary extensions
FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    zip \
    unzip \
    curl \
    git \
    sqlite3 \
    libsqlite3-dev \
    npm \
    nodejs

# Install PHP extensions (added pdo_pgsql for PostgreSQL)
RUN docker-php-ext-install pdo pdo_mysql pdo_sqlite pdo_pgsql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy files
COPY . .

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev

# Install Node modules & build frontend
RUN npm install && npm run build

# Set permissions
RUN chown -R www-data:www-data /var/www && chmod -R 755 /var/www

EXPOSE 8000

# Start Laravel server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]