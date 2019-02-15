#!/bin/sh

cd ../var/www/cstudio
git pull origin master
sudo service nginx restart
