import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

// router definition //
const router = createRouter({ 
  history: createWebHistory(), 
  routes
});

export default router