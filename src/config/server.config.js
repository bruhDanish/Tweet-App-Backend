import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const PORT = process.env.PORT || 3000; // Define a port variable

export const MONGO_URL = process.env.MONGO_URL; // Define a MongoDB URL

export const AWS_REGION = process.env.AWS_REGION; // Define an AWS region

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID; // Define an AWS access key ID

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY; // Define an AWS secret access key

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME; // Define an AWS bucket name