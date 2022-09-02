import { EnvSettings } from "./EnvSettings";

export class Settings_Dev extends EnvSettings {  

  CANONICAL_URL = "http://localhost:3000";

  envName = 'dev';

  public constructor()
  {
    super();    
  }
}