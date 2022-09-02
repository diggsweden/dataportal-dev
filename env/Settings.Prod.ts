import { EnvSettings } from "./EnvSettings";

export class Settings_Prod extends EnvSettings {  

  CANONICAL_URL = "https://dev.dataportal.se";

  envName = 'prod';

  public constructor()
  {
    super();    
  }
}