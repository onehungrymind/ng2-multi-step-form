import { UserProfile } from './user';
import { HealthProfile } from "./health";

export interface AppStore {
  user: UserProfile,
  health: HealthProfile
}
