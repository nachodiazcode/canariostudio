#!/bin/sh

cd ./var/www/canariostudio
git pull origin master
sudo service nginx restart
