import { Settings_Dev } from './Settings.Dev';
import { Settings_Prod } from './Settings.Prod';
import { Settings_Test } from './Settings.Test';
import { EnvSettings } from './EnvSettings';
import env from "@beam-australia/react-env";

/**
 * Utility for non secret application runtime settings.
 *
 * Prefer this over .env-files to minimize number of builds of the App in our pipeline
 */
export class SettingsUtil {
  //Singleton pattern
  private static current: EnvSettings;

  private constructor() {}

  /**
   * Retrieves runtime settings, if none retrieves default
   *
   */
  public static getCurrent(): EnvSettings {
    if (!SettingsUtil.current) {
      this.current = this.getDefault();
    }

    return SettingsUtil.current;
  }

  /**
   * Retrieves/creates runtime settings from runtime arguments, eg container start env
   *   
   */
  public static create(): EnvSettings {
    let envName = env('RUNTIME_ENV') || 'prod'; //always default to prod

    switch(envName){
      case "dev":
        SettingsUtil.current = new Settings_Dev();
        break;
      case "test":
        SettingsUtil.current = new Settings_Test();   
        break;
      case "stage":
        SettingsUtil.current = new Settings_Prod();
        break;              
      default:
        SettingsUtil.current = new Settings_Prod();
        break;
    }    

    return SettingsUtil.current;
  }

  /**
   * Creates default runtime env config (dev)
   */
  public static getDefault(): EnvSettings {
    this.current = new Settings_Dev();

    return this.current;
  }
}
