import { AdminItem } from "../../../config/collections.config";
import {
  DraftComponentVisibilityActionTypes,
  DraftEntryNewActionTypes,
  DRAFT_COMPONENT_HIDE,
  DRAFT_COMPONENT_SHOW,
  DRAFT_ENTRY_NEW_CREATE,
  DRAFT_ENTRY_NEW_DISCARD,
} from "../types";

export const draftComponentShow = (): DraftComponentVisibilityActionTypes => {
  return {
    type: DRAFT_COMPONENT_SHOW,
  };
};

export const draftComponentHide = (): DraftComponentVisibilityActionTypes => {
  return {
    type: DRAFT_COMPONENT_HIDE,
  };
};

export const draftCreateNew = (
  activeCollection: AdminItem
): DraftEntryNewActionTypes => {
  return {
    type: DRAFT_ENTRY_NEW_CREATE,
    payload: activeCollection,
  };
};

export const draftDiscard = (): DraftEntryNewActionTypes => {
  return {
    type: DRAFT_ENTRY_NEW_DISCARD,
  };
};
