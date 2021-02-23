import { AdonisConfig, adonisConfig } from "./adonis.config";
import { BrandingConfig, brandingConfig } from "./branding.config";
import { AdminItem, collectionsConfig } from "./collections.config";

export interface AppConfig {
  branding: BrandingConfig;
  collections: Array<AdminItem>;
}

export const globalConfig: AppConfig = {
  branding: brandingConfig,
  collections: collectionsConfig,
};

export default globalConfig;
