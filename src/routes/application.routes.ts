import express from "express";
import { NearbyAsteroids, Welcome } from '../controllers/application'

const Router = express.Router();

// # this is report status API
Router.get('/welcome', Welcome)

Router.get('/nearbyAsteroids', NearbyAsteroids)

export default Router;