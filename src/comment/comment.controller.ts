import { Request, Response, NextFunction, Router } from 'express';
import Controller from '../interfaces/controller.interface';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import authMiddleware from '../middleware/auth.middleware';
import validationMiddleware from '../middleware/validation.middleware';
import CreateCommentDto from './comment.dto';
import Comment from './comment.interface';
import commentModel from './comment.model'


class PostController implements Controller {
    public path = '/comments';
    public router = Router();
    private comment = commentModel
  
    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.get(this.path, this.getAllPosts);
      this.router.get(`${this.path}/:id`, this.getPostById);
      this.router
        .all(`${this.path}/*`, authMiddleware)
        .patch(`${this.path}/:id`, validationMiddleware(CreatePostDto, true), this.modifyPost)
        .delete(`${this.path}/:id`, this.deletePost)
        .post(this.path, authMiddleware, validationMiddleware(CreatePostDto), this.createPost);
    }
  



  }
  
  export default PostController;
  