import { StructureDefinition } from "../../resources/ts/proto/r4/core/resources/structure_definition_pb";
import {
  Markdown,
  String,
  Boolean,
  Id,
} from "../../resources/ts/proto/r4/core/datatypes_pb";

export const createTitle = (
  structureToEdit: StructureDefinition.AsObject,
  title: string | String.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.title && !title) {
    delete structureToEdit.title;
  } else if (
    (!structureToEdit.title && title) ||
    structureToEdit.title !== title
  ) {
    structureToEdit.title = title as String.AsObject;
  }
  return structureToEdit;
};

export const createExperimental = (
  structureToEdit: StructureDefinition.AsObject,
  experimental: string | Boolean.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.experimental && !experimental) {
    delete structureToEdit.experimental;
  } else if (
    (!structureToEdit.experimental && experimental) ||
    structureToEdit.experimental !== experimental
  ) {
    structureToEdit.experimental = experimental as Boolean.AsObject;
  }
  return structureToEdit;
};

export const createCopyright = (
  structureToEdit: StructureDefinition.AsObject,
  copyright: string | Markdown.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.copyright && !copyright) {
    delete structureToEdit.copyright;
  } else if (
    (!structureToEdit.copyright && copyright) ||
    structureToEdit.copyright !== copyright
  ) {
    structureToEdit.copyright = copyright as Markdown.AsObject;
  }
  return structureToEdit;
};

export const createPurpose = (
  structureToEdit: StructureDefinition.AsObject,
  purpose: string | Markdown.AsObject | undefined
): StructureDefinition.AsObject => {
  if (structureToEdit.purpose && !purpose) {
    delete structureToEdit.purpose;
  } else if (
    (!structureToEdit.purpose && purpose) ||
    structureToEdit.purpose !== purpose
  ) {
    structureToEdit.purpose = purpose as Markdown.AsObject;
  }
  return structureToEdit;
};

export const createPublisher = (
  structureToEdit: StructureDefinition.AsObject,
  publisher: string | String.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.publisher && !publisher) {
    delete structureToEdit.publisher;
  } else if (
    (!structureToEdit.publisher && publisher) ||
    structureToEdit.publisher !== publisher
  ) {
    structureToEdit.publisher = publisher as String.AsObject;
  }
  return structureToEdit;
};

export const createId = (
  structureToEdit: StructureDefinition.AsObject,
  id: string | Id.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.id && !id) {
    delete structureToEdit.id;
  } else if ((!structureToEdit.id && id) || structureToEdit.id !== id) {
    structureToEdit.id = id as Markdown.AsObject;
  }
  return structureToEdit;
};

export const createDescription = (
  structureToEdit: StructureDefinition.AsObject,
  description: string | Markdown.AsObject
): StructureDefinition.AsObject => {
  if (structureToEdit.description && !description) {
    delete structureToEdit.description;
  } else if (
    (!structureToEdit.description && description) ||
    structureToEdit.description !== description
  ) {
    structureToEdit.description = description as Markdown.AsObject;
  }
  return structureToEdit;
};
