import React from 'react';

// Program Pages
import ForkliftOperator from '../pages/programs/ForkliftOperator';
import ReachTruckOperator from '../pages/programs/ReachTruckOperator';
import WarehouseOperations from '../pages/programs/WarehouseOperations';
import WarehouseSupervisor from '../pages/programs/WarehouseSupervisor';
import ForkliftSafety from '../pages/programs/ForkliftSafety';
import ReachTruckTraining from '../pages/programs/ReachTruckTraining';
import RoadSafety from '../pages/programs/RoadSafety';
import SafetyTraining from '../pages/programs/SafetyTraining';
import SoftSkills from '../pages/programs/SoftSkills';
import FiveS from '../pages/programs/FiveS';
import QualityTraining from '../pages/programs/QualityTraining';
import WeldingTraining from '../pages/programs/WeldingTraining';
import BBSTraining from '../pages/programs/BBSTraining';
import KaizenTraining from '../pages/programs/KaizenTraining';
import PokayokeTraining from '../pages/programs/PokayokeTraining';
import POSHTraining from '../pages/programs/POSHTraining';

export const programRoutes = [
  { path: '/programs/forklift-operator', element: <ForkliftOperator /> },
  { path: '/programs/reach-truck-operator', element: <ReachTruckOperator /> },
  { path: '/programs/warehouse-operations', element: <WarehouseOperations /> },
  { path: '/programs/warehouse-supervisor', element: <WarehouseSupervisor /> },
  { path: '/programs/forklift-safety', element: <ForkliftSafety /> },
  { path: '/programs/reach-truck-training', element: <ReachTruckTraining /> },
  { path: '/programs/road-safety', element: <RoadSafety /> },
  { path: '/programs/safety-training', element: <SafetyTraining /> },
  { path: '/programs/soft-skills', element: <SoftSkills /> },
  { path: '/programs/5s-training', element: <FiveS /> },
  { path: '/programs/quality-training', element: <QualityTraining /> },
  { path: '/programs/welding-training', element: <WeldingTraining /> },
  { path: '/programs/bbs-training', element: <BBSTraining /> },
  { path: '/programs/kaizen-training', element: <KaizenTraining /> },
  { path: '/programs/pokayoke-training', element: <PokayokeTraining /> },
  { path: '/programs/posh-training', element: <POSHTraining /> }
];