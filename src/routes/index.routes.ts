import {Router} from "express";
import {IndexController} from "../controllers/index.controller";

const router=Router();

router.route('/')
      .get(IndexController);


export default router;

