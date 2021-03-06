import paths from '../../config/paths';

import Home from '../Home';
import PatientList from '../Patient/PatientList';
import TestList from '../Order/TestList';

export default [
  { path: paths.home, component: Home },
  { path: paths.testList, component: TestList },
  { path: paths.patientList, component: PatientList },
];
