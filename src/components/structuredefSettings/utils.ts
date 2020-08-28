import { StructureDefinition } from "../../resources/ts/proto/r4/core/resources/structure_definition_pb";
import {
  Markdown,
  String,
  Boolean,
  Id,
} from "../../resources/ts/proto/r4/core/datatypes_pb";

export const editTitle = (
  structureToEdit: StructureDefinition.AsObject,
  title?: string | String.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.title && (!title || title === "")) {
    delete structureToEdit.title;
  } else if (!structureToEdit.title && title) {
    structureToEdit.title = title as String.AsObject;
  }
  return structureToEdit;
};

export const editExperimental = (
  structureToEdit: StructureDefinition.AsObject,
  experimental?: string | Boolean.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.experimental && (!experimental || experimental === "")) {
    delete structureToEdit.experimental;
  } else if (!structureToEdit.experimental && experimental) {
    structureToEdit.experimental = experimental as Boolean.AsObject;
  }
  return structureToEdit;
};

export const editCopyright = (
  structureToEdit: StructureDefinition.AsObject,
  copyright?: string | Markdown.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.copyright && (!copyright || copyright === "")) {
    delete structureToEdit.copyright;
  } else if (!structureToEdit.copyright && copyright) {
    structureToEdit.copyright = copyright as Markdown.AsObject;
  }
  return structureToEdit;
};

export const editPurpose = (
  structureToEdit: StructureDefinition.AsObject,
  purpose: string | Markdown.AsObject | undefined
): StructureDefinition.AsObject => {
  if (structureToEdit.purpose && (!purpose || purpose === "")) {
    delete structureToEdit.purpose;
  } else if (!structureToEdit.purpose && purpose) {
    structureToEdit.purpose = purpose as Markdown.AsObject;
  }
  return structureToEdit;
};

export const editPublisher = (
  structureToEdit: StructureDefinition.AsObject,
  publisher: string | String.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.publisher && (!publisher || publisher === "")) {
    delete structureToEdit.publisher;
  } else if (!structureToEdit.publisher && publisher) {
    structureToEdit.publisher = publisher as String.AsObject;
  }
  return structureToEdit;
};

export const editId = (
  structureToEdit: StructureDefinition.AsObject,
  id: string | Id.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.id && (!id || id === "")) {
    delete structureToEdit.id;
  } else if (!structureToEdit.id && id) {
    structureToEdit.id = id as Markdown.AsObject;
  }
  return structureToEdit;
};

export const editDescription = (
  structureToEdit: StructureDefinition.AsObject,
  description: string | Markdown.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.description && (!description || description === "")) {
    delete structureToEdit.description;
  } else if (!structureToEdit.description && description) {
    structureToEdit.description = description as Markdown.AsObject;
  }
  return structureToEdit;
};
