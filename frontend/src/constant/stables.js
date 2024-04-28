const S3_BUCKET_URL = "";

function getImageUrl(imageKey) {
  // Construct the complete image URL by concatenating the S3 bucket URL with the image key
  return `${S3_BUCKET_URL}${imageKey}`;
}

const stables = { S3_BUCKET_URL, getImageUrl };

export default stables;
