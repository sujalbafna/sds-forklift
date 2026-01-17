import { programRoutes } from '../data/programRoutes';

const routeMap: { [key: string]: string } = {
  'Reach Truck Operator': programRoutes.reachTruckOperator,
  'Forklift Operator': programRoutes.forkliftOperator,
  'Warehouse Operations': programRoutes.warehouseOperations,
  'Warehouse Supervision': programRoutes.warehouseSupervisor,
  'Forklift Safety Training': programRoutes.forkliftSafety,
  'Reach Truck Training': programRoutes.reachTruckTraining,
  'Road Safety Training': programRoutes.roadSafety,
  'Safety Training': programRoutes.safetyTraining,
  'Soft Skill Training': programRoutes.softSkills,
  '5S Training': programRoutes.fiveS,
  'Quality Training': programRoutes.qualityTraining,
  'Welding Training': programRoutes.weldingTraining,
  'BBS Training': programRoutes.bbsTraining,
  'Kaizen Training': programRoutes.kaizenTraining,
  'Pokayoke Training': programRoutes.pokayokeTraining,
  'POSH Training': programRoutes.poshTraining,
};

export const getServiceRoute = (title: string): string | undefined => {
  return routeMap[title];
};