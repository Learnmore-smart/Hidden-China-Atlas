#!/bin/bash
mkdir -p public/images

curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lijiang_-_panoramio_%286%29.jpg/1280px-Lijiang_-_panoramio_%286%29.jpg" -o public/images/lijiang.jpg
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Great_Wall_of_China_July_2006.JPG/1280px-Great_Wall_of_China_July_2006.JPG" -o public/images/hero.jpg
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Langmusi.jpg/1280px-Langmusi.jpg" -o public/images/langmusi.jpg
curl -sL "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Xiapu_Mudflat.jpg/1280px-Xiapu_Mudflat.jpg" -o public/images/sansha.jpg
