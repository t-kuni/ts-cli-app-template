import dotenv = require('dotenv');
import * as moment from "moment-timezone";
import "./diContainer";

dotenv.config({ path: '.env' });

moment.tz.setDefault("Asia/Tokyo");

