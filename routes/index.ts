import { Router } from 'express';

import { home } from './home';
import { user } from './user';
import { post } from './post';

// import login from './login';
import { admin } from './admin';

// import postDetail from './post_detail';
// import tag from './tag';

let router = Router();

router.use(home);
router.use(user);
router.use(post);

router.use(admin);

// router.get('/:title', postDetail);
// router.get('/tag/:tagName', tag)

// router.use('/admin', admin);
// router.use('/login', login);


export default router;