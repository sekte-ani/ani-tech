FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libfreetype6-dev \
    locales \
    jpegoptim optipng pngquant gifsicle \
    vim \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libonig-dev \
    libzip-dev \
    libicu-dev \
    libxml2-dev \
    zip \
    unzip

RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip intl

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY composer.lock composer.json ./

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN composer install --no-scripts --no-progress --prefer-dist

COPY . .

RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
RUN chmod -R 777 /var/www/storage /var/www/bootstrap/cache

EXPOSE 9000

CMD ["php-fpm"]