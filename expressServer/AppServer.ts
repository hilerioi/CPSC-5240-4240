import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import {App} from './App';

let server: any = new App().express;
server.listen(8080);

