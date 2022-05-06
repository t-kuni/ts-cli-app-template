import path = require('path');
import dotenv = require('dotenv');
import * as moment from "moment-timezone";
import "./diContainer";

dotenv.config({ path: path.resolve(__dirname, '../.env') });

moment.tz.setDefault("Asia/Tokyo");

