import { IAppState } from './';
import { Router } from 'react-router';

export const routerSelector = (state: IAppState): Router => state.router;
