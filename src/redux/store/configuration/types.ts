export const GET_CONFIG_START = "GET_CONFIG_START";
export const GET_CONFIG_SUCCESS = "GET_CONFIG_SUCCESS";
export const GET_CONFIG_FAIL = "GET_CONFIG_FAIL";
export const SET_CONFIG_START = "SET_CONFIG_START";
export const SET_CONFIG_SUCCESS = "SET_CONFIG_SUCCESS";
export const SET_CONFIG_FAIL = "SET_CONFIG_FAIL";

export interface WarhorseConfig {
  collections: Array<Content>;
  media_location: string | null;
  branding: BrandingConfigurationState;
}

export interface WarhorseConfigState extends WarhorseConfig {
  isLoading: boolean;
  error: string | Array<string> | null | undefined;
}

type BrandingConfigurationState = {
  companyName: string | null;
  companyWebsite: string | null;
  logoUrl: string | null;
};

type Content = {
  fields: Array<{}>;
  name: string;
  label: string;
};

interface GetConfigStart {
  type: typeof GET_CONFIG_START;
}
interface GetConfigSuccess {
  type: typeof GET_CONFIG_SUCCESS;
  payload: WarhorseConfig;
}
interface GetConfigFail {
  type: typeof GET_CONFIG_FAIL;
  error: string;
}
interface SetConfigStart {
  type: typeof SET_CONFIG_START;
}
interface SetConfigSuccess {
  type: typeof SET_CONFIG_SUCCESS;
}
interface SetConfigFail {
  type: typeof SET_CONFIG_FAIL;
  error: string;
}

export type GetConfigActionTypes =
  | GetConfigStart
  | GetConfigSuccess
  | GetConfigFail;

export type SetConfigActionTypes =
  | SetConfigStart
  | SetConfigSuccess
  | SetConfigFail;

export type ConfigurationActionTypes =
  | GetConfigActionTypes
  | SetConfigActionTypes;
