import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
var MongoClient = require('mongodb').MongoClient;
var Q = require('q');

import {TechnicianModel} from './model/TechnicianModel';
import {SalonModel} from './model/SalonModel';
import {LanguageModel} from './model/LanguageModel';
import {RegisteredUserModel} from './model/RegisteredUserModel';
import {SkillModel} from './model/SkillModel';
import {RatingModel} from './model/RatingModel';

//import {DataAccess} from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Technicians:TechnicianModel;
  public Languages:LanguageModel;
  public RegisteredUsers:RegisteredUserModel;
  public Skills:SkillModel;
  public Ratings:RatingModel;
  public Salons:SalonModel;
  public idGenerator:number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = 102;
    this.Technicians = new TechnicianModel();
    this.Languages = new LanguageModel();
    this.RegisteredUsers = new RegisteredUserModel();
    this.Skills =new SkillModel();
    this.Ratings = new RatingModel();
    this.Salons = new SalonModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    
  //API endpoints for technician
    router.post('/app/technician/', (req, res) => {
      console.log(req.body);
      var jsonObj = req.body;
      //jsonObj.listId = this.idGenerator;
      this.Technicians.model.create([jsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
      res.send(this.idGenerator.toString());
      this.idGenerator++;
    });
    

    router.get('/app/technician/:technicianId', (req, res) => {
        var id = req.params.technicianId;
        console.log('Query single technician with id: ' + id);
        this.Technicians.retreiveTechniciansDetails(res, {technicianID: id});
    });

    router.get('/app/technician/', (req, res) => {
        console.log('Query All technicians');
        this.Technicians.retreiveAllTechnicians(res);
    });

    router.get('/app/technicianCount', (req, res) => {
      console.log('Query the number of technician elements in db');
      this.Technicians.retrieveTechnicianCount(res);
    });
    

     //API endpoints for salon

    router.post('/app/salon/', (req, res) => {
      console.log(req.body);
      var jsonObj = req.body;
      //jsonObj.listId = this.idGenerator;
      this.Salons.model.create([jsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
      res.send(this.idGenerator.toString());
      this.idGenerator++;
    });

    router.get('/app/salon/', (req, res) => {
        console.log('Query All salons');
        this.Salons.retreiveAllSalons(res);
    });

    router.get('/app/salon/:salonId', (req, res) => {
      var id = req.params.salonId;
      console.log('Query single salon with id: ' + id);
      this.Salons.retreiveSalonDetails(res, {salonID: id});
  });

  router.get('/app/salonCount', (req, res) => {
    console.log('Query the number of salon elements in db');
    this.Salons.retrieveSalonCount(res);
  });


   //API endpoints for registeredUser

  router.post('/app/registeredUser/', (req, res) => {
    console.log(req.body);
    var jsonObj = req.body;
    //jsonObj.listId = this.idGenerator;
    this.RegisteredUsers.model.create([jsonObj], (err) => {
        if (err) {
            console.log('object creation failed');
        }
    });
    res.send(this.idGenerator.toString());
    this.idGenerator++;
    });
    
    router.get('/app/registeredUser/', (req, res) => {
        console.log('Query All registered Users');
        this.RegisteredUsers.retreiveAllRegisteredUsers(res);
    });
    
    router.get('/app/registeredUser/:registeredUserId', (req, res) => {
      var id = req.params.registeredUserId;
      console.log('Query single registered User with id: ' + id);
      this.RegisteredUsers.retreiveRegisteredUsersDetails(res, {registeredUserID: id});
    });

    router.get('/app/registeredUserCount', (req, res) => {
      console.log('Query the number of registeredUser elements in db');
      this.RegisteredUsers.retrieveAllRegisteredUserCount(res);
    });

    //API endpoints for skills

    router.get('/app/skills/', (req, res) => {
        console.log('Query All skills');
        this.Skills.retreiveAllSkills(res);
    });
    
    


    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    this.expressApp.use(express.static(__dirname + '/public'));
    
  }

}

export {App};