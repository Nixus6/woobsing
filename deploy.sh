#run database migrations
yes | php artisan migrate:fresh

#run seeds

php artisan db:seed 