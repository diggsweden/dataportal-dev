import { EnvSettings } from "./EnvSettings";

export class Settings_Test extends EnvSettings {  

  CANONICAL_URL = "http://devportal.test.local";

  envName = 'test';

  public constructor()
  {
    super();    
  }
}