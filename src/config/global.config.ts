import { DionysusConfig, dionysusConfig } from "./adonis.config";
import { BrandingConfig, brandingConfig } from "./branding.config";
import { AdminItem, collectionsConfig } from "./collections.config";

export interface AppConfig {
  dionysus: DionysusConfig;
  branding: BrandingConfig;
  collections: Array<AdminItem>;
}

export const globalConfig: AppConfig = {
  branding: brandingConfig,
  collections: collectionsConfig,
  dionysus: dionysusConfig,
};

export default globalConfig;
