import dotenv from 'dotenv';
dotenv.config();


const config = {
   DATABASE_URL:process.env.DIRECT_URL,
   PORT:process.env.PORT
}

export default config;