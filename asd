gcloud run deploy hotels-online-travel-agency \
    --cpu=1 \
    --memory=1Gi \
    --region asia-southeast1 \
    --image gcr.io/smartgo-life-prod/hotels-online-travel-agency:0b3b43d79f4ee6b961a5c2fb4b6067375200f446 \
    --platform "managed" \
    --port=3000 \
    --allow-unauthenticated
