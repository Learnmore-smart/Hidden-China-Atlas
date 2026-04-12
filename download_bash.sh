#!/bin/bash
images=(
    "pingtan island beach stone houses landscape photography high quality:pingtan.jpg"
    "gannan tibetan grassland monastery landscape photography high quality:gannan.jpg"
    "hongcun ancient village water reflection huizhou architecture landscape photography high quality:hongcun.jpg"
    "zhoushan islands fishing village beach sea landscape photography high quality:zhoushan.jpg"
    "lijiang ancient town naxi architecture mountain landscape photography high quality:lijiang.jpg"
    "hulunbuir grassland mongolian yurts nature landscape photography high quality:hulunbuir.jpg"
    "xidi ancient village huizhou architecture landscape photography high quality:xidi.jpg"
    "sansha town fujian traditional coastal fishing village sea landscape photography high quality:sansha.jpg"
    "langmusi tibetan monastery town nature landscape photography high quality:langmusi.jpg"
    "fenghuang ancient town miao architecture river landscape photography night view high quality:fenghuang.jpg"
    "yueyang tower dongting lake ancient chinese architecture landscape photography high quality:yueyang.jpg"
    "wuyuan rural china ancient village huizhou architecture rape flower fields landscape photography high quality:wuyuan.jpg"
    "beautiful hidden china landscape nature travel photography high quality:hero.jpg"
)

mkdir -p public/images

for item in "${images[@]}"; do
    prompt="${item%%:*}"
    filename="${item##*:}"
    encoded_prompt=$(jq -rn --arg x "$prompt" '$x|@uri')
    url="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encoded_prompt}&image_size=landscape_16_9"
    
    echo "Downloading $filename..."
    for i in {1..20}; do
        # Fetch headers to find location
        location=$(curl -s -I "$url" | grep -i '^location:' | awk '{print $2}' | tr -d '\r')
        
        if [[ "$location" == *"default.jpeg"* ]]; then
            echo "$filename generating... waiting 3s"
            sleep 3
        elif [[ -n "$location" ]]; then
            echo "$filename ready! downloading from $location"
            curl -s -L "$location" -o "public/images/$filename"
            break
        else
            echo "Directly downloading $filename..."
            curl -s -L "$url" -o "public/images/$filename"
            break
        fi
    done
done
echo "All done!"
